import { useState } from "react";
import CustomButton from "./CustomButton";

export default function NavBar(props) {
  const { about, projects, contact } = props;
  const [style, setStyle] = useState(
    "w-32 border-b-2 border-transparent hover:border-indigo-300"
  );
  return (
    <div className="w-full m-auto flex px-4 py-2">
      <span className="flex justify-start items-center border-2 px-4 hover:border-indigo-300 font-bold text-xl text-primary text-opacity-75">
        SZ
      </span>
      <span className="flex w-full justify-end">
        <CustomButton customStyles={style} lable={about} />
        <CustomButton customStyles={style} lable={projects} />
        <CustomButton customStyles={style} lable={contact} />
      </span>
    </div>
  );
}
