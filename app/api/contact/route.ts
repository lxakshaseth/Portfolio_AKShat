import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/mailer";

// Helper function to create a timeout promise
const withTimeout = <T>(promise: Promise<T>, ms: number, fallbackValue: T): Promise<T> => {
  let timer: NodeJS.Timeout;
  const timeoutPromise = new Promise<T>((resolve) => {
    timer = setTimeout(() => resolve(fallbackValue), ms);
  });

  return Promise.race([
    promise.then((res) => {
      clearTimeout(timer);
      return res;
    }),
    timeoutPromise,
  ]);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactEntry = {
      name,
      email,
      subject: subject || "",
      message,
      createdAt: new Date(),
    };

    // Task 1: Save to MongoDB (with max 2.5s timeout)
    const saveToMongo = async (): Promise<boolean> => {
      try {
        if (!clientPromise) return false;
        const client = await clientPromise;
        const dbName = process.env.MONGODB_DB || "portfolio";
        const db = client.db(dbName);
        await db.collection("contacts").insertOne(contactEntry);
        return true;
      } catch (dbErr) {
        console.error("Failed to save contact submission to MongoDB:", dbErr);
        return false;
      }
    };

    // Task 2: Send Email Notification (with max 3s timeout)
    const sendMail = async (): Promise<boolean> => {
      try {
        const result = await sendContactNotification({
          name,
          email,
          subject,
          message,
        });
        return result.success;
      } catch (mailErr) {
        console.error("Failed to send contact email notification:", mailErr);
        return false;
      }
    };

    // Execute concurrently with a strict 3-second deadline
    const [mongoSaved, emailSent] = await Promise.all([
      withTimeout(saveToMongo(), 2500, false),
      withTimeout(sendMail(), 3000, false),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        storedInDb: mongoSaved,
        emailNotificationSent: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
