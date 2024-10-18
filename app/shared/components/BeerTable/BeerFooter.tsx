import BeerColumnTitle from "./BeerColumnTitle";
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
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
        },
        {
          number: '61',
          initialDensity: '1.044-1.048',
          finalDensity: '1.008-1.014',
          name: 'Altbier',
          ABV: '4.6-5.1%',
          IBU: '25-48',
          SRM: '11-19',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
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
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
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
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
        },
        {
          number: '62',
          initialDensity: '1.048-1.056',
          finalDensity: '1.010-1.014',
          name: 'Vienna',
          ABV: '4.6-5.5%',
          IBU: '20-28',
          SRM: '8-14',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
        },
      ]   
    },
  ];


  return (
    <div className="container flex justify-center items-start flex-wrap gap-3 mx-auto myxl:w-full xl:w-[55%] md:w-[65%] sm:w-[80%]">
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
  );
}