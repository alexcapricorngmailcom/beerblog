
export default function BeerColumnTitle(props: propsBeerColumnTitleType) {
  return (
    <div className='w-20 h-10 flex items-center'>
      <p className={`font-bold text-center ${props.titletextColor}`}>{props.title}</p>
    </div>
  );
}

type propsBeerColumnTitleType = {
  title: string,
  titletextColor: string
}