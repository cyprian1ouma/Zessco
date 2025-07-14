// File: pages/aboutus.js
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
  { name: 'John Mwangi', image: '/image1.png', comment: 'Excellent services, always on time!' },
  { name: 'Grace Wanjiku', image: '/image1.png', comment: 'Professional and dependable team!' },
  { name: 'Ali Yusuf', image: '/image1.png', comment: 'Zessco has simplified my logistics.' },
  { name: 'Linda Achieng', image: '/image1.png', comment: 'Great communication and support!' },
  { name: 'Peter Otieno', image: '/image1.png', comment: 'Fast, secure, and efficient.' },
  { name: 'Mercy Chebet', image: '/image1.png', comment: 'Would recommend Zessco to anyone.' }
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
      <main className="bg-gray-50 pt-18 pb-20 px-6">
        {/* Image Slider */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
          <div className="w-full h-[50vh] relative overflow-hidden">
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
        <section className="max-w-4xl mx-auto py-12 px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            Zessco International is Kenya&apos;s leading tender documentation and compliance consultancy. Based in Nairobi at Tumaini House (opposite Kencom), we specialize in helping businesses secure public and private sector tenders with precision, speed, and confidence.
          </p>
          <p className="text-lg text-gray-700">
            We bring together a unique team of experts — from engineers and auditors to legal professionals and procurement officers — all working under one roof to give you the highest chance of success. Whether you&apos;re just starting out or already a seasoned contractor, Zessco is your partner in growth and compliance.
          </p>
        </section>

        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-12 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 gap-6">
            <Image
              src="/image1.png"
              width={600}
              height={400}
              alt="Our Mission"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              To empower businesses across Kenya to win tenders, stay compliant, and grow sustainably — regardless of their size or stage.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To become Kenya&apos;s most trusted and results-driven tender application and compliance firm.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-6">
            <Image
              src="/image1.png"
              width={600}
              height={400}
              alt="Our Vision"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto py-12 px-6 bg-white rounded-lg shadow-sm mb-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">1. Tender Documentation</h3>
              <p className="text-gray-700">Preparation of high-quality, fully compliant tender documents tailored to each opportunity.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">2. Client Compliance Management</h3>
              <p className="text-gray-700">We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">3. Document Updating &amp; Secretarial Services</h3>
              <p className="text-gray-700">We handle company updates, renewals, and act as your outsourced corporate secretariat.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">4. Tender Winning Support</h3>
              <p className="text-gray-700">Beyond paperwork, we strategize with you to give your application the best possible winning chance.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">5. Company Transactions</h3>
              <p className="text-gray-700">We assist in buying, selling, and leasing companies — with or without past experience — legally and ethically.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">6. Regulatory Compliance Assistance</h3>
              <p className="text-gray-700">We ensure compliance with KRA, NCA, and all other relevant regulatory authorities.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12 mt-12 my-6">Customer Testimonials</h2>
          <section className="relative h-[60vh] text-white text-center flex items-center justify-center bg-black">
            <Image
              src={testimonials[currentTestimonial].image}
              layout="fill"
              objectFit="cover"
              alt="Customer testimonial"
              className="absolute inset-0 z-0 opacity-40"
            />
            <div className="z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl italic">
                &ldquo;{testimonials[currentTestimonial].comment}&rdquo;
              </p>
              <p className="mt-4 font-semibold">- {testimonials[currentTestimonial].name}</p>
            </div>
          </section>
        </div>

        {/* Team */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              'Wanjiku Njeri',
              'Otieno Makori',
              'Achieng Moraa',
              'Mutiso Kamau',
              'Chebet Kiptoo',
              'Omondi Baraka'
            ].map((name, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/image1.png"
                  width={400}
                  height={300}
                  alt={`Team member ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="p-4 bg-white text-center">
                  <h3 className="text-lg font-bold text-blue-900">{name}</h3>
                  <div className="flex justify-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" className="text-blue-600 hover:scale-125 transition-transform">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-pink-500 hover:scale-125 transition-transform">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-sky-500 hover:scale-125 transition-transform">
                      <FaXTwitter />
                    </a>
                    <a href="#" className="text-blue-700 hover:scale-125 transition-transform">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our History</h2>
          <div className="space-y-10 border-l-4 border-blue-200 pl-6">
            {[
              { year: '2017', desc: 'Zessco was founded in Nairobi with a vision to streamline logistics in Kenya through technology and dedication to service.' },
              { year: '2018', desc: 'Secured first major logistics contract and expanded operations to Mombasa and Kisumu.' },
              { year: '2019', desc: 'Launched a digital fleet tracking system, improving delivery efficiency and customer confidence.' },
              { year: '2020', desc: 'Adapted quickly to COVID-19 challenges by introducing contactless delivery and health-safe protocols.' },
              { year: '2021', desc: 'Opened a new logistics hub in Eldoret and doubled our vehicle fleet to meet growing demand.' },
              { year: '2022', desc: 'Partnered with regional firms to launch cross-border deliveries in East Africa.' },
              { year: '2023', desc: 'Introduced green logistics solutions, focusing on sustainability and eco-friendly transport options.' },
              { year: '2024', desc: 'Digitized tender processing and implemented AI-powered scheduling for optimized route planning.' },
              { year: '2025', desc: 'Now serving all 47 counties of Kenya with plans to launch a pan-African logistics network by 2026.' }
            ].map((event, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-blue-700">{event.year}</h3>
                <p className="text-gray-700">{event.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-800 italic max-w-2xl mx-auto">
              &ldquo;Looking back, we&apos;re proud of how far we&apos;ve come. Looking ahead, we&apos;re excited to go even further with our clients, partners, and communities.&rdquo;
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
