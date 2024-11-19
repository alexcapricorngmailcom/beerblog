"use client";
import { Carousel } from "flowbite-react";
import Image from 'next/image'
import CarouselImg1 from './assets/img/1.jpg'
import CarouselImg2 from './assets/img/2.jpg'
import CarouselImg3 from './assets/img/3.jpg'

export default function FlowbiteCarousel() {
  return (
    <section className='mt-10'>
      <div className="container mx-auto px-3 h-56 sm:h-64 xl:h-80 2xl:h-144">
        <Carousel leftControl=' ' rightControl=' ' slideInterval={5000} pauseOnHover className="[&>*]:rounded-none">
          <Image src={CarouselImg1} style={{width: '100%', height: '100%'}} alt="Hero image" />
          <Image src={CarouselImg2} style={{width: '100%', height: '100%'}} alt="Hero image" />
          <Image src={CarouselImg3} style={{width: '100%', height: '100%'}} alt="Hero image" />
        </Carousel>
      </div>
    </section>
  );
}