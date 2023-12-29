import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export function LinkButton({ children, to, className = "" }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`bg-amber-500 hover:bg-amber-700 text-slate-100 uppercase py-1 px-3 rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}
