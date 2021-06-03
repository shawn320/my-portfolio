import Image from "next/image";

export default function Portrait() {
  return (
    <Image
      className="flex rounded-full mb-4 opacity-80"
      src="/me.jpg"
      alt="me"
      width="400"
      height="400"
    />
  );
}
