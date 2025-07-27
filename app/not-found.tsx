import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='pt-20 flex flex-col items-center justify-center min-h-screen text-center'>
      <div>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-xl mb-8'>Page Not Found</p>
        <Link href="/" className='text-blue-600 hover:underline'>
          Go back to Home
        </Link>
      </div>
      {/* bottom of page */}
      <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
        <img src="/crying.png" alt="Not Found" className="mt-10 w-64 h-64" />
      </div>
    </div>
  )
}