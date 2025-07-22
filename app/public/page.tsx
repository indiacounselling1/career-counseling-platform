import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function PublicPage() {
  const pathways = await prisma.educationalPathway.findMany({
    orderBy: { className: 'asc' },
  });

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              IndiaCounselling
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/public" className="text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="/public/about" className="text-gray-600 hover:text-gray-900">
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

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive information about educational pathways, colleges, and career opportunities in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway) => (
            <div key={pathway.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">{pathway.course}</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {pathway.className}
                </span>
              </div>

              <p className="text-gray-600 mb-2">
                <strong>Stream:</strong> {pathway.stream}
              </p>

              {pathway.eligibility && (
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Eligibility:</strong> {pathway.eligibility}
                </p>
              )}

              <div className="mb-3">
                <h4 className="font-semibold text-gray-800 mb-1">Top Colleges:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {pathway.colleges.slice(0, 3).map((college, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {college}
                    </li>
                  ))}
                  {pathway.colleges.length > 3 && (
                    <li className="text-blue-600">+{pathway.colleges.length - 3} more</li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Career Options:</h4>
                <div className="flex flex-wrap gap-1">
                  {pathway.careers.slice(0, 3).map((career, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      {career}
                    </span>
                  ))}
                  {pathway.careers.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{pathway.careers.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {pathways.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No educational pathways available yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}
