import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              IndiaCounselling
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/public" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="/public/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/public/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <h1>About IndiaCounselling</h1>

          <p>
            IndiaCounselling is a comprehensive career guidance platform designed specifically 
            for Indian students navigating their educational and professional journey. We understand 
            that choosing the right career path can be overwhelming, especially with the diverse 
            opportunities available in today's rapidly evolving job market.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to democratize access to quality career guidance and make it accessible 
            to students from all backgrounds. We believe that every student deserves personalized 
            guidance to make informed decisions about their future.
          </p>

          <h2>What We Offer</h2>

          <ul>
            <li>
              <strong>Career Explorer:</strong> Discover career paths based on your educational 
              background, interests, and skills.
            </li>
            <li>
              <strong>Expert Counseling:</strong> Book one-on-one sessions with experienced 
              career counselors who understand the Indian education system.
            </li>
            <li>
              <strong>Educational Resources:</strong> Access comprehensive information about 
              colleges, courses, eligibility criteria, and admission processes.
            </li>
            <li>
              <strong>Pathway Planning:</strong> Get step-by-step guidance from your current 
              class to your dream career.
            </li>
          </ul>

          <h2>Why Choose Us?</h2>

          <ul>
            <li>
              <strong>India-Specific:</strong> Our guidance is tailored to the Indian education 
              system and job market.
            </li>
            <li>
              <strong>Expert Counselors:</strong> Our team consists of experienced professionals 
              with deep knowledge of various industries and educational pathways.
            </li>
            <li>
              <strong>Comprehensive Database:</strong> We maintain up-to-date information about 
              colleges, courses, and career opportunities across India.
            </li>
            <li>
              <strong>Personalized Approach:</strong> Every student is unique, and we provide 
              personalized guidance based on individual strengths and aspirations.
            </li>
          </ul>

          <h2>Our Vision</h2>

          <p>
            We envision a future where every Indian student has access to quality career guidance, 
            enabling them to make informed decisions and achieve their full potential. Our platform 
            serves as a bridge between students' aspirations and the opportunities available to them.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-blue-900 mb-2">Ready to Start Your Journey?</h3>
            <p className="text-blue-700 mb-4">
              Join thousands of students who have found their path with IndiaCounselling.
            </p>
            <Link href="/" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
