import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
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
              <Link href="/public/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/public/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about your career path? Need guidance on educational opportunities? 
            We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@indiacounselling.com</p>
                <p className="text-gray-600">support@indiacounselling.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 12345 67890</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM IST</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  IndiaCounselling Pvt. Ltd.<br />
                  123 Education Hub<br />
                  New Delhi - 110001<br />
                  India
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-blue-700">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
