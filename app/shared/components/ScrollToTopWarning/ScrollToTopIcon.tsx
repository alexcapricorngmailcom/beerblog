"use client"

import { useEffect, useState } from "react";

export default function ScrollToTopIcon() {

  const [scrollToTopIcon, setScrollToTopIcon] = useState(false);

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      if (window.scrollY > 100) {
        setScrollToTopIcon(true);
      } else {
        setScrollToTopIcon(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  return (
    <> 
    {scrollToTopIcon && 
      // <div onClick={scrollUp} className="absolute top-[50%] right-0 translate-y-[-50%] size-8 bg-white font-bold text-2xl text-center cursor-pointer">^</div>
      <svg onClick={scrollUp} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
      className="absolute top-[50%] right-0 translate-y-[-50%] size-8 rounded bg-yellow-500 cursor-pointer hover:bg-yellow-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    }
    </>
  );
}