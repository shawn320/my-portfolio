import CustomButton from "./CustomButton";

export default function NavBar(props) {
  const { about, projects, contact } = props;
  return (
    <div className="w-full m-auto flex px-4 py-4 text-gray-100 text-opacity-90">
      <span className="icon flex justify-start items-center px-4 border-4 hover:border-gray-300 font-bold text-xl">
        SZ
      </span>
      <span className="flex w-full justify-end">
        <CustomButton customStyles="nav-btn w-24 mx-6" lable={about} />
        <div className="border-l border-gray-100" />
        <CustomButton customStyles="nav-btn w-24 mx-6 py-4" lable={projects} />
        <div className="border-l border-gray-100" />
        <CustomButton customStyles="nav-btn w-24 mx-6 py-4" lable={contact} />
      </span>
    </div>
  );
}
