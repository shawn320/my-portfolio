export default function CustomButton(props) {
  const { customStyles, lable } = props;
  return (
    <button
      className={`${customStyles} w-24 mx-6 py-4 rounded-sm focus:outline-none relative font-bold`}
    >
      {lable}
    </button>
  );
}
