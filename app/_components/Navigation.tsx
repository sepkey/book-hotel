import Link from "next/link";

const navigations = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Your Account" },
];
export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navigations.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="hover:text-accent-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
