import React from 'react'

function Blog() {
  return (
    <div className='h-10 px-3 py-5'>
        <h1 className='text-bold font-medium text-slate-950'> Hey Buddy </h1>
        <p className='mt-2 text-sm leading-5'>Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.</p>
    </div>
    
  )
}

export default Blog