import CustomButton from "./CustomButton";

export default function NavBar(props) {
  const { about, projects, contact } = props;
  return (
    <div className="w-full m-auto flex px-4 py-2 text-gray-100 text-opacity-90">
      <span className="flex justify-start items-center px-4 border-4 hover:border-gray-300 font-bold text-xl">
        SZ
      </span>
      <span className="flex w-full justify-end">
        <CustomButton customStyles="nav-btn" lable={about} />
        <CustomButton customStyles="nav-btn" lable={projects} />
        <CustomButton customStyles="nav-btn" lable={contact} />
      </span>
    </div>
  );
}
