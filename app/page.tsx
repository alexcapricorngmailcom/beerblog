import BeerTable from './shared/components/BeerTable';
import FlowbiteCarousel from './shared/components/FlowbiteCarousel';

export default function Home() {
  return (
    <main>
      <FlowbiteCarousel/>
      <BeerTable/>
    </main>
  );
}