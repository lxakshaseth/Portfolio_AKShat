# 🚀 Akshat Gupta — Full Stack & Cloud Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud_Certified-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

A high-performance, modern developer portfolio showcasing full-stack web applications, microservices architecture, AI/RAG integrations, verified cloud certifications, and interactive case studies. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- ⚡ **Interactive Hero & Canvas Background**: Animated role switcher, custom neon cursor, and interactive particles network background.
- 🛠️ **Categorized Skills Matrix**: Visual proficiency indicators for Frontend, Backend/MERN, DevOps & Cloud, and AI & Emerging Technologies.
- 💼 **Experience Timeline**: Career history highlights across full-stack and data engineering internships (Indux Tech, ApexPlanet, UptoSkills, Axuore).
- 📁 **Projects & Deep-Dive Case Studies**: Interactive project showcase featuring system metrics, tech stacks, live links, and modal architectural breakdowns.
- 🏆 **Verified Industry Certifications**: Credential cards with direct PDF verification links for **AWS** (Security, DevOps, Prompt Engineering, Technical Essentials, GenAI) and **Oracle** certifications.
- 📊 **GitHub Activity & Live Stats**: Dynamic repository metrics, star counts, commit activity, and top language distributions.
- ✉️ **Contact Form & Backend Integration**: Functional email dispatch via Nodemailer/EmailJS with MongoDB persistence logging.
- 🐳 **Containerized & Production Ready**: Multi-stage `Dockerfile` and `docker-compose.yml` pre-configured for AWS deployment.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: Next.js 16 (App Router) & React 19
- **Styling**: Tailwind CSS v4 & Glassmorphism Design System
- **Animations**: Framer Motion & Canvas Confetti
- **Icons**: Lucide React

### Backend & Database
- **API Engine**: Next.js Server Routes & Node.js
- **Database**: MongoDB Atlas (`mongodb` driver)
- **Mailer**: Nodemailer & EmailJS Browser SDK

### Infrastructure & Cloud
- **Cloud Platform**: Amazon Web Services (AWS Amplify, S3, CloudFront, EC2)
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx Reverse Proxy

---

## 📂 Project Structure

```text
Portfolio_AKShat/
├── app/                      # Next.js 16 App Router pages & API routes
│   ├── api/contact/          # Contact form handler API route
│   ├── projects/[id]/        # Dynamic project case study pages
│   ├── layout.tsx            # Root layout with navbar & footer
│   └── page.tsx              # Main single-page portfolio view
├── components/               # UI components
│   ├── ui/                   # Glass card, section headings, custom cursor
│   ├── hero.tsx              # Hero section with typing effect
│   ├── about.tsx             # About section
│   ├── skills.tsx            # Skills categories & progress bars
│   ├── experience.tsx        # Career experience timeline
│   ├── projects.tsx          # Featured projects & case studies modal
│   ├── certifications.tsx    # AWS & Oracle verified credentials
│   ├── github-stats.tsx      # GitHub repository activity
│   └── contact.tsx           # Contact form component
├── data/                     # Authoritative data files
│   ├── portfolio.ts          # Personal info, skills, projects, certifications
│   └── case-studies.ts       # Detailed architectural breakdowns
├── public/                   # Static assets & PDF documents
│   ├── certificates/         # Verified AWS completion certificate PDFs
│   └── images/               # Project screenshots & hero graphics
├── Dockerfile                # Multi-stage production build container
├── docker-compose.yml        # Docker Compose service definition
└── nginx.conf                # Production reverse proxy configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or later
- **npm**: `v10.x` or later

### Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lxakshaseth/Portfolio_AKShat.git
   cd Portfolio_AKShat
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🐳 Docker Support

To run the portfolio in a containerized environment:

```bash
# Build and start the container
docker-compose up --build -d

# View container status
docker-compose ps

# Stop the container
docker-compose down
```

---

## ☁️ Deployment

For detailed instructions on deploying to AWS (Amplify, S3 + CloudFront, or EC2 with Docker & Nginx), see [AWS_DEPLOYMENT.md](file:///c:/Users/lxaks/OneDrive/Desktop/aws/Portfolio_AKShat/AWS_DEPLOYMENT.md).

---

## 👤 Author

**Akshat Gupta**
- **GitHub**: [@lxakshaseth](https://github.com/lxakshaseth)
- **LinkedIn**: [Akshat Gupta](https://www.linkedin.com/in/akshat0906)
- **Email**: lxakshatseth90@gmail.com
- **Location**: India (Open to Relocate / Remote)
