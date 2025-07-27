import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-20 px-4">
      {/* Main content - positioned in upper portion */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Page Not Found</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Go back to Home
          </Link>
        </div>
      </div>

      {/* Image - fixed at bottom with proper spacing */}
      <div className="flex justify-center pb-8 mt-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <img src="/crying.png" alt="Not Found" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}
