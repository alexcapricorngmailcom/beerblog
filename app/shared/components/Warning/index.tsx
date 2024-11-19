import ScrollToTopButton from "../ScrollToTopButton";

import localFont from 'next/font/local'
 
const myFont = localFont({
  src: './PFDinDisplayPro/PFDinDisplayPro-Regular.ttf',
})

export default function Warning() {

  return (
    <div className="fixed bottom-0 left-0 bg-gray-800 w-[100%] z-20">
      <div className="container relative mx-auto px-3">
        <h2 className={`${myFont.className} py-3 text-4xl text-center uppercase text-yellow-500`}>The excess of alcohol is not harmful to your health</h2>
        <ScrollToTopButton/>
      </div>
    </div>
  );
}