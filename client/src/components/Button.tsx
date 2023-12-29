type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({
  type,
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-slate-100 uppercase py-1 px-3 rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
