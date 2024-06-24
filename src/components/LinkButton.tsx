type LinkButtonProps = {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const LinkButton = ({
  className,
  href,
  children,
  onClick,
}: LinkButtonProps) => {
  if (href !== undefined) {
    return (
      <div className="mt-12 flex justify-center">
        <a
          href={href}
          onClick={onClick}
          className={
            className +
            " rounded border bg-gray-600 p-2 text-white hover:bg-gray-500"
          }
        >
          {children}
        </a>
      </div>
    );
  } else {
    return (
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={onClick}
          className={
            className +
            " rounded border bg-gray-600 p-2 text-white hover:bg-gray-500"
          }
        >
          {children}
        </button>
      </div>
    );
  }
};

export default LinkButton;
