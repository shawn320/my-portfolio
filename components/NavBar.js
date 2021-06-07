import CustomButton from "./CustomButton";
import { FiSun } from "react-icons/fi";

export default function NavBar(props) {
  const { about, projects, contact } = props;
  return (
    <div className="w-full m-auto flex px-4 py-4 text-gray-100 text-opacity-90 shadow">
      <span className="flex justify-start items-center px-4 border-4 hover:border-gray-300 hover:text-gray-300 font-bold text-xl">
        SZ
      </span>
      <span className="flex w-full justify-end m-0 items-center">
        <CustomButton customStyles="nav-btn w-24 mx-6 py-4" lable={about} />
        <CustomButton customStyles="nav-btn w-24 mx-6 py-4" lable={projects} />
        <CustomButton customStyles="nav-btn w-24 mx-6 py-4" lable={contact} />
        <FiSun className="icon w-6 h-6 mx-4 -mt-2" />
      </span>
    </div>
  );
}
