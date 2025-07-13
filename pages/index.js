import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/image1.png', text: 'Fast Delivery', textAnim: 'animate__fadeInLeft', bgAnim: 'animate__fadeInRight' },
  { src: '/image1.png', text: 'Secure Storage', textAnim: 'animate__fadeInRight', bgAnim: 'animate__fadeInLeft' },
  { src: '/image1.png', text: 'Global Reach', textAnim: 'animate__fadeInDown', bgAnim: 'animate__fadeInUp' },
  { src: '/image1.png', text: '24/7 Support', textAnim: 'animate__fadeInUp', bgAnim: 'animate__fadeInDown' },
  { src: '/image1.png', text: 'Fleet Tracking', textAnim: 'animate__zoomIn', bgAnim: 'animate__zoomInDown' },
  { src: '/image1.png', text: 'Customs Help', textAnim: 'animate__rotateIn', bgAnim: 'animate__rotateInUpLeft' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-18 pb-20 px-6">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden transition duration-1000 ease-in-out">
          <div className="absolute w-full h-full z-0">
            <Image
              key={current}
              src={images[current].src}
              alt="hero"
              fill
              className={`object-cover opacity-40 animate__animated ${images[current].bgAnim}`}
              style={{ animationDuration: '1.5s', animationIterationCount: '1', animationFillMode: 'both' }}
            />
          </div>
          <div
            key={images[current].text}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 animate__animated ${images[current].textAnim}`}
            style={{ animationDuration: '1.5s', animationIterationCount: '1', animationFillMode: 'both' }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4 bg-white/60 px-4 py-2 rounded">
              {images[current].text}
            </h2>
            <Link
              href="/tender"
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Show More
            </Link>
          </div>
        </section>

        {/* Info Boxes Section */}
        <section className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto py-12 text-center">
          <div className="bg-white shadow-md p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-lg font-semibold">
            Open at 8:00am <br />Close at 9:00pm
          </div>
          <div className="bg-white shadow-md p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-lg font-semibold">
            From: Monday <br />To: Saturday
          </div>
          <div className="bg-white shadow-md p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-lg font-semibold">
            Welcome! Explore our{' '}
            <Link href="/tender" className="underline">
              Tenders
            </Link>
          </div>
          <div className="bg-white shadow-md p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-lg font-semibold">
            Call: +254 712 345 678
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Freight Transport</h3>
            <p className="text-gray-600">Efficient land, sea, and air freight services with global reach.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Warehousing</h3>
            <p className="text-gray-600">Secure and smart storage facilities to manage your inventory smoothly.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Customs Clearance</h3>
            <p className="text-gray-600">Speedy customs handling to avoid costly delays and complications.</p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Services</h2>
          <div className="space-y-10">
            {[
              { service: 'Freight Transport', description: 'We offer reliable land, sea, and air transport solutions for your cargo, both domestic and international.' },
              { service: 'Customs Clearance', description: 'Fast and efficient customs handling to ensure your shipments aren’t delayed at borders.' },
              { service: 'Warehousing', description: 'Secure, climate-controlled storage solutions with real-time inventory tracking.' },
              { service: 'Cold Chain Logistics', description: 'Specialized transportation for temperature-sensitive goods such as pharmaceuticals and perishables.' },
              { service: 'Last Mile Delivery', description: 'On-time delivery from our hubs to your doorstep, covering even remote locations.' },
              { service: 'Fleet Management', description: 'Real-time tracking and optimization of delivery vehicles for operational efficiency.' },
            ].map((item, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-2 gap-6 items-start transition duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-900 p-4 border rounded-md shadow-sm group-hover:scale-100 group-hover:text-[30px] group-hover:shadow-2xl group-hover:border-blue-400 group-hover:bg-orange transition duration-1000 ease-in-out">
                  {item.service}
                </h2>
                <p className="text-gray-700 p-4 border rounded-md group-hover:bg-orange-100 group-hover:shadow-lg group-hover:border-orange-300 transition duration-500 ease-in-out">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
