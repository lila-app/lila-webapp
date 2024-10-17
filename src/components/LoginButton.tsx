interface LoginButtonProps {
  onClickFunction: () => void;
  buttonText: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClickFunction,
  buttonText,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className="block text-2xl p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 curser-pointer mx-auto w-64"
    >
      {buttonText}
    </button>
  );
};

export default LoginButton;
