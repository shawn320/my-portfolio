export default function Intro(props) {
  const { line1, line2, line3 } = props;
  return (
    <div className="flex-col w-full font-serif text-white">
      <h1 className="py-2 text-4xl">{line1}</h1>
      <h2 className="py-2 text-2xl">{line2}</h2>
      <h3 className="py-2">{line3}</h3>
    </div>
  );
}
