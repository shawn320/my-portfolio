export default function Portrait(props) {
  const { src, alt, customeStyle } = props;
  return (
    <img
      className="flex bg-gray-200 rounded-full mb-4"
      style={{ width: "200px", height: "200px" }}
      src={src}
      alt={alt}
    />
  );
}
