import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" height="60" width="60" alt="Septel" />
      <span className="text-xl font-semibold text-primary-600">Septel</span>
    </Link>
  );
}

export default Logo;
