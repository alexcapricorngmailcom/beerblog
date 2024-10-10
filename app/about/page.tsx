"use client";
import { Carousel } from "flowbite-react";
import Image from 'next/image'
import heroImg1 from './1645954614_2-kartinkin-net-p-kartinki-s-pivom-2.jpg'
import heroImg2 from './1645954652_36-kartinkin-net-p-kartinki-s-pivom-46.jpg'
import heroImg3 from './1645954696_15-kartinkin-net-p-kartinki-s-pivom-20.jpg'

export default function About() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <Image src={heroImg1} style={{width: '100%', height: '100%'}} alt="Hero image" />
        <Image src={heroImg2} style={{width: '100%', height: '100%'}} alt="Hero image" />
        <Image src={heroImg3} style={{width: '100%', height: '100%'}} alt="Hero image" />
      </Carousel>
    </div>
  );
}