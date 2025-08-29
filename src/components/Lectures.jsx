import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

import stay from '@/data/stay.png'
import idea from '@/data/idea.png'
import creativity from '@/data/creativity.png'

export default function Lectures({ className = "", ...props }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  )

  return (
    <div className={cn("embla overflow-hidden", className)} ref={emblaRef}>
      <div className="embla__container flex h-full">
        
        {/* Slide 1 */}
        <div className="embla__slide flex-[0_0_50%] px-2 flex flex-col shadow-lg">
          {/* fixed or flexible height for image */}
          <div className="h-48 flex-shrink-0">
            <img src={stay} alt="Stay" className="object-cover w-full h-full rounded-lg" />
          </div>
          {/* content goes below, doesn’t resize image */}
          <div className="p-2">
            <p className="text-start font-semibold line-clamp-1 text-sm text-stone-500 hover:text-stone-900">&bull; Unlocking the power of</p>
            <p className="text-sm text-gray-500 truncate">A journey through Artistic</p>
            <p className= "text-sm text-gray-500 pt-5">Exploration and Creativity</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="embla__slide flex-[0_0_50%] px-2 flex flex-col shadow-md">
          <div className="h-48 flex-shrink-0">
            <img src={idea} alt="Idea" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="p-2">
            <p className="text-center font-semibold">Idea</p>
            <p className="text-sm text-gray-500">More content here</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="embla__slide flex-[0_0_50%] px-2 flex flex-col shadow-md">
          <div className="h-48 flex-shrink-0">
            <img src={creativity} alt="Creativity" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="p-2">
            <p className="text-center font-semibold">Creativity</p>
            <p className="text-sm text-gray-500">Another line of text</p>
          </div>
        </div>

      </div>
    </div>
  )
}
