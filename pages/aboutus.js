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
        {/* Image Slider Section */}
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

        {/* Mission Section with image1.png */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-12 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 gap-6">
            <Image
              src="/image1.png"
              width={600}
              height={400}
              alt="Extra Mission"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p>We ensure goods are moved efficiently and safely.</p>
            <p>We simplify the supply chain using modern tools.</p>
            <p>We build lasting trust with our clients globally.</p>
          </div>
        </section>

        {/* Vision Section with image1.png */}
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p>To be Africa’s leading logistics brand.</p>
            <p>To deliver innovative and smart logistics solutions.</p>
            <p>To empower supply chains with digital efficiency.</p>
            <p>To reduce delivery times and cost barriers.</p>
            <p>To offer unmatched customer experience globally.</p>
          </div>
          <div className="grid sm:grid-cols-1 gap-6">
            <Image
              src="/image1.png"
              width={600}
              height={400}
              alt="Extra Vision"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Testimonials */}
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
            <p className="text-xl italic">"{testimonials[currentTestimonial].comment}"</p>
            <p className="mt-4 font-semibold">- {testimonials[currentTestimonial].name}</p>
          </div>
        </section>

        {/* Team Section */}
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
                    <a
                      href="#"
                      className="text-blue-600 hover:scale-125 transition-transform"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="text-pink-500 hover:scale-125 transition-transform"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="text-sky-500 hover:scale-125 transition-transform"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-blue-700 hover:scale-125 transition-transform"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* our history */}


          <section className="bg-white py-16 pt-4 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our History</h2>
            <div className="space-y-10 border-l-4 border-blue-200 pl-6">
              <div>
                <h3 className="text-xl font-bold text-blue-700">2017</h3>
                <p className="text-gray-700">Zessco was founded in Nairobi with a vision to streamline logistics in Kenya through technology and dedication to service.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2018</h3>
                <p className="text-gray-700">Secured first major logistics contract and expanded operations to Mombasa and Kisumu.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2019</h3>
                <p className="text-gray-700">Launched a digital fleet tracking system, improving delivery efficiency and customer confidence.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2020</h3>
                <p className="text-gray-700">Adapted quickly to COVID-19 challenges by introducing contactless delivery and health-safe protocols.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2021</h3>
                <p className="text-gray-700">Opened a new logistics hub in Eldoret and doubled our vehicle fleet to meet growing demand.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2022</h3>
                <p className="text-gray-700">Partnered with regional firms to launch cross-border deliveries in East Africa.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2023</h3>
                <p className="text-gray-700">Introduced green logistics solutions, focusing on sustainability and eco-friendly transport options.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2024</h3>
                <p className="text-gray-700">Digitized tender processing and implemented AI-powered scheduling for optimized route planning.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-700">2025</h3>
                <p className="text-gray-700">Now serving all 47 counties of Kenya with plans to launch a pan-African logistics network by 2026.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-800 italic max-w-2xl mx-auto">
                “Looking back, we’re proud of how far we’ve come. Looking ahead, we’re excited to go even further with our clients, partners, and communities.”
              </p>
            </div>
          </section>

        </section>

      </main>
      <Footer />
    </>
  )
}
