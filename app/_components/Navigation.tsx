"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Your Account" },
];
export default function Navigation() {
  const currentPath = usePathname();

  return (
    <nav className="z-10 text-xl ">
      <ul className="flex gap-16 links-center">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-500": currentPath !== link.href,
                "text-accent-400": currentPath === link.href,
                "hover:text-accent-400 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
