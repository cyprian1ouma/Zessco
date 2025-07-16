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
    <footer className="bg-blue-900 text-white text-center md:text-left pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Row: Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="px-2 sm:px-0">
            <h6 className="uppercase font-bold mb-4 text-lg">Zessco International Consultancy</h6>
            <p className="text-sm sm:text-base">
              Organizing your Tender Application with trust and simplicity. Experience
              seamless freight and delivery solutions.
              <span className='uppercase font-bold text-orange-500 block mt-2 text-sm sm:text-base'> Simple. Complete and Professional.</span>
            </p>
          </div>

          {/* Products */}
          <div className="px-2 sm:px-0">
            <h6 className="uppercase font-bold mb-4 text-lg">Products</h6>
            <ul className="space-y-2">
              <li><a className="text-white hover:underline text-sm sm:text-base" href="#">Tendering</a></li>
              <li><a className="text-white hover:underline text-sm sm:text-base" href="#">Online Services</a></li>
              <li><a className="text-white hover:underline text-sm sm:text-base" href="#">CPA Audit</a></li>
              <li><a className="text-white hover:underline text-sm sm:text-base" href="#">Graphics</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="px-2 sm:px-0">
            <h6 className="uppercase font-bold mb-4 text-lg">Useful Links</h6>
            <ul className="space-y-2">
              <li><Link className="text-white hover:underline text-sm sm:text-base" href="/">Home</Link></li>
              <li><Link className="text-white hover:underline text-sm sm:text-base" href="/tender">Tender</Link></li>
              <li><Link className="text-white hover:underline text-sm sm:text-base" href="/services">Services</Link></li>
              <li><Link className="text-white hover:underline text-sm sm:text-base" href="/aboutus">About</Link></li>
              <li><Link className="text-white hover:underline text-sm sm:text-base" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="px-2 sm:px-0">
            <h6 className="uppercase font-bold mb-4 text-lg">Contact</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start text-white">
                <FaHome className="text-lg mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm sm:text-base">Nairobi, Kenya</span>
              </li>

              <li className="flex items-start text-white">
                <FaChair className="text-lg mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm sm:text-base">Tumaini House, Opposite Kencom</span>
              </li>
              
              <li className="flex items-start text-white">
                <FaEnvelope className="text-lg mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm sm:text-base">info@zesscointernational.com</span>
              </li>
              <li className="flex items-start text-white">
                <FaPhone className="text-lg mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm sm:text-base">+254 724 210375</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-400 mb-4" />

        {/* Bottom Row: Copyright + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="order-2 md:order-1 text-sm sm:text-base">
            © {new Date().getFullYear()} Zessco International Consultancy. All rights reserved.
          </div>

          <div className="order-1 md:order-2 flex gap-3 text-white text-lg mb-4 md:mb-0">
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
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200 z-50 group flex items-center"
        aria-label="Back to top">
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  )
}