import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    router.pathname === path
      ? "bg-orange-500 text-white px-3 py-2 rounded block"
      : "hover:text-orange-400 transition px-3 py-2 block";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-blue-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image
            src="/image1.png"
            alt="Zessco Logo"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
          <span className="text-lg font-bold text-white">Zessco International Consultancy</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-2">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/tender" className={linkClass("/tender")}>Tender</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
          <Link href="/" className={linkClass("/")} onClick={closeMenu}>Home</Link>
          <Link href="/tender" className={linkClass("/tender")} onClick={closeMenu}>Tender</Link>
          <Link href="/services" className={linkClass("/services")} onClick={closeMenu}>Services</Link>
          <Link href="/aboutus" className={linkClass("/aboutus")} onClick={closeMenu}>About Us</Link>
          <Link href="/contact" className={linkClass("/contact")} onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
