interface CategoryButtonProps {
  onClickFunction: () => void;
  buttonText: string;
  additionalBorderClass?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  onClickFunction,
  buttonText,
  additionalBorderClass = "",
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`${additionalBorderClass} block text-2xl p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 curser-pointer mx-auto w-64`}
    >
      {buttonText}
    </button>
  );
};

export default CategoryButton;
