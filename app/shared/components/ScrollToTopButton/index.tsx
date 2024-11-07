"use client"

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {

  const [scrollToTopIcon, setScrollToTopIcon] = useState(false);
  
  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      if (window.scrollY > 300) {
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
      <button onClick={scrollUp} className="absolute top-[50%] right-0 translate-y-[-50%] rounded bg-yellow-500 cursor-pointer hover:bg-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button> 
    }
    </>
  );
}