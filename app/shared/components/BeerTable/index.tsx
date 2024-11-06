"use client"
import { useState } from "react";
import DialogModal from "../DialogModal";
import BeerColumnTitle from "./BeerColumnTitle";
import BeerElement from "./BeerElement";
import SRM from "./SRM";
import { BeerElements, BeerFooterElements, SrmRatingType, SubElementType } from "./types/beerTable";

export default function BeerTable() {
  const beerElements: BeerElements[] = [
    {
      id: 'a7f3',
      title: 'WHEAT BEER',
      titletextColor: 'text-wheatBeerBorder',
      elements: [
        {
          number: '1',
          initialDensity: '1.026-1.036',
          finalDensity: '1.006-1.009',
          name: 'Berliner Weisse',
          ABV: '2.5-3.6%',
          IBU: '3-12',
          SRM: '2-4',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://en.wikipedia.org/wiki/Berliner_Weisse',
          example: 'e.g.: Schulthesis Berliner Weisse, Berliner Kindl Weisse',
        },
        {
          number: '4',
          initialDensity: '1.042-1.055',
          finalDensity: '1.008-1.012',
          name: 'Belgian White',
          ABV: '4.5-5.5%',
          IBU: '15-28',
          SRM: '2-4',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://en.wikipedia.org/wiki/Wheat_beer#Witbier',
          example: 'e.g.: Celis White, Hoegaarden White, Blanche de Bruges',
        },
        {
          number: '7',
          initialDensity: '1.042-1.055',
          finalDensity: '1.008-1.018',
          name: 'American Wheat',
          ABV: '3.5-5.0%',
          IBU: '5-20',
          SRM: '2-8',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://beers.su/beers/american-pale-wheat-ale',
          example: 'e.g.: Samuel Adams Summer Ale, Catamount American Wheat',
        },
        {
          number: '14',
          initialDensity: '1.040-1.056',
          finalDensity: '1.008-1.016',
          name: 'Weizen- bier',
          ABV: '4.3-5.6%',
          IBU: '8-15',
          SRM: '3-9',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://en.wikipedia.org/wiki/Weizenbier',
          example: 'e.g.: Erdinger Weissbier. Pyramid wheaten ale, Julius Echter Weizenbier',
        },
        {
          number: '27',
          initialDensity: '1.048-1.056',
          finalDensity: '1.008-1.016',
          name: 'Dunkel- weizen',
          ABV: '4.5-6.0%',
          IBU: '10-15',
          SRM: '17-23',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://en.wikipedia.org/wiki/Dunkelweizen',
          example: 'e.g.: Franziskaner Dunkel Weizen, Schneider Dunkel Weiss',
        },
        {
          number: '41',
          initialDensity: '1.066-1.080',
          finalDensity: '1.016-1.028',
          name: 'Weizen- bock',
          ABV: '6.5-9.6%',
          IBU: '12-25',
          SRM: '10-30',
          bgColor: 'bg-wheatBeer',
          borderColor: 'border-wheatBeerBorder',
          link: 'https://en.wikipedia.org/wiki/Weizenbock',
          example: 'e.g.: Schneider Aventinus, Pyramid Weizenbock',
        }
      ]   
    },
    {
      id: 'k9d2',
      title: 'LAMBIC\n & SOUR',
      titletextColor: 'text-lambicSourBorder',
      elements: [
        {
          number: '2',
          initialDensity: '1.044-1.056',
          finalDensity: '1.006-1.012',
          name: 'Lambic',
          ABV: '4.7-6.4%',
          IBU: '5-15',
          SRM: '4-15',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Lambic',
          example: 'e.g.: Grand Cru Cantillon Bruocsella 1900, Boon, De Neve',
        },
        {
          number: '5',
          initialDensity: '1.044-1.056',
          finalDensity: '1.006-1.012',
          name: 'Gueuze',
          ABV: '4.7-6.4%',
          IBU: '5-15',
          SRM: '4-15',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Gueuze',
          example: 'e.g.: Lindeman\'s Gueuze Lambic, Belle-Vue Gueuze, Boon, Cantillon, Hanssens'
        },
        {
          number: '8',
          initialDensity: '1.044-1.056',
          finalDensity: '1.006-1.012',
          name: 'Faro',
          ABV: '4.5-5.5%',
          IBU: '5-15',
          SRM: '4-15',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Lambic#Faro',
          example: 'e.g.: Lindeman\'s',
        },
        {
          number: '15',
          initialDensity: '1.040-1.072',
          finalDensity: '1.008-1.016',
          name: 'Fruit Beer',
          ABV: '4.7-7.0%',
          IBU: '15-21',
          SRM: 'N/A',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Lambic#Fruit',
          example: 'e.g.: Belle-Vue Kriek, Lindeman\'s Framboise Lambic',
        },
        {
          number: '28',
          initialDensity: '1.042-1.060',
          finalDensity: '1.008-1.016',
          name: 'Flanders Red',
          ABV: '4.0-5.8%',
          IBU: '14-25',
          SRM: '10-16',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Flanders_red_ale',
          example: 'e.g.: Rodenbach, Petrus, Bourgone des Flanders, Vlaamse Bourgogne',
        },
        {
          number: '42',
          initialDensity: '1.042-1.060',
          finalDensity: '1.008-1.016',
          name: 'Oud Bruin',
          ABV: '4.0-6.5%',
          IBU: '14-30',
          SRM: '12-20',
          bgColor: 'bg-lambicSour',
          borderColor: 'border-lambicSourBorder',
          link: 'https://en.wikipedia.org/wiki/Oud_bruin',
          example: 'e.g.: Liefman\'s Goudenband, Felix, Roman',
        }
      ]   
    },
    {
      id: 'p6q1',
      title: 'BELGIAN ALE',
      titletextColor: 'text-belgianAleBorder',
      elements: [
        {
          number: '3',
          initialDensity: '1.065-1.085',
          finalDensity: '1.014-1.020',
          name: 'Belgian Gold Ale',
          ABV: '7.0-9.0%',
          IBU: '25-35',
          SRM: '4-6',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://en.wikipedia.org/wiki/Belgian_ale#Blonde_or_golden_ale',
          example: 'e.g.: Duvel, Lucifer, La Chouffe, Moinette, Celis Grand Cru',
        },
        {
          number: '6',
          initialDensity: '1.070-1.100',
          finalDensity: '1.016-1.024',
          name: 'Tripel',
          ABV: '7.0-10.0%',
          IBU: '10-20',
          SRM: '4-7',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://en.wikipedia.org/wiki/Trippel',
          example: 'e.g.: Westmalle Tripel, Affligem Tripel, Grimbergen Tripel',
        },
        {
          number: '9',
          initialDensity: '1.052-1.080',
          finalDensity: '1.010-1.015',
          name: 'Saison',
          ABV: '4.5-8.1%',
          IBU: '25-40',
          SRM: '4-10',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://en.wikipedia.org/wiki/Saison',
          example: 'e.g.: Saison Dupont, Moinette, Laforet',
        },
        {
          number: '16',
          initialDensity: '1.040-1.055',
          finalDensity: '1.008-1.013',
          name: 'Belgian Pale Ale',
          ABV: '3.9-5.6%',
          IBU: '20-35',
          SRM: '4-14',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://beers.su/beers/pale-ale-belgian',
          example: 'e.g.: Celis Pale Bock, DeKoninck Special Palm Ale, Ginder Ale',
        },
        {
          number: '29',
          initialDensity: '1.065-1.098',
          finalDensity: '1.014-1.024',
          name: 'Belgian Dark Ale',
          ABV: '7.0-12.0%',
          IBU: '25-40',
          SRM: '7-20',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://en.wikipedia.org/wiki/Belgian_Strong_Dark_Ale',
          example: 'e.g.: Pawel Kwak, Gourden Carolus, Scaldis, Rocherfort 10, Chimay Grand Reserve',
        },
        {
          number: '43',
          initialDensity: '1.065-1.085',
          finalDensity: '1.012-1.018',
          name: 'Dubbel',
          ABV: '3.2-8.0%',
          IBU: '20-25',
          SRM: '10-20',
          bgColor: 'bg-belgianAle',
          borderColor: 'border-belgianAleBorder',
          link: 'https://en.wikipedia.org/wiki/Dubbel',
          example: 'e.g.: Westmalle Dubbel, LaTrappe Dubbel, Affligem Dubbel',
        }
      ]   
    },
    {
      id: 'z3h7',
      title: 'PALE ALE',
      titletextColor: 'text-paleAleBorder',      
      elements: [
        {
          number: '10',
          initialDensity: '1.043-1.056',
          finalDensity: '1.008-1.016',
          name: 'Pale Ale',
          ABV: '4.5-5.5%',
          IBU: '20-40',
          SRM: '4-11',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
          link: 'https://en.wikipedia.org/wiki/Pale_ale',
          example: 'e.g.: Draught Bass, Samuel Smith Old Brewery Pale Ale',
        },
        {
          number: '17',
          initialDensity: '1.045-1.056',
          finalDensity: '1.010-1.015',
          name: 'American Pale Ale',
          ABV: '4.5-5.7%',
          IBU: '20-40',
          SRM: '4-11',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
          link: 'https://en.wikipedia.org/wiki/American_Pale_Ale',
          example: 'e.g.: Sierra Nevada Pale Ale, Summit Pale Ale, Geary\'s Pale Ale',
        },
        {
          number: '30',
          initialDensity: '1.050-1.075',
          finalDensity: '1.012-1.018',
          name: 'India Pale Ale',
          ABV: '5.1-7.6%',
          IBU: '40-60',
          SRM: '8-14',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
          link: 'https://en.wikipedia.org/wiki/India_Pale_Ale',
          example: 'e.g.: Anchor Liberty Ale, Samuel Smith\'s India Ale, Fuller IPA, OWE IPA',
        },
        {
          number: '44',
          initialDensity: '1.043-1.056',
          finalDensity: '1.008-1.016',
          name: 'American Amber Ale',
          ABV: '4.5-5.7%',
          IBU: '20-40',
          SRM: '11-18',
          bgColor: 'bg-paleAle',
          borderColor: 'border-paleAleBorder',
          link: 'https://en.wikipedia.org/wiki/Amber_lager',
          example: 'e.g.: Big Time Atlas Amber, Bell\'s Amber, North Coast Red Seal Ale',
        },
      ]   
    },
    {
      id: 'y2l4',
      title: 'ENGLISH BITTER',
      titletextColor: 'text-englishBitterBorder',    
      elements: [
        {
          number: '18',
          initialDensity: '1.030-1.038',
          finalDensity: '1.006-1.012',
          name: 'Ordinary Bitter',
          ABV: '3.0-3.8%',
          IBU: '20-35',
          SRM: '6-12',
          bgColor: 'bg-englishBitter',
          borderColor: 'border-englishBitterBorder',
          link: 'https://en.wikipedia.org/wiki/Ordinary_bitter',
          example: 'e.g.: Young\'s Bitter, HSB Premium Bitter',
        },
        {
          number: '31',
          initialDensity: '1.039-1.045',
          finalDensity: '1.006-1.014',
          name: 'Special Bitter',
          ABV: '3.7-4.8%',
          IBU: '25-40',
          SRM: '12-14',
          bgColor: 'bg-englishBitter',
          borderColor: 'border-englishBitterBorder',
          link: 'https://en.wikipedia.org/wiki/Bitter_(beer)',
          example: 'e.g.: Young\'s Ramrod, Fuller\'s London Pride',
        },
        {
          number: '45',
          initialDensity: '1.046-1.065',
          finalDensity: '1.010-1.018',
          name: 'Special Extra Bitter',
          ABV: '3.7-4.8%',
          IBU: '30-45',
          SRM: '12-14',
          bgColor: 'bg-englishBitter',
          borderColor: 'border-englishBitterBorder',
          link: 'https://en.wikipedia.org/wiki/Bitter_(beer)',
          example: 'e.g.: Fuller\'s ESB, Young\'s Special London Ale',
        },
      ]   
    },
    {
      id: 't8v5',
      title: 'SCOTISH ALE',
      titletextColor: 'text-scotishAleBorder',          
      elements: [
        {
          number: '19',
          initialDensity: '1.030-1.035',
          finalDensity: '1.006-1.012',
          name: 'Scottish Light 60/-',
          ABV: '2.8-4.0%',
          IBU: '9-20',
          SRM: '8-17',
          bgColor: 'bg-scotishAle',
          borderColor: 'border-scotishAleBorder',
          link: 'https://en.wikipedia.org/wiki/Scottish_beer',
          example: 'e.g.: Belhaven 60/-, Caledonian 60/-, Maclay 60/- Light, Highland Dark Light',
        },
        {
          number: '32',
          initialDensity: '1.035-1.040',
          finalDensity: '1.010-1.014',
          name: 'Scottish Heavy 70/-',
          ABV: '3.5-4.1%',
          IBU: '12-25',
          SRM: '10-19',
          bgColor: 'bg-scotishAle',
          borderColor: 'border-scotishAleBorder',
          link: 'https://en.wikipedia.org/wiki/Scottish_beer',
          example: 'e.g.: Greenmantle Ale, Highland Heavy, Young\'s Scotch Ale',
        },
        {
          number: '46',
          initialDensity: '1.040-1.050',
          finalDensity: '1.010-1.018',
          name: 'Scottish Export 80/-',
          ABV: '4.0-4.9%',
          IBU: '15-36',
          SRM: '10-19',
          bgColor: 'bg-scotishAle',
          borderColor: 'border-scotishAleBorder',
          link: 'https://en.wikipedia.org/wiki/Scottish_beer',
          example: 'e.g.: Highland Severe, Orkney Dark Island, Sherlock\'s Home Piper\'s Pride',
        },
      ]   
    },
    {
      id: 'j1m6',
      title: 'BROWN ALE',
      titletextColor: 'text-brownAleBorder',              
      elements: [
        {
          number: '20',
          initialDensity: '1.030-1.038',
          finalDensity: '1.004-1.012',
          name: 'English Mild',
          ABV: '2.5-4.1%',
          IBU: '10-24',
          SRM: '10-25',
          bgColor: 'bg-brownAle',
          borderColor: 'border-brownAleBorder',
          link: 'https://en.wikipedia.org/wiki/Mild_ale',
          example: 'e.g.: Bank\'s Mild, Fuller\'s Summer Ale',
        },
        {
          number: '33',
          initialDensity: '1.040-1.055',
          finalDensity: '1.010-1.018',
          name: 'American Brown',
          ABV: '4.2-6.0%',
          IBU: '25-60',
          SRM: '15-22',
          bgColor: 'bg-brownAle',
          borderColor: 'border-brownAleBorder',
          link: 'https://beers.su/beers/brown-ale-american',
          example: 'e.g.: Pete\'s Wicked Ale, Brooklyn Brown Ale, Shipyard Moos Brown',
        },
        {
          number: '47',
          initialDensity: '1.040-1.050',
          finalDensity: '1.008-1.014',
          name: 'English Brown',
          ABV: '3.5-6.0%',
          IBU: '15-25',
          SRM: '15-30',
          bgColor: 'bg-brownAle',
          borderColor: 'border-brownAleBorder',
          link: 'https://en.wikipedia.org/wiki/English_brown_ale',
          example: 'e.g.: Newcastle Brown Ale, Samuel Smith Nut Brown',
        },
      ]   
    },
    {
      id: 'r4c9',
      title: 'PORTER',
      titletextColor: 'text-porterBorder',             
      elements: [
        {
          number: '34',
          initialDensity: '1.040-1.050',
          finalDensity: '1.008-1.014',
          name: 'Brown Porter',
          ABV: '3.8-5.2%',
          IBU: '20-30',
          SRM: '20-30',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
          link: 'https://en.wikipedia.org/wiki/Porter_(beer)',
          example: 'e.g.: Samuel Smith Taddy Porter, Fuller\'s London Porter',
        },
        {
          number: '48',
          initialDensity: '1.050-1.065',
          finalDensity: '1.012-1.016',
          name: 'Robust Porter',
          ABV: '4.8-6.0%',
          IBU: '25-45',
          SRM: '30-40',
          bgColor: 'bg-porter',
          borderColor: 'border-porterBorder',
          link: 'https://en.wikipedia.org/wiki/Porter_(beer)',
          example: 'e.g.: Sierra Nevada Porter, Anchor Porter',
        },
      ]   
    },
    {
      id: 'f3b8',
      title: 'STOUT',
      titletextColor: 'text-lightStoutBorder',                   
      elements: [
        {
          number: '21',
          initialDensity: '1.035-1.050',
          finalDensity: '1.008-1.014',
          name: 'Dry Stout',
          ABV: '3.2-5.5%',
          IBU: '40-50',
          SRM: '40+',
          bgColor: 'bg-lightStout',
          borderColor: 'border-lightStoutBorder',
          link: 'https://en.wikipedia.org/wiki/Dry_stout',
          example: 'e.g.: Guinness Draught Stout, Murphy\'s Stout, Beamish Stout',
        },
        {
          number: '35',
          initialDensity: '1.035-1.066',
          finalDensity: '1.010-1.022',
          name: 'Sweet Stout',
          ABV: '3.2-6.4%',
          IBU: '20-40',
          SRM: '40+',
          bgColor: 'bg-lightStout',
          borderColor: 'border-lightStoutBorder',
          link: 'https://en.wikipedia.org/wiki/Sweet_stout',
          example: 'e.g.: Mackenson\'s XXX Stout, Samuel Adams Cream Stout',
        },
        {
          number: '49',
          initialDensity: '1.035-1.060',
          finalDensity: '1.008-1.021',
          name: 'Oatmeal Stout',
          ABV: '3.3-6.1%',
          IBU: '20-50',
          SRM: '40+',
          bgColor: 'bg-lightStout',
          borderColor: 'border-lightStoutBorder',
          link: 'https://en.wikipedia.org/wiki/Oatmeal_stout',
          example: 'e.g.: Samuel Smith Oatmeal Stout, Young\'s Oatmeal Stout, Brew Moon Eclipse',
        },
      ]   
    },
    {
      id: 'l2x7',
      title: 'STOUT',
      titletextColor: 'text-heavyStoutBorder',                  
      elements: [
        {
          number: '22',
          initialDensity: '1.050-1.075',
          finalDensity: '1.010-1.017',
          name: 'Foreign Extra Stout',
          ABV: '5.0-7.5%',
          IBU: '35-70',
          SRM: '40+',
          bgColor: 'bg-heavyStout',
          borderColor: 'border-heavyStoutBorder',
          link: 'https://beers.su/beers/stout-foreign-export',
          example: 'e.g.: ABC Stout, Guinness Foreign Extra Stout',
        },
        {
          number: '36',
          initialDensity: '1.075-1.090',
          finalDensity: '1.020-1.030',
          name: 'Imperial Stout',
          ABV: '7.8-9.0%',
          IBU: '50-80',
          SRM: '40+',
          bgColor: 'bg-heavyStout',
          borderColor: 'border-heavyStoutBorder',
          link: 'https://en.wikipedia.org/wiki/Imperial_stout',
          example: 'e.g.: Samuel Smith Imperial Stout, Courage Imperial Stout',
        },
        {
          number: '50',
          initialDensity: '1.075-1.100',
          finalDensity: '1.018-1.030',
          name: 'Pidorussian Imperial',
          ABV: '8.0-12.0%',
          IBU: '50-90',
          SRM: '40+',
          bgColor: 'bg-heavyStout',
          borderColor: 'border-heavyStoutBorder',
          link: 'https://en.wikipedia.org/wiki/Russian_Imperial_Stout',
          example: 'e.g.: Harvey and Son\'s Imperial Extra Double Stout',
        },
      ]   
    },
    {
      id: 'n5g2',
      title: 'PILSNER',
      titletextColor: 'text-pilsnerBorder',               
      elements: [
        {
          number: '23',
          initialDensity: '1.044-1.050',
          finalDensity: '1.006-1.012',
          name: 'German Pilsner',
          ABV: '4.6-5.4%',
          IBU: '25-45',
          SRM: '2-4',
          bgColor: 'bg-pilsner',
          borderColor: 'border-pilsnerBorder',
          link: 'https://beers.su/beers/pilsner-german',
          example: 'e.g.: Kulmbacher Moenchshof Pils, Jever Pils, Wickuler Pilsner',
        },
        {
          number: '37',
          initialDensity: '1.044-1.056',
          finalDensity: '1.014-1.020',
          name: 'Bohemian Pilsner',
          ABV: '4.1-5.1%',
          IBU: '35-45',
          SRM: '3-5',
          bgColor: 'bg-pilsner',
          borderColor: 'border-pilsnerBorder',
          link: 'https://en.wikipedia.org/wiki/Pilsner',
          example: 'e.g.: Pilsner Urquell, Gambrinus Pilsner, Budweiser Budvar',
        },
        {
          number: '51',
          initialDensity: '1.055-1.060',
          finalDensity: '1.012-1.018',
          name: 'American Pilsner',
          ABV: '5.0-6.0%',
          IBU: '20-40',
          SRM: '3-6',
          bgColor: 'bg-pilsner',
          borderColor: 'border-pilsnerBorder',
          link: 'https://legacy.bjcp.org/2008styles/style02.php#1c',
          example: 'e.g.: Pete\'s Signature Pilsner, Milwaukee Pilsner',
        },
      ]   
    },
    {
      id: 'h4y3',
      title: 'AMERICAN LAGER',
      titletextColor: 'text-americanLagerBorder', 
      elements: [
        {
          number: '11',
          initialDensity: '1.024-1.040',
          finalDensity: '1.002-1.008',
          name: 'American Lite',
          ABV: '2.9-4.5%',
          IBU: '8-15',
          SRM: '2-4',
          bgColor: 'bg-americanLager',
          borderColor: 'border-americanLagerBorder',
          link: 'https://legacy.bjcp.org/2008styles/style01.php#1a',
          example: 'e.g.: Bud Light, Miller Lite',
        },
        {
          number: '24',
          initialDensity: '1.040-1.046',
          finalDensity: '1.006-1.010',
          name: 'American Standard',
          ABV: '4.1-4.8%',
          IBU: '5-17',
          SRM: '2-6',
          bgColor: 'bg-americanLager',
          borderColor: 'border-americanLagerBorder',
          link: 'https://beers.su/beers/lager-american',
          example: 'e.g.: Budweiser, Molson Golden, Kirin',
        },
        {
          number: '38',
          initialDensity: '1.046-1.050',
          finalDensity: '1.010-1.014',
          name: 'American Premium',
          ABV: '4.6-5.1%',
          IBU: '13-23',
          SRM: '2-8',
          bgColor: 'bg-americanLager',
          borderColor: 'border-americanLagerBorder',
          link: 'https://en.wikipedia.org/wiki/American_lager',
          example: 'e.g.: Michelob',
        },
        {
          number: '52',
          initialDensity: '1.040-1.050',
          finalDensity: '1.008-1.012',
          name: 'American Dark',
          ABV: '4.1-5.6%',
          IBU: '14-20',
          SRM: '10-20',
          bgColor: 'bg-americanLager',
          borderColor: 'border-americanLagerBorder',
          link: 'https://beers.su/beers/lager-dark',
          example: 'e.g.: Michelob Dark, Lowenbrau Dark, Beck\'s dark, Saint Pauli Girl Dark',
        },
      ]   
    },
    {
      id: 'm9k6',
      title: 'EUROPEAN LAGER',
      titletextColor: 'text-europeanLagerBorder',
      elements: [
        {
          number: '12',
          initialDensity: '1.044-1.050',
          finalDensity: '1.008-1.012',
          name: 'Munich Helles',
          ABV: '4.5-5.6%',
          IBU: '18-25',
          SRM: '3-5',
          bgColor: 'bg-europeanLager',
          borderColor: 'border-europeanLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Helles',
          example: 'e.g.: Black Forest Lager, Spaten Premium Lager',
        },
        {
          number: '25',
          initialDensity: '1.048-1.056',
          finalDensity: '1.010-1.014',
          name: 'Dort- munder',
          ABV: '5.1-6.1%',
          IBU: '23-29',
          SRM: '4-6',
          bgColor: 'bg-europeanLager',
          borderColor: 'border-europeanLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Dortmunder_(beer)',
          example: 'e.g.: Dortmunder Gold, DAB Original, Berghoff Original Lager',
        },
        {
          number: '39',
          initialDensity: '1.052-1.056',
          finalDensity: '1.010-1.014',
          name: 'Munich Dunkel',
          ABV: '4.8-5.4%',
          IBU: '16-25',
          SRM: '17-23',
          bgColor: 'bg-europeanLager',
          borderColor: 'border-europeanLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Munich_dunkel_lager',
          example: 'e.g.: Ayinger Altbairisch Dunkel, Hacker-Pschorr Alt Munich Dark',
        },
        {
          number: '53',
          initialDensity: '1.044-1.052',
          finalDensity: '1.012-1.016',
          name: 'Schwarz- bier',
          ABV: '3.8-5.0%',
          IBU: '22-30',
          SRM: '25-40+',
          bgColor: 'bg-europeanLager',
          borderColor: 'border-europeanLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Schwarzbier',
          example: 'e.g.: Kulmbacher monchschof Kloster Schwartz-Bier',
        },
      ]   
    },
    {
      id: 'd7q8',
      title: 'BOCK',
      titletextColor: 'text-bockLagerBorder',
      elements: [
        {
          number: '13',
          initialDensity: '1.066-1.074',
          finalDensity: '1.011-1.020',
          name: 'Helles Bock',
          ABV: '6.0-7.5%',
          IBU: '20-35',
          SRM: '4-10',
          bgColor: 'bg-bockLager',
          borderColor: 'border-bockLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Bock#Maibock_or_helles_bock',
          example: 'e.g.: Wuerzburger Maibock, Spaten Premium Bock, Pschorr Marzenbock',
        },
        {
          number: '26',
          initialDensity: '1.074-1.080',
          finalDensity: '1.020-1.028',
          name: 'Doppel- bock',
          ABV: '6.6-7.9%',
          IBU: '20-30',
          SRM: '12-30',
          bgColor: 'bg-bockLager',
          borderColor: 'border-bockLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Bock#Doppelbock',
          example: 'e.g.: Paulaner Salvator, Spaten Optimator',
        },
        {
          number: '40',
          initialDensity: '1.066-1.074',
          finalDensity: '1.018-1.024',
          name: 'Traditional Bock',
          ABV: '6.4-7.6%',
          IBU: '20-30',
          SRM: '15-30',
          bgColor: 'bg-bockLager',
          borderColor: 'border-bockLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Bock#Traditional_bock',
          example: 'e.g.: Aass bock, Hacker-Pschorr Dunkel Bock, Dunkel Ritter Bock, Boiler Room Red',
        },
        {
          number: '54',
          initialDensity: '1.090-1.116',
          finalDensity: '1.023-1.035',
          name: 'Eisbock',
          ABV: '8.7-14.4%',
          IBU: '25-50',
          SRM: '18-40+',
          bgColor: 'bg-bockLager',
          borderColor: 'border-bockLagerBorder',
          link: 'https://en.wikipedia.org/wiki/Bock#Eisbock',
          example: 'e.g.: Niagara Eisbock',
        },
      ]   
    },
  ];

  const beerFooterElements:BeerFooterElements[] = [
    { id: 'b2n7',           
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
          link: 'https://en.wikipedia.org/wiki/K%C3%B6lsch_(beer)',
          example: 'e.g.: Malzmuehle, Hellers, Hollywood Blonde',
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
          link: 'https://en.wikipedia.org/wiki/Altbier',
          example: 'e.g.: DAB Dark, Diebels Alt, Alaskan Amber, Grolsch Autumn Amber',
        },
      ]   
    },
    { id: 'w5j3',
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
          link: 'https://en.wikipedia.org/wiki/Bi%C3%A8re_de_Garde',
          example: 'e.g.: Jenlain, Castelain, Septante Cinq, Brasseurs Biére de Garde',
        },
      ]   
    },
    { id: 'c8t4',       
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
          link: 'https://en.wikipedia.org/wiki/Oktoberfest_Beer',
          example: 'e.g.: Spaten Ur-Marzen, Paulaner Oktoberfest, Wuerzburger Oktoberfest.',
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
          link: 'https://en.wikipedia.org/wiki/Vienna_lager',
          example: 'e.g.: Negra Modelo, Portland lager, Leinenkugel Red',
        },
      ]   
    },
    { id: 'q9z6',  
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
          link: 'https://en.wikipedia.org/wiki/Cream_ale',
          example: 'e.g.: Genesee Cream Ale, Little Kings Cream Ale',
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
          link: 'https://en.wikipedia.org/wiki/Steam_beer',
          example: 'e.g.: Anchor Steam, Old Dominion Victor Amber',
        },
      ]   
    },
    { id: 'u3h1',
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
          link: 'https://en.wikipedia.org/wiki/Smoked_beer',
          example: 'e.g.: Schlenkerla Rauchbier',
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
          link: 'https://en.wikipedia.org/wiki/Barley_wine',
          example: 'e.g.: Young\'s Old Nick, Fuller\'s Golden Pride, Sierra Nevada Bigfoot',
        },
      ]   
    },
    { id: 's4p9',
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
          link: 'https://en.wikipedia.org/wiki/Old_ale',
          example: 'e.g.: Theakston Old Peculier, Young\'s Winter Warmer, Marston Owd Roger',
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
          link: 'https://en.wikipedia.org/wiki/Scotch_Ale',
          example: 'e.g.: Traquair House, MacAndrew\'s Scotch Ale',
        },
      ]   
    },
  ];

  const srmRating: SrmRatingType[] = [
    {
      number: '0',
      bgColor: 'bg-srm0',
    },
    {
      number: '1',
      bgColor: 'bg-srm1',
    },
    {
      number: '2',
      bgColor: 'bg-srm2',
    },
    {
      number: '5',
      bgColor: 'bg-srm5',
    },
    {
      number: '10',
      bgColor: 'bg-srm10',
    },
    {
      number: '18',
      bgColor: 'bg-srm18',
    },
    {
      number: '20',
      bgColor: 'bg-srm20',
    },
    {
      number: '26',
      bgColor: 'bg-srm26',
    },
    {
      number: '40+',
      bgColor: 'bg-srm40+',
    },
  ]

  const [open, setOpen] = useState(false);
  const [elementDialogModalInfo, setElementDialogModalInfo] = useState<SubElementType | null>(null);


  function handleClick(data:SubElementType | null) {
    setOpen(true);
    setElementDialogModalInfo(data);
  }

  return (
    <section className="mt-10">
    <h1 className="container mx-auto font-bold text-center uppercase">Periodic Table of Beer Styles</h1>
    <div className="container flex justify-center items-end flex-wrap gap-3 mx-auto myxl:w-full xl:w-[55%] md:w-[65%] sm:w-[80%]">
      {beerElements.map(el => {
        return  <div className="flex flex-col gap-3 whitespace-pre-line" key={el.id}>
        <BeerColumnTitle 
          title={el.title}
          titletextColor={el.titletextColor}          
        />
        
        {el.elements.map(subElement => {
          return <BeerElement key={subElement.number}
          onShowElementInfo={handleClick}
          subElement={subElement}
        />
        })}
        
        {elementDialogModalInfo &&
          <DialogModal
            isOpen={open}
            setOpen={setOpen}
            elementDialogModalInfo={elementDialogModalInfo}
          />
        }
      </div> 
      })}
    </div>
    <div className="container flex justify-center items-center flex-wrap gap-3 mx-auto mt-10 myxl:w-full xl:w-[55%] md:w-[100%] sm:w-[45%]">
    <div className="flex myxl:justify-center items-center flex-wrap gap-3 myxl:w-[49.5%] md:w-[100%] s:justify-center">
      <div className="flex justify-center items-center gap-3 myxl:w-[49%]">
        <div className={`flex items-center relative w-20 h-20 leading-none font-semibold bg-wheatBeer border-2 border-wheatBeerBorder cursor-default`}>
          <p className="absolute top-0 left-0 w-5 h-5 text-[12px] leading-[1.2rem] text-center text-white bg-black">1</p>
          <div className="absolute top-0 right-0 pt-[2px] pr-[2px] text-[9px]">
            <p>1.026-1.036</p>
            <p>1.006-1.009</p>
          </div>
          <p className={`w-full text-[14px] font-bold leading-[1rem] text-center`}>Berliner Weisse</p>
          <div className="absolute bottom-0 left-0 pb-[2px] pl-[2px] text-[9px]">
            <p>2.5-3.6%</p>
            <p>3-12</p>
          </div>
          <div className="absolute bottom-0 right-0 pb-[2px] pr-[2px] text-[9px]">
            <p>2-4</p>
          </div>
        </div>
        <div className="text-[12px] leading-[16px] font-bold">
          <p className="font-bold">1 - number</p>
          <p className="font-bold">1.026-1.036 - initialDensity</p>
          <p className="font-bold">1.006-1.00 - finalDensity</p>
          <p className="font-bold">Berliner Weisse - name</p>
          <p className="font-bold">2.5-3.6% - ABV</p>
          <p className="font-bold">3-12 - IBU</p>
          <p className="font-bold">2-4 - SRM rating</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center myxl:w-[49%] text-[12px] font-bold">
          <h3>SRM rating</h3>
          <div className="flex mt-2 [&>div+div]:ml-1">
            {srmRating.map(el => {
              return <SRM 
              key={el.number}
              number={el.number} 
              bgColor={el.bgColor}
            />
            })}
          </div>
      </div>
    </div>
    <div className="flex myxl:justify-start items-start flex-wrap gap-3 myxl:w-[49.5%] md:w-[100%] s:justify-center">
      {beerFooterElements.map(el => {
        return  <div className="flex flex-col gap-3" key={el.id}>
        {el.elements.map(subElement => {
          return <BeerElement
          key={subElement.number}
          onShowElementInfo={handleClick}
          subElement={subElement}
        />
        })}
      </div> 
      })}
    </div>
  </div>
  </section>
  );
}