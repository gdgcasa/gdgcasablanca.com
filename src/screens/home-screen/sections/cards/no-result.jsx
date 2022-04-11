import Image from 'next/image'
import React from 'react'
import BaseCard from './base-card'

export default function NoResult() {
  return (
    <BaseCard className='flex flex-col items-center gap-8 border-0 md:flex-row'>
      <div className='w-full max-w-[222px]'>
        <Image
          src='/empty.svg'
          height={222}
          width={222}
          alt=''
          layout='responsive'
        />
      </div>
      <div className='font-light text-slate-600'>
        <p className='mb-1 text-2xl'>There are no planned events for now.</p>
        <p className='text-sm'>
          Check back in a few, or join your community and get updates.
        </p>
      </div>
    </BaseCard>
  )
}
