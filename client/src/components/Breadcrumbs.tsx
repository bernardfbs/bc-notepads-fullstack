import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

type BreadcrumbsProps = {
  links: {
    href: string;
    label: React.ReactNode;
  }[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <div className="flex gap-1 items-center p-1">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-1">
          <Link
            to={link.href}
            className="text-blue-400 hover:text-blue-700 hover:underline"
          >
            {link.label}
          </Link>
          {index < links.length - 1 && <MdArrowRight className="text-lg" />}
        </div>
      ))}
    </div>
  );
}
