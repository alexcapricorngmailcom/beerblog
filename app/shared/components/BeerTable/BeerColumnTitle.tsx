
export default function BeerColumnTitle(props: PropsBeerColumnTitleType) {
  return (
    <div className='w-20 h-10 flex items-center'>
      <h2 className={`w-full font-bold text-center leading-[1.2rem] ${props.titletextColor} cursor-default`}>{props.title}</h2>
    </div>
  );
}

type PropsBeerColumnTitleType = {
  title: string,
  titletextColor: string
}