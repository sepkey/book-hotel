"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignoutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const currentPath = usePathname();

  return (
    <nav className="border-r border-primary-900 overflow-y-auto  p-4">
      <ul className="flex flex-col gap-2 text-lg h-[70vh] ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={classNames({
                "bg-accent-100 text-primary-700": currentPath === link.href,
                "py-3 px-5 hover:bg-accent-100 hover:text-primary-700 transition-colors flex items-center gap-4 font-semibold text-primary-600":
                  true,
              })}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
