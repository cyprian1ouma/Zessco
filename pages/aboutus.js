import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const imageGallery = [
  '/image1.png',
  '/image1.png',
  '/image1.png',
  '/image1.png',
  '/image1.png',
  '/image1.png',
];

const testimonials = [
  { 
    name: 'John Mwangi', 
    image: '/image1.png', 
    comment: 'Excellent services, always on time!' 
  },
  { 
    name: 'Grace Wanjiku', 
    image: '/image1.png', 
    comment: 'Professional and dependable team!' 
  },
  { 
    name: 'Ali Yusuf', 
    image: '/image1.png', 
    comment: 'Zessco has simplified my logistics.' 
  },
  { 
    name: 'Linda Achieng', 
    image: '/image1.png', 
    comment: 'Great communication and support!' 
  },
  { 
    name: 'Peter Otieno', 
    image: '/image1.png', 
    comment: 'Fast, secure, and efficient.' 
  },
  { 
    name: 'Mercy Chebet', 
    image: '/image1.png', 
    comment: 'Would recommend Zessco to anyone.' 
  }
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageGallery.length);
    }, 5000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(imageTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-18 pb-20 px-4 md:px-6">
        {/* Image Slider */}
        <section className="text-center py-8 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Us</h1>
          <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
            <Image
              src={imageGallery[currentImage]}
              alt="About slide"
              layout="fill"
              objectFit="cover"
              className="transition duration-1000 ease-in-out"
            />
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 md:mb-6">Who We Are</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Zessco International is Kenya&apos;s leading tender documentation and compliance consultancy. Based in Nairobi at Tumaini House (opposite Kencom), we specialize in helping businesses secure public and private sector tenders with precision, speed, and confidence.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            We bring together a unique team of experts — from engineers and auditors to legal professionals and procurement officers — all working under one roof to give you the highest chance of success. Whether you&apos;re just starting out or already a seasoned contractor, Zessco is your partner in growth and compliance.
          </p>
        </section>

        {/* Mission & Vision - Redesigned without images */}
        <section className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  To empower businesses across Kenya to win tenders, stay compliant, and grow sustainably regardless of their size or stage.
                </p>
                <div className="mt-8 flex items-center text-blue-600">
                  <span className="text-sm font-semibold">Driving success, together</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">Our Vision</h2>
                <div className="w-20 h-1 bg-amber-600 mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  To become Kenya&apos;s most trusted and results-driven tender application and compliance firm.
                </p>
                <div className="mt-8 flex items-center text-amber-600">
                  <span className="text-sm font-semibold">Leading with integrity</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Core Values Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">Guided by Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { label: 'Integrity', color: 'blue' },
                { label: 'Excellence', color: 'amber' },
                { label: 'Innovation', color: 'green' },
                { label: 'Client-Centric', color: 'purple' }
              ].map((value, index) => (
                <span 
                  key={index}
                  className={`px-6 py-3 bg-${value.color}-50 text-${value.color}-700 rounded-full font-medium shadow-sm border border-${value.color}-200`}
                >
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6 bg-white rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">1. Tender Documentation</h3>
              <p className="text-gray-700">Preparation of high-quality, fully compliant tender documents tailored to each opportunity.</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">2. Client Compliance Management</h3>
              <p className="text-gray-700">We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements.</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">3. Document Updating &amp; Secretarial Services</h3>
              <p className="text-gray-700">We handle company updates, renewals, and act as your outsourced corporate secretariat.</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">4. Tender Winning Support</h3>
              <p className="text-gray-700">Beyond paperwork, we strategize with you to give your application the best possible winning chance.</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">5. Company Transactions</h3>
              <p className="text-gray-700">We assist in buying, selling, and leasing companies  with or without past experience legally and ethically.</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">6. Regulatory Compliance Assistance</h3>
              <p className="text-gray-700">We ensure compliance with KRA, NCA, and all other relevant regulatory authorities.</p>
            </div>
          </div>
        </section>

        {/* Testimonials - Commented out as in original */}
        {/* <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12 mt-8 md:mt-12 my-4 md:my-6">Customer Testimonials</h2>
          <section className="relative h-[50vh] md:h-[60vh] text-white text-center flex items-center justify-center bg-black">
            <Image
              src={testimonials[currentTestimonial].image}
              layout="fill"
              objectFit="cover"
              alt="Customer testimonial"
              className="absolute inset-0 z-0 opacity-40"
            />
            <div className="z-10 max-w-3xl px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg md:text-xl italic">
                &ldquo;{testimonials[currentTestimonial].comment}&rdquo;
              </p>
              <p className="mt-4 font-semibold">- {testimonials[currentTestimonial].name}</p>
            </div>
          </section>
        </div> */}

        {/* Team */}
        <section className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { name: 'FELIX ADEK', position: 'DIRECTOR' },
              { name: 'FELIX OBUNG', position: 'HEAD OF PROCUREMENT' },
              { name: 'BRIAN OKOTH', position: 'PROCUREMENT' },
              { name: 'JOHN OLIMA', position: 'PROCUREMENT' },
              { name: 'LAURA JUMA', position: 'SECRETARY' },
              { name: 'KEVIN OCHIENG', position: 'PROCUREMENT' },
              { name: 'JUSTUS MULWA', position: 'GRAPHIC DESIGNER' },
            ].map((member, index) => (
              <div
                key={`team-member-${index}`}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/image1.png"
                  width={400}
                  height={300}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="p-4 bg-white text-center">
                <h3 className="text-lg font-bold text-blue-900 opacity-100 hover:opacity-100 transition-opacity duration-500">
                  {member.name}
                </h3>
                  <p className="text-sm text-orange-600 hover:text-lg opacity-100 transition-opacity duration-500">{member.position}</p>
                  <div className="flex justify-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" aria-label={`${member.name} Facebook`} className="text-blue-600 hover:scale-125 transition-transform">
                      <FaFacebook />
                    </a>
                    <a href="#" aria-label={`${member.name} Instagram`} className="text-pink-500 hover:scale-125 transition-transform">
                      <FaInstagram />
                    </a>
                    <a href="#" aria-label={`${member.name} Twitter`} className="text-sky-500 hover:scale-125 transition-transform">
                      <FaXTwitter />
                    </a>
                    <a href="#" aria-label={`${member.name} LinkedIn`} className="text-blue-700 hover:scale-125 transition-transform">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="bg-white py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8 md:mb-12">Our History</h2>
          <div className="space-y-6 md:space-y-8 border-l-4 border-blue-200 pl-4 md:pl-6">
              <p className="text-gray-700">
                Founded in <strong>2020</strong> and officially incorporated on <strong>June 7th</strong> of the same year, <strong>Zessco East Africa Limited</strong> was established with a vision to bridge the gap in quality service delivery across Kenya’s construction and supply sectors. Driven by youthful ambition and professional integrity, the company began as a small team of skilled individuals with diverse expertise in civil engineering, logistics, procurement, and compliance.
              </p>
              <p className="text-gray-700">
                From our modest beginnings at <strong>Tumaini House in Nairobi</strong>, we have grown into a trusted partner in construction, general supplies, and equipment hire, serving both government and private sector clients. Our journey has been marked by a strong commitment to <strong>efficiency, innovation, and excellence</strong>  qualities that continue to shape our legacy today.
              </p>
            </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-base md:text-sm text-gray-800 italic max-w-2xl mx-auto">
                Looking back, we&apos;re proud of how far we&apos;ve come. Looking ahead, we&apos;re excited to go even further with our clients, partners, and communities
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}