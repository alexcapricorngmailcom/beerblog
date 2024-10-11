import FlowbiteCarousel from './shared/components/FlowbiteCarousel/FlowbiteCarousel';

export default function Home() {
  return (
    <main>
      <section className='pt-10'>
        <div className="container mx-auto">
          <FlowbiteCarousel/>
        </div>
      </section>
      <section className='pt-10'>
        <div className="container mx-auto">
        <div className="grid grid-cols-14 grid-rows-1 gap-3 sm:grid-cols-6 grid-rows-1 gap-3">
          <div className='h-12 font-bold text-tableSand'>WHEAT BEER</div>
          <div className='h-12 font-bold text-tableGreen'>LAMBIC & SOUR</div>
          <div className='h-12 font-bold text-green-400'>BELGIAN ALE</div>
          <div className='h-12 font-bold text-green-400'>PALE ALE</div>
          <div className='h-12 font-bold text-green-400'>ENGLISH BITTER</div>
          <div className='h-12 font-bold text-green-400'>SCOTISH ALE</div>
          <div className='h-12 font-bold text-green-400'>BROWN ALE</div>
          <div className='h-12 font-bold text-green-400'>PORTER</div>
          <div className='h-12 font-bold text-green-400'>STOUT</div>
          <div className='h-12 font-bold text-green-400'>STOUT</div>
          <div className='h-12 font-bold text-green-400'>PILSNER</div>
          <div className='h-12 font-bold text-green-400'>AMERICAN LAGER</div>
          <div className='h-12 font-bold text-green-400'>EUROPEAN LAGER</div>
          <div className='h-12 font-bold text-green-400'>BOCK</div>
        </div>
        <div className="grid grid-cols-14 grid-rows-14 gap-3">
            {/* first row */}
            <div className='h-20 bg-tableSand border border-tableSand-b hover:scale-150'>1</div>
            <div className='h-20 bg-tableGreen border border-tableGreen-b hover:scale-150'>2</div>
        </div>
    
        </div>
      </section>
    </main>
  );
}