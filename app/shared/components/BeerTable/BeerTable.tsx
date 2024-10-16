import BeerColumnTitle from "./BeerColumnTitle";
import BeerElement from "./BeerElement";
import EmptyBeerElement from "./EmptyBeerElement";

export default function BeerTable(props: propsBeerElementType) {
  return (
    <div className="container flex justify-center items-center flex-wrap gap-3 
    mx-auto xl:w-full lg:w-[55%] md:w-[65%]">
      {/* 1 column */}
      <div className="flex flex-col gap-3">
        {/* 1 column title */}
        <BeerColumnTitle 
          title='WHEAT BEER'
          titletextColor='text-wheatBeerBorder'          
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
          titletextColor='text-lambicSourBorder'          
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
          titletextColor='text-belgianAleBorder'          
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

      {/* 4 column */}
      <div className="flex flex-col gap-3">
        {/* 4 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='PALE ALE'
          titletextColor='text-paleAleBorder'          
        />
        {/* 4-1 element*/}
        <BeerElement
          number='10'
          initialDensity='1.043-1.056'
          finalDensity='1.008-1.016'
          name='Pale Ale'
          ABV='4.5-5.5%'
          IBU='20-40'
          SRM='4-11'
          bgColor='bg-paleAle'
          borderColor='border-paleAleBorder'
        />
        {/* 4-2 element*/}
        <BeerElement
          number='17'
          initialDensity='1.045-1.056'
          finalDensity='1.010-1.015'
          name='American Pale Ale'
          ABV='4.5-5.7%'
          IBU='20-40'
          SRM='4-11'
          bgColor='bg-paleAle'
          borderColor='border-paleAleBorder'
        />
        {/* 4-3 element*/}
        <BeerElement
          number='30'
          initialDensity='1.050-1.075'
          finalDensity='1.012-1.018'
          name='India Pale Ale'
          ABV='5.1-7.6%'
          IBU='40-60'
          SRM='8-14'
          bgColor='bg-paleAle'
          borderColor='border-paleAleBorder'
        />
        {/* 4-4 element*/}
        <BeerElement
          number='44'
          initialDensity='1.043-1.056'
          finalDensity='1.008-1.016'
          name='American Amber Ale'
          ABV='4.5-5.7%'
          IBU='20-40'
          SRM='11-18'
          bgColor='bg-paleAle'
          borderColor='border-paleAleBorder'
        />
      </div>

      {/* 5 column */}
      <div className="flex flex-col gap-3">
        {/* 5 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='ENGLISH BITTER'
          titletextColor='text-englishBitterBorder'          
        />
        {/* 5-1 element*/}
        <BeerElement
          number='18'
          initialDensity='1.030-1.038'
          finalDensity='1.006-1.012'
          name='Ordinary Bitter'
          ABV='3.0-3.8%'
          IBU='20-35'
          SRM='6-12'
          bgColor='bg-englishBitter'
          borderColor='border-englishBitterBorder'
        />
        {/* 5-2 element*/}
        <BeerElement
          number='31'
          initialDensity='1.039-1.045'
          finalDensity='1.006-1.014'
          name='Special Bitter'
          ABV='3.7-4.8%'
          IBU='25-40'
          SRM='12-14'
          bgColor='bg-englishBitter'
          borderColor='border-englishBitterBorder'
        />
        {/* 5-3 element*/}
        <BeerElement
          number='45'
          initialDensity='1.046-1.065'
          finalDensity='1.010-1.018'
          name='Special Extra Bitter'
          ABV='3.7-4.8%'
          IBU='30-45'
          SRM='12-14'
          bgColor='bg-englishBitter'
          borderColor='border-englishBitterBorder'
        />
      </div>

      {/* 6 column */}
      <div className="flex flex-col gap-3">
        {/* 6 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='SCOTISH ALE'
          titletextColor='text-scotishAleBorder'          
        />
        {/* 6-1 element*/}
        <BeerElement
          number='19'
          initialDensity='1.030-1.035'
          finalDensity='1.006-1.012'
          name='Scottish Light 60/-'
          ABV='2.8-4.0%'
          IBU='9-20'
          SRM='8-17'
          bgColor='bg-scotishAle'
          borderColor='border-scotishAleBorder'
        />
        {/* 6-2 element*/}
        <BeerElement
          number='32'
          initialDensity='1.035-1.040'
          finalDensity='1.010-1.014'
          name='Scottish Heavy 70/-'
          ABV='3.5-4.1%'
          IBU='12-25'
          SRM='10-19'
          bgColor='bg-scotishAle'
          borderColor='border-scotishAleBorder'
        />
        {/* 6-3 element*/}
        <BeerElement
          number='46'
          initialDensity='1.040-1.050'
          finalDensity='1.010-1.018'
          name='Scottish Export 80/-'
          ABV='4.0-4.9%'
          IBU='15-36'
          SRM='10-19'
          bgColor='bg-scotishAle'
          borderColor='border-scotishAleBorder'
        />
      </div>

      {/* 7 column */}
      <div className="flex flex-col gap-3">
        {/* 7 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='BROWN ALE'
          titletextColor='text-brownAleBorder'          
        />
        {/* 7-1 element*/}
        <BeerElement
          number='20'
          initialDensity='1.030-1.038'
          finalDensity='1.004-1.012'
          name='English Mild'
          ABV='2.5-4.1%'
          IBU='10-24'
          SRM='10-25'
          bgColor='bg-brownAle'
          borderColor='border-brownAleBorder'
        />
        {/* 7-2 element*/}
        <BeerElement
          number='33'
          initialDensity='1.040-1.055'
          finalDensity='1.010-1.018'
          name='American Brown'
          ABV='4.2-6.0%'
          IBU='25-60'
          SRM='15-22'
          bgColor='bg-brownAle'
          borderColor='border-brownAleBorder'
        />
        {/* 7-3 element*/}
        <BeerElement
          number='47'
          initialDensity='1.040-1.050'
          finalDensity='1.008-1.014'
          name='English Brown'
          ABV='3.5-6.0%'
          IBU='15-25'
          SRM='15-30'
          bgColor='bg-brownAle'
          borderColor='border-brownAleBorder'
        />
      </div>

      {/* 8 column */}
      <div className="flex flex-col gap-3">
        {/* 8 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='PORTER'
          titletextColor='text-porterBorder'          
        />
        {/* 8-1 element*/}
        <BeerElement
          number='34'
          initialDensity='1.040-1.050'
          finalDensity='1.008-1.014'
          name='Brown Porter'
          ABV='3.8-5.2%'
          IBU='20-30'
          SRM='20-30'
          bgColor='bg-porter'
          borderColor='border-porterBorder'
        />
        {/* 8-2 element*/}
        <BeerElement
          number='48'
          initialDensity='1.050-1.065'
          finalDensity='1.012-1.016'
          name='Robust Porter'
          ABV='4.8-6.0%'
          IBU='25-45'
          SRM='30-40'
          bgColor='bg-porter'
          borderColor='border-porterBorder'
        />
      </div>

      {/* 9 column */}
      <div className="flex flex-col gap-3">
        {/* 9 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='STOUT'
          titletextColor='text-lightStoutBorder'          
        />
        {/* 9-1 element*/}
        <BeerElement
          number='21'
          initialDensity='1.035-1.050'
          finalDensity='1.008-1.014'
          name='Dry Stout'
          ABV='3.2-5.5%'
          IBU='40-50'
          SRM='40+'
          bgColor='bg-lightStout'
          borderColor='border-lightStoutBorder'
        />
        {/* 9-2 element*/}
        <BeerElement
          number='35'
          initialDensity='1.035-1.066'
          finalDensity='1.010-1.022'
          name='Sweet Stout'
          ABV='3.2-6.4%'
          IBU='20-40'
          SRM='40+'
          bgColor='bg-lightStout'
          borderColor='border-lightStoutBorder'
        />
        {/* 9-3 element*/}
        <BeerElement
          number='49'
          initialDensity='1.035-1.060'
          finalDensity='1.008-1.021'
          name='Oatmeal Stout'
          ABV='3.3-6.1%'
          IBU='20-50'
          SRM='40+'
          bgColor='bg-lightStout'
          borderColor='border-lightStoutBorder'
        />
      </div>

      {/* 10 column */}
      <div className="flex flex-col gap-3">
        {/* 10 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='STOUT'
          titletextColor='text-heavyStoutBorder'          
        />
        {/* 10-1 element*/}
        <BeerElement
          number='22'
          initialDensity='1.050-1.075'
          finalDensity='1.010-1.017'
          name='Foreign Extra Stout'
          ABV='5.0-7.5%'
          IBU='35-70'
          SRM='40+'
          bgColor='bg-heavyStout'
          borderColor='border-heavyStoutBorder'
        />
        {/* 10-2 element*/}
        <BeerElement
          number='36'
          initialDensity='1.075-1.090'
          finalDensity='1.020-1.030'
          name='Imperial Stout'
          ABV='7.8-9.0%'
          IBU='50-80'
          SRM='40+'
          bgColor='bg-heavyStout'
          borderColor='border-heavyStoutBorder'
        />
        {/* 10-3 element*/}
        <BeerElement
          number='50'
          initialDensity='1.075-1.100'
          finalDensity='1.018-1.030'
          name='Pidorussian Imperial'
          ABV='8.0-12.0%'
          IBU='50-90'
          SRM='40+'
          bgColor='bg-heavyStout'
          borderColor='border-heavyStoutBorder'
        />
      </div>

      {/* 11 column */}
      <div className="flex flex-col gap-3">
        {/* 11 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='PILSNER'
          titletextColor='text-pilsnerBorder'          
        />
        {/* 11-1 element*/}
        <BeerElement
          number='23'
          initialDensity='1.044-1.050'
          finalDensity='1.006-1.012'
          name='German Pilsner'
          ABV='4.6-5.4%'
          IBU='25-45'
          SRM='2-4'
          bgColor='bg-pilsner'
          borderColor='border-pilsnerBorder'
        />
        {/* 11-2 element*/}
        <BeerElement
          number='37'
          initialDensity='1.044-1.056'
          finalDensity='1.014-1.020'
          name='Bohemian Pilsner'
          ABV='4.1-5.1%'
          IBU='35-45'
          SRM='3-5'
          bgColor='bg-pilsner'
          borderColor='border-pilsnerBorder'
        />
        {/* 11-3 element*/}
        <BeerElement
          number='51'
          initialDensity='1.055-1.060'
          finalDensity='1.012-1.018'
          name='American Pilsner'
          ABV='5.0-6.0%'
          IBU='20-40'
          SRM='3-6'
          bgColor='bg-pilsner'
          borderColor='border-pilsnerBorder'
        />
      </div>

      {/* 12 column */}
      <div className="flex flex-col gap-3">
        {/* 12 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='AMERICAN LAGER'
          titletextColor='text-americanLagerBorder'          
        />
        {/* 12-1 element*/}
        <BeerElement
          number='11'
          initialDensity='1.024-1.040'
          finalDensity='1.002-1.008'
          name='American Lite'
          ABV='2.9-4.5%'
          IBU='8-15'
          SRM='2-4'
          bgColor='bg-americanLager'
          borderColor='border-americanLagerBorder'
        />
        {/* 12-2 element*/}
        <BeerElement
          number='24'
          initialDensity='1.040-1.046'
          finalDensity='1.006-1.010'
          name='American Standard'
          ABV='4.1-4.8%'
          IBU='5-17'
          SRM='2-6'
          bgColor='bg-americanLager'
          borderColor='border-americanLagerBorder'
        />
        {/* 12-3 element*/}
        <BeerElement
          number='38'
          initialDensity='1.046-1.050'
          finalDensity='1.010-1.014'
          name='American Premium'
          ABV='4.6-5.1%'
          IBU='13-23'
          SRM='2-8'
          bgColor='bg-americanLager'
          borderColor='border-americanLagerBorder'
        />
        {/* 12-4 element*/}
        <BeerElement
          number='52'
          initialDensity='1.040-1.050'
          finalDensity='1.008-1.012'
          name='American Dark'
          ABV='4.1-5.6%'
          IBU='14-20'
          SRM='10-20'
          bgColor='bg-americanLager'
          borderColor='border-americanLagerBorder'
        />
      </div>
      
      {/* 13 column */}
      <div className="flex flex-col gap-3">
        {/* 13 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='EUROPEAN LAGER'
          titletextColor='text-europeanLagerBorder'          
        />
        {/* 13-1 element*/}
        <BeerElement
          number='12'
          initialDensity='1.044-1.050'
          finalDensity='1.008-1.012'
          name='Munich Helles'
          ABV='4.5-5.6%'
          IBU='18-25'
          SRM='3-5'
          bgColor='bg-europeanLager'
          borderColor='border-europeanLagerBorder'
        />
        {/* 13-2 element*/}
        <BeerElement
          number='25'
          initialDensity='1.048-1.056'
          finalDensity='1.010-1.014'
          name='Dort- munder'
          ABV='5.1-6.1%'
          IBU='23-29'
          SRM='4-6'
          bgColor='bg-europeanLager'
          borderColor='border-europeanLagerBorder'
        />
        {/* 13-3 element*/}
        <BeerElement
          number='39'
          initialDensity='1.052-1.056'
          finalDensity='1.010-1.014'
          name='Munich Dunkel'
          ABV='4.8-5.4%'
          IBU='16-25'
          SRM='17-23'
          bgColor='bg-europeanLager'
          borderColor='border-europeanLagerBorder'
        />
        {/* 13-4 element*/}
        <BeerElement
          number='53'
          initialDensity='1.044-1.052'
          finalDensity='1.012-1.016'
          name='Schwarz- bier'
          ABV='3.8-5.0%'
          IBU='22-30'
          SRM='25-40+'
          bgColor='bg-europeanLager'
          borderColor='border-europeanLagerBorder'
        />
      </div>

      {/* 14 column */}
      <div className="flex flex-col gap-3">
        {/* 14 column title */}
        <EmptyBeerElement/>
        <EmptyBeerElement/>
        <BeerColumnTitle 
          title='BOCK'
          titletextColor='text-bockLagerBorder'          
        />
        {/* 14-1 element*/}
        <BeerElement
          number='13'
          initialDensity='1.066-1.074'
          finalDensity='1.011-1.020'
          name='Helles Bock'
          ABV='6.0-7.5%'
          IBU='20-35'
          SRM='4-10'
          bgColor='bg-bockLager'
          borderColor='border-bockLagerBorder'
        />
        {/* 14-2 element*/}
        <BeerElement
          number='26'
          initialDensity='1.074-1.080'
          finalDensity='1.020-1.028'
          name='Doppel- bock'
          ABV='6.6-7.9%'
          IBU='20-30'
          SRM='12-30'
          bgColor='bg-bockLager'
          borderColor='border-bockLagerBorder'
        />
        {/* 14-3 element*/}
        <BeerElement
          number='40'
          initialDensity='1.066-1.074'
          finalDensity='1.018-1.024'
          name='Traditional Bock'
          ABV='6.4-7.6%'
          IBU='20-30'
          SRM='15-30'
          bgColor='bg-bockLager'
          borderColor='border-bockLagerBorder'
        />
        {/* 14-4 element*/}
        <BeerElement
          number='54'
          initialDensity='1.090-1.116'
          finalDensity='1.023-1.035'
          name='Eisbock'
          ABV='8.7-14.4%'
          IBU='25-50'
          SRM='18-40+'
          bgColor='bg-bockLager'
          borderColor='border-bockLagerBorder'
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