import BeerTable from './shared/components/BeerTable';
import BeerFooter from './shared/components/BeerTable/BeerFooter';
import FlowbiteCarousel from './shared/components/FlowbiteCarousel/FlowbiteCarousel';

export default function Home() {
  return (
    <main>
      <section className='mt-10'>
        <div className="container mx-auto">
          <FlowbiteCarousel/>
        </div>
      </section>
      <section className='mt-10'>
        <BeerTable/>
        <BeerFooter/>
      </section>
      
    </main>
  );
}