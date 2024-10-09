import Image from 'next/image'
import heroImg from './shared/assets/img/heroImg2.jpg'


export default function Home() {
  return (
    <main>
      <section className='py-10'>
        <div className="container mx-auto">
          <Image src={heroImg} style={{width: '100%', height: '100%'}} alt="Hero image" />
        </div>
      </section>
    </main>
  );
}