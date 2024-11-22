import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" height="100" width="100" alt="Septel" />
      <span className="text-xl font-semibold text-primary-100">Septel</span>
    </Link>
  );
}

export default Logo;
