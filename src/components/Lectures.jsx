import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

import stay from '@/data/stay.png'
import idea from '@/data/idea.png'
import creativity from '@/data/creativity.png'
import {Clock} from "lucide-react"

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
          <div className="h-48 flex-shrink-0">
            <img src={stay} alt="Stay" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="p-2">
            <p className="text-center font-semibold line-clamp-1">Unlocking the Power of Creativity</p>
            <p className="text-sm text-gray-500 line-clamp-1">(A journey through Artistic Exploration and Creativity)</p>
            <p className="text-sm text-gray-500 pt-5">-By <span className="underline">Cameron.p.West</span></p>
            <p className="inline-flex items-center text-xs text-[#67D0DF] font-semibold bg-[#EDF9FB] rounded-lg px-3 py-1 mt-2 text-center hover:bg-[#B7E3ED] hover:text-[#2997A3] transition">
              <Clock className="w-3 h-3 mr-2" />
              Dec 24..2024
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="embla__slide flex-[0_0_50%] px-2 flex flex-col shadow-md">
          <div className="h-48 flex-shrink-0">
            <img src={idea} alt="Idea" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="p-2">
            <p className="text-center font-semibold">Navigating</p>
            <p className="text-sm text-gray-500 line-clamp-1">(Harnessing technology for creative expression)</p>
            <p className="text-sm text-gray-500 pt-5">-By <span className="underline">Camryn Lowe</span></p>
            <p className="inline-flex items-center text-xs text-[#B2CF3F] font-semibold bg-[#F7FAEA] rounded-lg px-3 py-1 mt-2 text-center hover:bg-[#D6E3B2] hover:text-[#6C8A1A] transition">
              <Clock className="w-3 h-3 mr-2" />
              Dec 24..2024
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="embla__slide flex-[0_0_50%] px-2 flex flex-col shadow-md">
          <div className="h-48 flex-shrink-0">
            <img src={creativity} alt="Creativity" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="p-2">
            <p className="text-center font-semibold">Sustainable living</p>
            <p className="text-sm text-gray-500 line-clamp-1">Dive into our sustainable practices and learn how to make a positive impact on the environment.</p>
            <p className="text-sm text-gray-500 pt-5">-By <span className="underline">Krystal Ringer</span></p>
            <p className="inline-flex text-xs text-[#8B8476] font-semibold bg-[#F3F2F1]  rounded-lg px-3 py-1 mt-2 text-center hover:bg-[#D1CFCB] hover:text-[#5C574D] transition">
              <span><Clock className="w-3 h-3 mt-1 mr-2"/></span>Feb 20.2024
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
