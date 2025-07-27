'use client';

export default function BaoBao() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center select-none pointer-events-none' onContextMenu={(e) => e.preventDefault()}>
      <img src="/gremlin.png" alt="Not Found" className="mt-10 w-auto h-32" />
      <p className="text-xs text-black">this, is baobao</p>
    </div>
  )
}
