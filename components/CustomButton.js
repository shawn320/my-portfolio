export default function CustomButton(props) {
  const { customStyles, lable } = props;
  return (
    <button
      className={`${customStyles} px-6 py-4 rounded-sm focus:outline-none`}
    >
      {lable}
    </button>
  );
}
