export interface BeerElements {
    id: string;
    title: string;
    titletextColor: string;
    elements: SubElementType[];
}

export interface BeerFooterElements {
    id: string;
    elements: SubElementType[];
}

export interface SubElementType {
    number: string;
    initialDensity: string;
    finalDensity: string;
    name: string;
    ABV: string;
    IBU: string;
    SRM: string;
    bgColor: string;
    borderColor: string;
    link: string;
    example: string;
}

export interface SrmRatingType {
    number: string;
    bgColor: string;
  }