import React from 'react'
import { Button } from '@/components/ui/button'
export default function page() {
  return (
    <div className='max-w-3xl mx-auto md:py-10 h-screen'>
      <div className="h-full border rounded-md">
        <div className='h-20'>
          <div className='p-5 border-b flex items-center justify-between'>
            <div>
              <h1 className='text-xl font-bold'>
                Live Chat
              </h1>
              <div className='flex items-center gap-x-1'>
                <div className='h-4 w-4 bg-green-500 rounded-full'></div>
                <h2 className='text-sm text-gray-300'>3 online</h2>
              </div>
            </div>
            <Button className='text-bold text-white'>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
