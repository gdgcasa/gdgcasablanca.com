import Image from 'next/image'
import React from 'react'
import BaseCard from './base-card'

export default function NoResult() {
  return (
    <BaseCard className='flex items-center gap-8 border-0'>
      <Image src='/empty.svg' height={222} width={222} alt='' />
      <div className='font-light text-slate-600'>
        <p className='mb-1 text-2xl'>There are no planned events for now.</p>
        <p className='text-sm'>
          Check back in a few, or join your community and get updates.
        </p>
      </div>
    </BaseCard>
  )
}
