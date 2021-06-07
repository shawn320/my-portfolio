import Image from "next/image";

export default function Portrait() {
  return (
    <div
      style={{ width: "350px", height: "350px" }}
      className="flex w-full rounded-full items-center mb-4 opacity-80 border-4 border-gray-100 shadow-lg"
    >
      <Image
        className="rounded-full"
        src="/me.jpg"
        alt="me"
        width="350"
        height="350"
      />
    </div>
  );
}
