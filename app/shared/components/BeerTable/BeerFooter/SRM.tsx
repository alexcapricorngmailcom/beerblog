export default function SRM(props: PropsSrmType) {
  return (
    <div className="flex flex-col">
      <div className={`w-6 h-6 ${props.bgColor}`}></div>
      <h5 className="w-6 h-6 text-center">{props.number}</h5>
    </div>
  );
}

type PropsSrmType = {
  number: string,
  bgColor: string,
}