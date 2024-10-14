
export default function BeerColumnTitle(props: propsBeerColumnTitleType) {
  return (
    <div className='w-20 h-20 flex items-center'>
      <p className={`font-bold text-center text-${props.titleColor}`}>{props.title}</p>
    </div>
  );
}

type propsBeerColumnTitleType = {
  title: string,
  titleColor: string,
}