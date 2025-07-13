import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image"; // ✅ Import Image component

export default function Navbar() {
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "bg-orange-500 text-white px-3 py-2 rounded"
      : "hover:text-orange-400 transition px-3 py-2";

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/image1.png"
            alt="Zessco Logo"
            width={40}
            height={40}
            className="rounded-md"
            priority // Loads logo early for better performance
          />
          <span className="text-xl font-bold text-white">Zessco Logistics</span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-2">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/tender" className={linkClass("/tender")}>Tender</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
