import Link from 'next/link';
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaChair,
  FaArrowUp,
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-900 text-white text-center text-md-start pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Row: Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h6 className="uppercase font-bold mb-4">Zessco Logistics</h6>
            <p>
              Organizing your Tender Application with trust and simplicity. Experience
              seamless freigh and delivery solutions.
              <span className='uppercase font-bold text-orange-500'> Simple. Complete. Professional.</span>
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
                <FaChair className="text-lg" />
                <span className="ml-2">Tumaini House, Opposite Kencom</span>
              </li>
              
              <li className="flex items-center text-white">
                <FaEnvelope className="text-lg" />
                <span className="ml-2">Email: info@zesscointernational.com</span>
              </li>
              <li className="flex items-center text-white">
                <FaPhone className="text-lg" />
                <span className="ml-2">Phone: +254796977092</span>
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
            <a href="#" className="hover:scale-125 hover:text-green-400 transition duration-300">
              <FaWhatsapp />
            </a>
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

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-20000 z-50 group flex items-center"
        aria-label="Back to top">
        <FaArrowUp className="text-xl" />
      </button>

    </footer>
  )
}