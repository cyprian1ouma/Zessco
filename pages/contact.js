import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const tenders = [
    "Freight and Cargo Transport",
    "Cold Chain Services",
    "Customs Clearance",
    "Last Mile Delivery",
    "Inventory Management",
    "Warehousing Solutions",
  ];

  const [currentTender, setCurrentTender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTender((prev) => (prev + 1) % tenders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-16 pb-20 px-6">
        {/* Map Section */}
        <div className="w-full h-[50vh]">
          <iframe
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?q=moi%20avenue%20nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            title="Zessco Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-4 pt-5">
          {/* About */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Zessco Logistics provides world-class logistics solutions across Africa. With a focus
              on timely delivery, transparency, and innovation, we ensure your cargo arrives safely and on time.
              Our commitment to excellence and client satisfaction drives everything we do.
            </p>

            <div className="space-y-2 text-sm">
              <p><strong>Address:</strong> Moi Avenue, Nairobi, Kenya</p>
              <p><strong>Email:</strong> info@zessco.com</p>
              <p><strong>Phone:</strong> +254 712 345 678</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition text-xl"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition text-xl"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-blue-800 hover:scale-110 transition text-xl"><FaLinkedinIn /></a>
              <a href="#" aria-label="Twitter" className="text-black hover:scale-110 transition text-xl"><FaXTwitter /></a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch with Us</h2>
            <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="border p-3 rounded w-full" />
                <input type="email" name="email" placeholder="Your Email" required className="border p-3 rounded w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="phone" placeholder="Phone Number" className="border p-3 rounded w-full" />
                <select name="service" className="border p-3 rounded w-full">
                  {tenders.map((tender, index) => (
                    <option key={index} value={tender}>{tender}</option>
                  ))}
                </select>
              </div>
              <textarea name="message" placeholder="Your Message" rows="4" className="border p-3 rounded w-full"></textarea>
              <button
                type="submit"
                className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Animated Tenders */}
        <div className="text-center mt-16 h-[25vh] flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">We Offer:</h3>
          <p className="text-lg text-gray-800 font-medium animate-pulse">
            {tenders[currentTender]}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
