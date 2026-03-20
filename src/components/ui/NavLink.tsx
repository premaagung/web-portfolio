import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}