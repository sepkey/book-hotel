import Link from "next/link";

const navigations = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Your Account" },
  { href: "/rooms", label: "Rooms" },
];
export default function Navigation() {
  return (
    <ul>
      {navigations.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
