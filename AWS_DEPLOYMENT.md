# AWS Deployment Guide for Akshat's Portfolio

This guide outlines three production-ready deployment options for hosting Akshat's Next.js 15 portfolio website on Amazon Web Services (AWS).

---

## Option 1: AWS Amplify Hosting (Recommended & Fastest)

AWS Amplify provides continuous deployment from Git, automatic SSL certificate provisioning, global CDN distribution, and zero server maintenance.

### Steps:
1. **Push Code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete portfolio app"
   git push origin main
   ```
2. **Connect to AWS Amplify**:
   - Log in to the [AWS Management Console](https://console.aws.amazon.com/).
   - Open **AWS Amplify** -> Click **Create new app**.
   - Select **GitHub** as the source repository and choose your repo (`akshat-dev/portfolio`).
3. **Configure Build Settings**:
   - Amplify will automatically detect Next.js. Ensure `amplify.yml` matches:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - .next/cache/**/*
         - node_modules/**/*
   ```
4. **Deploy**:
   - Click **Save and Deploy**. Amplify will build and assign a custom domain URL with free SSL.

---

## Option 2: AWS S3 + CloudFront (Static Export)

Best for static hosting with near-zero monthly cost and global edge latency < 20ms.

### Steps:
1. Update `next.config.ts` to static export mode:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true }
   };

   export default nextConfig;
   ```
2. **Build Static Bundle**:
   ```bash
   npm run build
   ```
   This generates an `out/` folder with static HTML/CSS/JS.
3. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://akshat-portfolio-bucket --region us-east-1
   aws s3 sync out/ s3://akshat-portfolio-bucket --delete
   ```
4. **Create CloudFront Distribution**:
   - Create a CloudFront Distribution pointing to the S3 bucket origin.
   - Set **Default Root Object** to `index.html`.
   - Enable HTTPS with AWS Certificate Manager (ACM).

---

## Option 3: AWS EC2 (Docker / PM2 Deployment)

Best if running custom Node.js server routes or websocket engines.

### Steps:
1. **Launch EC2 Instance**:
   - Provision an Ubuntu 22.04 LTS `t3.micro` or `t3.small` instance.
   - Open Ports in Security Group: `80` (HTTP), `443` (HTTPS), `22` (SSH).

2. **Connect & Install Docker**:
   ```bash
   ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP

   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io docker-compose nginx
   sudo systemctl enable --now docker
   ```

3. **Deploy Container**:
   ```bash
   git clone https://github.com/akshat-dev/portfolio.git
   cd portfolio
   sudo docker-compose up -d --build
   ```

4. **Configure Nginx & SSL**:
   - Copy `nginx.conf` to `/etc/nginx/sites-available/default`.
   - Test and reload Nginx:
     ```bash
     sudo nginx -t
     sudo systemctl reload nginx
     ```
   - Provision free Let's Encrypt SSL:
     ```bash
     sudo apt install certbot python3-certbot-nginx -y
     sudo certbot --nginx -d akshat-dev.com -d www.akshat-dev.com
     ```

---

## Verification & Monitoring
- **Performance**: Test with Google Lighthouse (Target Score: 95+).
- **SEO**: Verify `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt`.
