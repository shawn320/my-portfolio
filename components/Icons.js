import { FaGithub, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex w-full px-8 py-4 text-gray-300 items-center ">
      <FaGithub className="icon w-6 h-6 mx-4" />
      <FaFacebookSquare className="icon w-6 h-6 mx-4" />
      <FaEnvelope className="icon w-6 h-6 mx-4" />
    </div>
  );
}
