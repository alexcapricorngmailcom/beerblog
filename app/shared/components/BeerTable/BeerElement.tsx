"use client"

import { SubElementType } from "./types/SubElement";

export default function BeerElement(props: PropsBeerElementType) {

  return (
    <div onClick={() => props.onShowElementInfo(props.subElement)} className={`flex items-center relative w-20 h-20 leading-none font-semibold ${props.subElement.bgColor} border-2 ${props.subElement.borderColor} cursor-pointer lg:hover:scale-150 lg:hover:z-50 lg:duration-300`}>
      <p className="absolute top-0 left-0 w-5 h-5 text-[12px] leading-[1.2rem] text-center text-white bg-black">{props.subElement.number}</p>
      <div className="absolute top-0 right-0 pt-[2px] pr-[2px] text-[9px]">
        <p>{props.subElement.initialDensity}</p>
        <p>{props.subElement.finalDensity}</p>
      </div>
      <p className={`w-full text-[14px] font-bold leading-[1rem] text-center`}>{props.subElement.name}</p>
      <div className="absolute bottom-0 left-0 pb-[2px] pl-[2px] text-[9px]">
        <p>{props.subElement.ABV}</p>
        <p>{props.subElement.IBU}</p>
      </div>
      <div className="absolute bottom-0 right-0 pb-[2px] pr-[2px] text-[9px]">
        <p>{props.subElement.SRM}</p>
      </div>
    </div>
  );
}

type PropsBeerElementType = {
  onShowElementInfo: any;
  subElement: SubElementType;
}