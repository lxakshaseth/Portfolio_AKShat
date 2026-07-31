import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/mailer";

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

    // 1. Save submission to MongoDB if MONGODB_URI is provided
    let mongoSaved = false;
    if (clientPromise) {
      try {
        const client = await clientPromise;
        const dbName = process.env.MONGODB_DB || "portfolio";
        const db = client.db(dbName);
        await db.collection("contacts").insertOne(contactEntry);
        mongoSaved = true;
        console.log("Contact submission saved to MongoDB successfully.");
      } catch (dbErr) {
        console.error("Failed to save contact submission to MongoDB:", dbErr);
      }
    } else {
      console.warn("MONGODB_URI not configured. Skipping database storage.");
    }

    // 2. Send email notification via Nodemailer if SMTP details exist
    let emailSent = false;
    try {
      const emailResult = await sendContactNotification({
        name,
        email,
        subject,
        message,
      });
      if (emailResult.success) {
        emailSent = true;
        console.log("Email notification sent successfully.");
      }
    } catch (mailErr) {
      console.error("Failed to send contact email notification:", mailErr);
    }

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
