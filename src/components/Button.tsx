type ButtonProps = {
  onClick?: React.MouseEventHandler;
  className?: string;
};

const Button = ({ onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " rounded border border-gray-500 bg-gray-400 px-2 py-1 font-medium text-gray-900 hover:bg-gray-300"
      }
      type="submit"
    >
      Speichern
    </button>
  );
};

export default Button;
