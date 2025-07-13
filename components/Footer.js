import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center text-md-start pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Row: Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h6 className="uppercase font-bold mb-4">Zessco Logistics</h6>
            <p>
              Organizing your logistics with trust and simplicity. Experience
              seamless freight, warehousing, and delivery solutions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-bold mb-4">Products</h6>
            <ul className="space-y-2">
              <li><a className="text-white hover:underline" href="#">Freight Services</a></li>
              <li><a className="text-white hover:underline" href="#">Smart Tracking</a></li>
              <li><a className="text-white hover:underline" href="#">Cold Chain</a></li>
              <li><a className="text-white hover:underline" href="#">Fleet Tools</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-bold mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li><Link className="text-white hover:underline" href="/">Home</Link></li>
              <li><Link className="text-white hover:underline" href="/tender">Tender</Link></li>
              <li><Link className="text-white hover:underline" href="/services">Services</Link></li>
              <li><Link className="text-white hover:underline" href="/aboutus">About</Link></li>
              <li><Link className="text-white hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="uppercase font-bold mb-4">Contact</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-white">
                <FaHome className="text-lg" />
                <span className="ml-2">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center text-white">
                <FaEnvelope className="text-lg" />
                <span className="ml-2">info@zessco.com</span>
              </li>
              <li className="flex items-center text-white">
                <FaPhone className="text-lg" />
                <span className="ml-2">+254 712 345 678</span>
              </li>
              <li className="flex items-center text-white">
                <FaPrint className="text-lg" />
                <span className="ml-2">+254 722 345 679</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-400 mb-4" />

        {/* Bottom Row: Copyright + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            © {new Date().getFullYear()} Zessco Logistics. All rights reserved.
          </div>

          <div className="flex gap-3 text-white text-lg">
            <a href="#" className="hover:scale-125 hover:text-blue-400 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:scale-125 hover:text-blue-300 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:scale-125 hover:text-red-400 transition duration-300">
              <FaGoogle />
            </a>
            <a href="#" className="hover:scale-125 hover:text-pink-400 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
