"use client"

export default function BeerElement(props: PropsBeerElementType) {

  return (
    <div onClick={() => props.onShowElementInfo(props.name)} className={`flex items-center relative w-20 h-20 leading-none font-semibold ${props.bgColor} border-2 ${props.borderColor} cursor-pointer lg:hover:scale-150 lg:hover:z-50 lg:duration-300`}>
      <p className="absolute top-0 left-0 w-5 h-5 text-[12px] leading-[1.2rem] text-center text-white bg-black">{props.number}</p>
      <div className="absolute top-0 right-0 pt-[2px] pr-[2px] text-[9px]">
        <p>{props.initialDensity}</p>
        <p>{props.finalDensity}</p>
      </div>
      <p className={`w-full text-[14px] font-bold leading-[1rem] text-center`}>{props.name}</p>
      <div className="absolute bottom-0 left-0 pb-[2px] pl-[2px] text-[9px]">
        <p>{props.ABV}</p>
        <p>{props.IBU}</p>
      </div>
      <div className="absolute bottom-0 right-0 pb-[2px] pr-[2px] text-[9px]">
        <p>{props.SRM}</p>
      </div>
    </div>
  );
}

type PropsBeerElementType = {
  onShowElementInfo: any;
  number: string,
  initialDensity: string,
  finalDensity: string,
  name: string,
  ABV: string,
  IBU: string,
  SRM: string,
  bgColor: string,
  borderColor: string
}