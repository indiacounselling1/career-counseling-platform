# IndiaCounselling - Career Guidance Platform

A comprehensive career guidance platform built with Next.js, TypeScript, Prisma, and NextAuth.js, designed specifically for Indian students navigating their educational and professional journey.

## 🚀 Features

- **User Authentication**: GitHub OAuth integration with NextAuth.js
- **Career Explorer**: Browse educational pathways from class to career
- **Expert Counseling**: Book sessions with experienced counselors
- **Educational Resources**: Comprehensive database of colleges, courses, and careers
- **Dashboard**: User management and booking overview
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Database Integration**: PostgreSQL with Prisma ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js with GitHub OAuth
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18 or higher
- PostgreSQL database (Railway, Supabase, or local)
- GitHub OAuth App credentials

## 🚦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/indiacounselling1/career-counseling-platform.git
   cd career-counseling-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```

   Required environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@host:port/database"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed  # Optional: add sample data
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### GitHub OAuth Setup

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create a new OAuth App with:
   - **Application name**: IndiaCounselling
   - **Homepage URL**: `http://localhost:3000` (or your domain)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
3. Copy the Client ID and Client Secret to your `.env` file

### Database Setup

The project uses PostgreSQL. You can use:
- **Railway**: Free PostgreSQL hosting
- **Supabase**: Free tier with good PostgreSQL support
- **Vercel Postgres**: Integrated with Vercel deployment
- **Local PostgreSQL**: For development

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel project settings
   - Deploy automatically

3. **Update OAuth callback URL**
   - Update your GitHub OAuth App's callback URL to include your Vercel domain
   - Update `NEXTAUTH_URL` environment variable in Vercel

### Environment Variables for Production

In Vercel dashboard, add these environment variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your production domain)
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

## 📁 Project Structure

```
career-counseling-platform/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   ├── bookings/      # Booking management
│   │   └── register/      # User registration
│   ├── dashboard/         # Protected dashboard pages
│   ├── public/            # Public information pages
│   └── contact/           # Contact page
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## 🔐 Authentication Flow

1. User clicks "Sign In" → redirected to GitHub OAuth
2. After authorization → redirected back to application
3. NextAuth.js creates session and stores user in database
4. Protected routes check for valid session
5. User can access dashboard and booking features

## 📊 Database Schema

The application uses three main models:

- **User**: Authentication and profile information
- **EducationalPathway**: Career paths with colleges and careers
- **Booking**: Counseling session bookings

See `prisma/schema.prisma` for full schema details.

## 🎨 UI Components

All components are built with TypeScript and Tailwind CSS:

- **AuthProvider**: Session management wrapper
- **AuthButton**: Sign in/out functionality
- **UserCard**: Display user information
- **BookingCard**: Display booking details
- **BookingForm**: Create new bookings
- **ContactForm**: Contact page form
- **DrilldownNavigator**: Filter educational pathways

## 🐛 Troubleshooting

### Common Issues

1. **Build errors with TypeScript**
   - Ensure all components have proper type definitions
   - Check that Prisma client is generated: `npx prisma generate`

2. **Database connection issues**
   - Verify DATABASE_URL format and credentials
   - Ensure database is accessible from your deployment environment

3. **Authentication not working**
   - Check GitHub OAuth App configuration
   - Verify NEXTAUTH_URL matches your domain
   - Ensure NEXTAUTH_SECRET is set and secure

### Database Migrations

If you modify the Prisma schema:
```bash
npx prisma migrate dev --name describe-your-changes
npx prisma generate
```

For production:
```bash
npx prisma migrate deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your fork and create a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@indiacounselling.com
- Create an issue in this repository

## 🎯 Roadmap

- [ ] Advanced filtering and search
- [ ] Real-time chat with counselors
- [ ] Email notifications for bookings
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with educational institutions

---

**Built with ❤️ for Indian students by the IndiaCounselling team**
