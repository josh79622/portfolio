"use client";

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className='heading'>
        Kind words from
        <span className='text-purple-300'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map(({id, img, name, nameImg}) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} width={id === 4 || id === 5 ? 100 : 150}
                className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Clients
