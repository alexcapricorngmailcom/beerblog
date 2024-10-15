
export default function BeerColumnTitle(props: propsBeerColumnTitleType) {
  return (
    <div className='w-20 h-10 flex items-center'>
      <p className={`w-full font-bold text-center leading-[1.2rem] ${props.titletextColor} cursor-default`}>{props.title}</p>
    </div>
  );
}

type propsBeerColumnTitleType = {
  title: string,
  titletextColor: string
}