import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const tenders = [
    {
      title: "Tender Documentation",
      description: "Preparation of high-quality, fully compliant tender documents tailored to each opportunity."
    },
    {
      title: "Client Compliance Management",
      description: "We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements."
    },
    {
      title: "Document Updating & Secretarial Services",
      description: "We handle company updates, renewals, and act as your outsourced corporate secretariat."
    },
    {
      title: "Tender Winning Support",
      description: "Beyond paperwork, we strategize with you to give your application the best possible winning chance."
    },
    {
      title: "Company Transactions",
      description: "We assist in buying, selling, and leasing companies — with or without past experience — legally and ethically."
    },
    {
      title: "Regulatory Compliance Assistance",
      description: "We ensure compliance with KRA, NCA, and all other relevant regulatory authorities."
    },
    {
      title: "Company Profile Preparation",
      description: "We prepare compelling, professional company profiles that give you a competitive edge in tendering."
    }
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
              Zessco Interbnation provides world-class Tender Application solutions across 47 counties in Kenya. With a focus
              on timely delivery, transparency, and innovation, we ensure your Simple. Complete. Professional work done.
              Our commitment to excellence and client satisfaction drives everything we do.
            </p>

            <div className="space-y-2 text-sm">
              <p><strong>Company:</strong> Zessco International</p>
              <p><strong>Avenue:</strong> Moi Avenue</p>
              <p><strong>Bulding:</strong> Tumaini House, Opposite Kencom</p>
              <p><strong>Country:</strong> Nairobi- Kenya</p>
              <p><strong>Postal Code:</strong> P.O. Box 6487-00200</p> 
              <p><strong>Phone:</strong> +254 96977092</p>
              <p><strong>Email:</strong> info@zesscointernational.com</p>
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
                    <option key={index} value={tender.title}>{tender.title}</option>
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
        <div className="relative text-center mt-16 h-[40vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 backdrop-blur-sm z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-800 mb-4">We Offer</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-800 font-medium animate-bounce-in">
                <span className="block font-bold text-blue-700 text-2">
                  {tenders[currentTender].title}
                </span>
                <span className="block text-xl text-gray-600 mt-1">
                  {tenders[currentTender].description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}