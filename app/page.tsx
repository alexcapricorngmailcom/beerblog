import BeerColumnTitle from './shared/components/BeerElement/BeerColumnTitle';
import BeerElement from './shared/components/BeerElement/BeerElement';
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
        <div className="container flex justify-center items-center flex-wrap gap-3 
        mx-auto xl:w-full lg:w-[55%] md:w-[65%]">
          <div className="grid grid-cols-1 grid-rows-7 gap-3">
            <BeerColumnTitle 
              title = 'WHEAT BEER'
              titleColor = 'tableSand'          
            />
            <BeerElement
              initialDensity = '1.026-1.036'
              finalDensity = '1.006-1.009'
              name = 'Berliner Weisse'
              ABV = '2.5-3.6%'
              IBU = '3-12'
              SRM = '2-4'
              bgColor='tableSand'
              borderColor='borderTableSand'
            />
 
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableSand border border-borderTableSand hover:scale-150'>1</div>
          </div>
          <div className="grid grid-cols-1 grid-rows-7 gap-3">
            <BeerColumnTitle
              title = 'LAMBIC & SOUR'
              titleColor = 'tableGreen'

            />
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>2</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
            <div className='w-20 h-20 bg-tableGreen border border-borderTableGreen hover:scale-150'>1</div>
          </div>

          
            
          
        </div>
      </section>
    </main>
  );
}