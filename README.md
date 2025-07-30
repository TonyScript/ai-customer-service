# AI Customer Service Website

An AI-powered customer service website built with Next.js and Tailwind CSS, designed for deployment on Vercel.

## Features

- Modern, responsive design with Tailwind CSS
- Fully static pages (no server or database required)
- Component-based architecture for easy maintenance
- Mobile-first approach with responsive layouts
- Smooth animations and transitions

## Project Structure

```
ai-customer-service/
├── components/
│   ├── Hero.js
│   ├── PainPoints.js
│   ├── Solutions.js
│   ├── Features.js
│   ├── Testimonials.js
│   ├── FAQ.js
│   └── Footer.js
├── pages/
│   ├── index.js
│   └── _app.js
├── public/
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
└── vercel.json
```

## Deployment Guide

### Prerequisites

- Node.js (v14 or later)
- Git
- GitHub account
- Vercel account

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/TonyScript/ai-customer-service.git
cd ai-customer-service
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TonyScript/ai-customer-service.git
git push -u origin main
```

2. Deploy to Vercel:
   - Go to [Vercel](https://vercel.com) and sign up/sign in
   - Click "New Project"
   - Import the GitHub repository
   - Keep the default settings and click "Deploy"
   - Wait for the deployment to complete

3. Your site will be live at the provided Vercel URL!

### Custom Domain (Optional)

1. In your Vercel project dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow the instructions to configure your DNS records
4. Wait for the SSL certificate to be provisioned automatically

### Updating Content

To update the website content:

1. Modify the relevant components in the `components/` directory
2. Commit and push your changes to GitHub:
```bash
git add .
git commit -m "Update website content"
git push origin main
```

3. Vercel will automatically redeploy your site

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Vercel](https://vercel.com/)

## License

This project is open source and available under the [MIT License](LICENSE).