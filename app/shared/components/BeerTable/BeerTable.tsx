import BeerColumnTitle from "./BeerColumnTitle";
import BeerElement from "./BeerElement";

export default function BeerTable(props: propsBeerElementType) {
  return (
    <div className="container flex justify-center items-center flex-wrap gap-3 
    mx-auto xl:w-full lg:w-[55%] md:w-[65%]">
      {/* 1 column */}
      <div className="flex flex-col gap-3">
        {/* 1 column title */}
        <BeerColumnTitle 
          title='WHEAT BEER'
          titletextColor='text-wheatBeer'          
        />
        {/* 1-1 element*/}
        <BeerElement
          number='1'
          initialDensity='1.026-1.036'
          finalDensity='1.006-1.009'
          name='Berliner Weisse'
          ABV='2.5-3.6%'
          IBU='3-12'
          SRM='2-4'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
        {/* 1-2 element */}
        <BeerElement
          number='4'
          initialDensity='1.042-1.055'
          finalDensity='1.008-1.012'
          name='Belgian White'
          ABV='4.5-5.5%'
          IBU='15-28'
          SRM='2-4'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
        {/* 1-3 element */}
        <BeerElement
          number='7'
          initialDensity='1.042-1.055'
          finalDensity='1.008-1.018'
          name='American Wheat'
          ABV='3.5-5.0%'
          IBU='5-20'
          SRM='2-8'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
        {/* 1-4 element */}
        <BeerElement
          number='14'
          initialDensity='1.040-1.056'
          finalDensity='1.008-1.016'
          name='Weizen- bier'
          ABV='4.3-5.6%'
          IBU='8-15'
          SRM='3-9'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
        {/* 1-5 element */}
        <BeerElement
          number='27'
          initialDensity='1.048-1.056'
          finalDensity='1.008-1.016'
          name='Dunkel- weizen'
          ABV='4.5-6.0%'
          IBU='10-15'
          SRM='17-23'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
        {/* 1-6 element */}
        <BeerElement
          number='41'
          initialDensity='1.066-1.080'
          finalDensity='1.016-1.028'
          name='Weizen- bock'
          ABV='6.5-9.6%'
          IBU='12-25'
          SRM='10-30'
          bgColor='bg-wheatBeer'
          borderColor='border-wheatBeerBorder'
        />
      </div>

      {/* 2 column */}
      <div className="flex flex-col gap-3">
        {/* 2 column title */}
        <BeerColumnTitle 
          title='LAMBIC & SOUR'
          titletextColor='text-lambicSour'          
        />
        {/* 2-1 element*/}
        <BeerElement
          number='2'
          initialDensity='1.044-1.056'
          finalDensity='1.006-1.012'
          name='Lambic'
          ABV='4.7-6.4%'
          IBU='5-15'
          SRM='4-15'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
        {/* 2-2 element*/}
        <BeerElement
          number='5'
          initialDensity='1.044-1.056'
          finalDensity='1.006-1.012'
          name='Gueuze'
          ABV='4.7-6.4%'
          IBU='5-15'
          SRM='4-15'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
        {/* 2-3 element*/}
        <BeerElement
          number='8'
          initialDensity='1.044-1.056'
          finalDensity='1.006-1.012'
          name='Faro'
          ABV='4.5-5.5%'
          IBU='5-15'
          SRM='4-15'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
        {/* 2-4 element*/}
        <BeerElement
          number='15'
          initialDensity='1.040-1.072'
          finalDensity='1.008-1.016'
          name='Fruit Beer'
          ABV='4.7-7.0%'
          IBU='15-21'
          SRM='N/A'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
        {/* 2-5 element*/}
        <BeerElement
          number='28'
          initialDensity='1.042-1.060'
          finalDensity='1.008-1.016'
          name='Flanders Red'
          ABV='4.0-5.8%'
          IBU='14-25'
          SRM='10-16'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
        {/* 2-6 element*/}
        <BeerElement
          number='42'
          initialDensity='1.042-1.060'
          finalDensity='1.008-1.016'
          name='Oud Bruin'
          ABV='4.0-6.5%'
          IBU='14-30'
          SRM='12-20'
          bgColor='bg-lambicSour'
          borderColor='border-lambicSourBorder'
        />
      </div>

      {/* 3 column */}
      <div className="flex flex-col gap-3">
        {/* 3 column title */}
        <BeerColumnTitle 
          title='BELGIAN ALE'
          titletextColor='text-belgianAle'          
        />
        {/* 3-1 element*/}
        <BeerElement
          number='3'
          initialDensity='1.065-1.085'
          finalDensity='1.014-1.020'
          name='Belgian Gold Ale'
          ABV='7.0-9.0%'
          IBU='25-35'
          SRM='4-6'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
        {/* 3-2 element*/}
        <BeerElement
          number='6'
          initialDensity='1.070-1.100'
          finalDensity='1.016-1.024'
          name='Tripel'
          ABV='7.0-10.0%'
          IBU='10-20'
          SRM='4-7'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
        {/* 3-3 element*/}
        <BeerElement
          number='9'
          initialDensity='1.052-1.080'
          finalDensity='1.010-1.015'
          name='Saison'
          ABV='4.5-8.1%'
          IBU='25-40'
          SRM='4-10'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
        {/* 3-4 element*/}
        <BeerElement
          number='16'
          initialDensity='1.040-1.055'
          finalDensity='1.008-1.013'
          name='Belgian Pale Ale'
          ABV='3.9-5.6%'
          IBU='20-35'
          SRM='4-14'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
        {/* 3-5 element*/}
        <BeerElement
          number='29'
          initialDensity='1.065-1.098'
          finalDensity='1.014-1.024'
          name='Belgian Dark Ale'
          ABV='7.0-12.0%'
          IBU='25-40'
          SRM='7-20'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
        {/* 3-6 element*/}
        <BeerElement
          number='43'
          initialDensity='1.065-1.085'
          finalDensity='1.012-1.018'
          name='Dubbel'
          ABV='3.2-8.0%'
          IBU='20-25'
          SRM='10-20'
          bgColor='bg-belgianAle'
          borderColor='border-belgianAleBorder'
        />
      </div>
      

    </div>
  );
}

type propsBeerElementType = {
  initialDensity: string,
  finalDensity: string,
  name: string,
  ABV: string,
  IBU: string,
  SRM: string,
  bgColor: string,
  borderColor: string
}