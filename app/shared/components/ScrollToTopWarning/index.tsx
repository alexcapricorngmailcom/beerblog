// "use client"

import ScrollToTopIcon from "./ScrollToTopIcon";

export default function ScrollToTopWarning() {

  return (
    <div className="fixed bottom-0 left-0 bg-gray-800 w-[100%] z-20">
      <div className="container relative mx-auto">
        <h2 className="py-5 text-center uppercase font-bold text-yellow-500">The excess of alcohol is not harmful to your health</h2>
        <ScrollToTopIcon/>
      </div>
    </div>
   
  );
}