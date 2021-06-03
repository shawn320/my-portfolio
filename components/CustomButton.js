export default function CustomButton(props) {
  const { customStyles, lable } = props;
  return (
    <button
      className={`${customStyles} rounded-sm focus:outline-none relative`}
    >
      {lable}
    </button>
  );
}
