import BeerElement from "./BeerElement";

export default function BeerFooter() {
  const beerFooterElements = [
    {            
      elements: [
        {
          number: '55',
          initialDensity: '1.042-1.046',
          finalDensity: '1.006-1.010',
          name: 'Kolsch',
          ABV: '4.8-5.2%',
          IBU: '20-30',
          SRM: '4-5',
          bgColor: 'bg-brownAle',
          borderColor: 'border-brownAleBorder',
        },
        {
          number: '61',
          initialDensity: '1.044-1.048',
          finalDensity: '1.008-1.014',
          name: 'Altbier',
          ABV: '4.6-5.1%',
          IBU: '25-48',
          SRM: '11-19',
          bgColor: 'bg-brownAle',
          borderColor: 'border-brownAleBorder',
        },
      ]   
    },
    {            
      elements: [
        {
          number: '56',
          initialDensity: '1.060-1.080',
          finalDensity: '1.012-1.016',
          name: 'Biére de Garde',
          ABV: '4.5-8.0%',
          IBU: '20-30',
          SRM: '5-12',
          bgColor: 'bg-scotishAle',
          borderColor: 'border-scotishAleBorder',
        },
      ]   
    },
    {            
      elements: [
        {
          number: '57',
          initialDensity: '1.050-1.056',
          finalDensity: '1.012-1.016',
          name: 'Oktober- fest',
          ABV: '5.1-6.5%',
          IBU: '18-30',
          SRM: '7-12',
          bgColor: 'bg-pilsner',
          borderColor: 'border-pilsnerBorder',
        },
        {
          number: '62',
          initialDensity: '1.048-1.056',
          finalDensity: '1.010-1.014',
          name: 'Vienna',
          ABV: '4.6-5.5%',
          IBU: '20-28',
          SRM: '8-14',
          bgColor: 'bg-pilsner',
          borderColor: 'border-pilsnerBorder',
        },
      ]   
    },
    {            
      elements: [
        {
          number: '58',
          initialDensity: '1.044-1.055',
          finalDensity: '1.007-1.010',
          name: 'Cream Ale',
          ABV: '4.5-6.0%',
          IBU: '10-35',
          SRM: '8-14',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
        },
        {
          number: '63',
          initialDensity: '1.040-1.055',
          finalDensity: '1.012-1.018',
          name: 'Steam Beer',
          ABV: '3.6-5.0%',
          IBU: '35-45',
          SRM: '8-17',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
        },
      ]   
    },
    {            
      elements: [
        {
          number: '59',
          initialDensity: '1.050-1.055',
          finalDensity: '1.012-1.016',
          name: 'Smoked Beer',
          ABV: '5.0-5.5%',
          IBU: '20-30',
          SRM: '12-17',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
        },
        {
          number: '64',
          initialDensity: '1.085-1.120',
          finalDensity: '1.024-1.032',
          name: 'Barleywine',
          ABV: '8.4-12.2%',
          IBU: '50-100',
          SRM: '14-22',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
        },
      ]   
    },
    {            
      elements: [
        {
          number: '60',
          initialDensity: '1.060-1.090',
          finalDensity: '1.015-1.022',
          name: 'English Old Ale',
          ABV: '6.1-8.5%',
          IBU: '30-40',
          SRM: '12-16',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
        },
        {
          number: '65',
          initialDensity: '1.072-1.085',
          finalDensity: '1.016-1.028',
          name: 'Strong Scotch Ale',
          ABV: '6.0-9.0%',
          IBU: '20-40',
          SRM: '10-40+',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
        },
      ]   
    },
  ];


  return (
    <div className="container flex justify-center items-center flex-wrap gap-3 mx-auto myxl:w-full xl:w-[55%] md:w-[100%] sm:w-[45%]">
      <div className="flex myxl:justify-center items-center flex-wrap gap-3 myxl:w-[49.5%] md:w-[100%] s:justify-center">
        <div className="flex justify-center items-center gap-3 myxl:w-[49%]">
          <BeerElement
            number={"1"} 
            initialDensity={"1.026-1.036"} 
            finalDensity={"1.006-1.009"} 
            name={"Berliner Weisse"} 
            ABV={"2.5-3.6%"} 
            IBU={"3-12"} 
            SRM={"2-4"} 
            bgColor={"bg-wheatBeer"} 
            borderColor={"border-wheatBeerBorder"}
          />
          <div className="text-[12px] leading-[16px] font-bold">
            <p>1 - number</p>
            <p >1.055-1.026 - initialDensity</p>
            <p>1.055-1.026 - finalDensity</p>
            <p>Beer - name</p>
            <p>2-6% - ABV</p>
            <p>2-40 - IBU</p>
            <p>2-40 - SRM</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center myxl:w-[49%] text-[12px] font-bold">
            <div>SRM rating</div>
            <div className="flex">
              <div className="flex flex-col">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">0</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">1</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">2</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">5</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">10</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">18</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">20</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">26</div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="w-5 h-5 bg-black"></div>
                <div className="w-5 h-5 text-center">40+</div>
              </div>
            </div>
        </div>
      </div>
      <div className="flex myxl:justify-start items-start flex-wrap gap-3 myxl:w-[49.5%] md:w-[100%] s:justify-center">
        {beerFooterElements.map(el => {
          return  <div className="flex flex-col gap-3">
          {el.elements.map(subElement => {
            return <BeerElement
            number={subElement.number}
            initialDensity={subElement.initialDensity}
            finalDensity={subElement.finalDensity}
            name={subElement.name}
            ABV={subElement.ABV}
            IBU={subElement.IBU}
            SRM={subElement.SRM}
            bgColor={subElement.bgColor}
            borderColor={subElement.borderColor}
          />
          })}
        </div> 
        })}
      </div>
      

    </div>
  );
}