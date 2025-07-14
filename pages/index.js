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

        {/* Info Boxes Section - Kept as is */}
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

        {/* New Tender Hero Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Win That Tender with Confidence
          </h1>
          <h2 className="text-2xl text-blue-800 mb-8">
            The #1 Tender Documentation Experts in Kenya
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Over 1,000 successful clients. Our team of engineers, auditors, advocates, and technical experts prepares winning tenders — even under tight timelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tender" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
              Start My Tender Now
            </Link>
            <Link href="/eligibility" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
              Get a Free Eligibility Check
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Why Choose Zessco International?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "🚀 We Deliver Under Pressure – Quality documentation even in 48 hours",
                "👨🏫 Experts Under One Roof – Engineers, advocates, auditors, procurement pros",
                "📦 Complete Documentation Package – Technical, legal, financial, formatting",
                "📊 After-Submission Support – KRA compliance, tender alerts, feedback",
                "🤝 We Guide First-Timers – You don't need to be ready. We prepare you."
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto text-center italic">
              <p className="text-xl">"Zessco made the process easy — and I won my first tender."</p>
              <p className="mt-2 font-semibold">– Jane M., Kisii</p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our Tender Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "✅ Tender Documentation",
              "🛠️ Technical Input (Engineering/Specs)",
              "⚖️ Legal Review & Compliance (Advocates)",
              "📊 Financial Audits & Statements (CPA Auditors)",
              "📄 Formatting to Tender Standards",
              "🚚 Tender Submission & Delivery Support",
              "🔁 Aftercare: KRA, Trend Updates, Feedback"
            ].map((service, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-4 hover:bg-blue-50 transition">
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/consultation" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
              Book a Free Tender Readiness Review
            </Link>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              New or Experienced — We've Got You
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "First-Time Applicants",
                  desc: "We help you qualify & guide you step-by-step"
                },
                {
                  title: "Growing SMEs",
                  desc: "Upgrade your documentation & win bigger contracts"
                },
                {
                  title: "Established Firms",
                  desc: "High-volume tender production + expert handling"
                },
                {
                  title: "Specialists/Subcontractors",
                  desc: "Technical documents & partnership support"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our 5-Step Process
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              " 📞 Free Consultation",
              " � Assign Expert Team Based on Tender",
              " 📝 Prepare Full Documentation",
              " 📬 Submit or Deliver Your Tender",
              " 🔁 Post-Submission Support"
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600 italic">
            Even if you're unsure, we review and guide you.
          </p>
        </section>

        {/* Success Stories Section */}
        <section className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              1,000+ Winning Clients — Here's a Few
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Zessco helped me win a 5M KEMSA supply contract. They worked fast and professionally. – Susan M., Nairobi",
                "I was late and stressed. Zessco got my tender ready in 2 days. I was shortlisted. – Brian O., Nakuru",
                "From zero documents to submission in 3 days — and I WON. Thank you Zessco. – Kevin T., Eldoret"
              ].map((quote, index) => (
                <div key={index} className="bg-blue-800 p-6 rounded-lg">
                  <p className="italic">"{quote.split(' – ')[0]}"</p>
                  <p className="mt-4 font-semibold">– {quote.split(' – ')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            You Don't Have to Be Ready — You Just Need Zessco
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We've helped over 1,000 clients win tenders across Kenya. Whether you're just starting or under pressure, Zessco gives you the expertise, speed, and support to win.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tender" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
              Start My Tender Application
            </Link>
            <Link href="/whatsapp" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold">
              Chat with an Expert (WhatsApp)
            </Link>
            <Link href="/contact" className="bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
              Request a Call Back
            </Link>
          </div>
        </section>


        {/* Existing Our Services Section - Kept as is */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Services</h2>
          <div className="space-y-10">
            {[
              { service: '1. Tender Documentation', description: 'Preparation of high-quality, fully compliant tender documents tailored to each opportunity.' },
              { service: '2. Client Compliance Management', description: 'We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements.' },
              { service: '3. Document Updating & Secretarial Services', description: 'We handle company updates, renewals, and act as your outsourced corporate secretariat.' },
              { service: '4. Tender Winning Support', description: 'Beyond paperwork, we strategize with you to give your application the best possible winning chance.' },
              { service: '5. Company Transactions', description: 'We assist in buying, selling, and leasing companies — with or without past experience — legally and ethically.' },
              { service: '6. Regulatory Compliance Assistance', description: 'We ensure compliance with KRA, NCA, and all other relevant regulatory authorities.' },
              { service: '7. Company Profile Preparation', description: 'We prepare compelling, professional company profiles that give you a competitive edge in tendering.' },
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