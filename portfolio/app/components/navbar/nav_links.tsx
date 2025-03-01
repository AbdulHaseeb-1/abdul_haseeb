import Link from "next/link";

import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-3 py-0  text-sm font-medium
        transition-all duration-200
        ${
          isActive
            ? "border-b-2 border-amber-400"
            : "text-gray-300 hover:text-white hover:border-b-2 hover:border-amber-400 "
        }
      `}
    >
      {children}
    </Link>
  );
};

export const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        block px-3 py-2 text-base font-medium
        transition-all duration-200
        ${
          isActive
          ? "pl-3 border-b-2 w-20 border-amber-400"
          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-amber-400 "
    }
      `}
    >
      {children}
    </Link>
  );
};
