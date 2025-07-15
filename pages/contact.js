import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const tenders = [
    {
      title: 'Tender Documentation',
      description: 'Preparation of high-quality, fully compliant tender documents tailored to each opportunity.',
    },
    {
      title: 'Client Compliance Management',
      description: 'We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements.',
    },
    {
      title: 'Document Updating & Secretarial Services',
      description: 'We handle company updates, renewals, and act as your outsourced corporate secretariat.',
    },
    {
      title: 'Tender Winning Support',
      description: 'Beyond paperwork, we strategize with you to give your application the best possible winning chance.',
    },
    {
      title: 'Company Transactions',
      description: 'We assist in buying, selling, and leasing companies — with or without past experience — legally and ethically.',
    },
    {
      title: 'Regulatory Compliance Assistance',
      description: 'We ensure compliance with KRA, NCA, and all other relevant regulatory authorities.',
    },
    {
      title: 'Company Profile Preparation',
      description: 'We prepare compelling, professional company profiles that give you a competitive edge in tendering.',
    },
  ];

  const [currentTender, setCurrentTender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTender((prev) => (prev + 1) % tenders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tenders.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-12 md:pt-16 pb-12 md:pb-20 px-4 sm:px-6">
        {/* Map Section */}
        <div className="w-full h-[40vh] md:h-[50vh]">
          <iframe
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?q=moi%20avenue%20nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            title="Zessco Location"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mt-6 md:mt-8 pt-4 md:pt-5">
          {/* About */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">About Us</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 md:mb-6">
              Zessco International provides world-class Tender Application solutions across 47 counties in Kenya. With a focus
              on timely delivery, transparency, and innovation, we ensure your Simple. Complete. Professional work done.
              Our commitment to excellence and client satisfaction drives everything we do.
            </p>

            <div className="space-y-1 md:space-y-2 text-xs sm:text-sm">
              <p><strong>Company:</strong> Zessco International</p>
              <p><strong>Avenue:</strong> Moi Avenue</p>
              <p><strong>Building:</strong> Tumaini House, Opposite Kencom</p>
              <p><strong>Country:</strong> Nairobi- Kenya</p>
              <p><strong>Postal Code:</strong> P.O. Box 6487-00200</p> 
              <p><strong>Phone:</strong>+254 724 210375</p>
              <p><strong>Email:</strong> info@zesscointernational.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition text-lg md:text-xl"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition text-lg md:text-xl"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-blue-800 hover:scale-110 transition text-lg md:text-xl"><FaLinkedinIn /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-black hover:scale-110 transition text-lg md:text-xl"><FaXTwitter /></a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Get in Touch with Us</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm md:shadow-md space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="border p-2 sm:p-3 rounded w-full text-sm sm:text-base" />
                <input type="email" name="email" placeholder="Your Email" required className="border p-2 sm:p-3 rounded w-full text-sm sm:text-base" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input type="text" name="phone" placeholder="Phone Number" className="border p-2 sm:p-3 rounded w-full text-sm sm:text-base" />
                <select name="service" className="border p-2 sm:p-3 rounded w-full text-sm sm:text-base">
                  {tenders.map((tender) => (
                    <option key={tender.title} value={tender.title}>{tender.title}</option>
                  ))}
                </select>
              </div>
              <textarea name="message" placeholder="Your Message" rows="4" className="border p-2 sm:p-3 rounded w-full text-sm sm:text-base" />
              <button
                type="submit"
                className="bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-blue-800 transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Animated Tenders */}
        <div className="relative text-center mt-12 md:mt-16 h-[30vh] sm:h-[40vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 backdrop-blur-sm z-0" />
          
          <div className="relative z-10 px-4">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">We Offer</h3>
            <div className="max-w-4xl mx-auto">
              <div className="text-base sm:text-lg text-gray-800 font-medium">
                <span className="block font-bold text-blue-700 text-xl sm:text-2xl">
                  {tenders[currentTender].title}
                </span>
                <span className="block text-sm sm:text-xl text-gray-600 mt-1">
                  {tenders[currentTender].description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}