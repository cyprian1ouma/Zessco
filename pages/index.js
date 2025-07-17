import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/image1.png', text: 'Fast Delivery', textAnim: 'animate__fadeInLeft', bgAnim: 'animate__fadeInRight' },
  { src: '/image1.png', text: 'Secure Process', textAnim: 'animate__fadeInRight', bgAnim: 'animate__fadeInLeft' },
  { src: '/image1.png', text: 'Customs Help', textAnim: 'animate__rotateIn', bgAnim: 'animate__rotateInUpLeft' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Removed images.length dependency

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-16 pb-12 px-4 sm:px-6">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[50vh] overflow-hidden transition duration-1000 ease-in-out">
          <div className="absolute w-full h-full z-0">
            <Image
              key={current}
              src={images[current].src}
              alt="hero"
              fill
              className={`object-cover opacity-40 animate__animated ${images[current].bgAnim}`}
              style={{ animationDuration: '1.5s', animationIterationCount: '1', animationFillMode: 'both' }}
              priority
            />
          </div>
          <div
            key={images[current].text}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 animate__animated ${images[current].textAnim}`}
            style={{ animationDuration: '1.5s', animationIterationCount: '1', animationFillMode: 'both' }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 bg-white/60 px-4 py-2 rounded">
              {images[current].text}
            </h2>
            <Link
              href="/tender"
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-orange-600 transition text-sm sm:text-base"
            >
              Show More
            </Link>
          </div>
        </section>

        {/* Info Boxes Section */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto py-8 sm:py-12 text-center">
          <div className="bg-white shadow-md p-3 sm:p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-sm sm:text-lg font-semibold">
            Open at 8:00am <br />Close at 4:00pm
          </div>
          <div className="bg-white shadow-md p-3 sm:p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-sm sm:text-lg font-semibold">
            From: Monday <br />To: Friday
          </div>
          <div className="bg-white shadow-md p-3 sm:p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-sm sm:text-lg font-semibold">
            Welcome! Explore our{' '}
            <Link href="/tender" className="underline">
              Tenders
            </Link>
          </div>
          <div className="bg-white shadow-md p-3 sm:p-6 rounded transition duration-500 hover:bg-orange-500 hover:text-white hover:scale-105 text-sm sm:text-lg font-semibold">
            Call: +254 724 210375
          </div>
        </section>

        {/* New Tender Hero Section */}
        <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4">
            Win Tenders with Confidence
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-800 mb-6 sm:mb-8">
            The Number One Tender Documentation Experts in Kenya
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Over 10,000 successful clients. Our team of engineers, auditors, advocates, and technical experts prepares winning tenders — even under tight timelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/tender" className="bg-blue-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-800 transition font-semibold text-sm sm:text-base">
              Start Your Tender Now
            </Link>
            <Link href="/eligibility" className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-orange-600 transition font-semibold text-sm sm:text-base">
               View our catalogue
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-blue-50 py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-6 sm:mb-12">
              Why Choose Zessco International?
            </h2>
            <h4 className="text-base sm:text-lg font-medium text-blue-900 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              With 80% of tenders being disqualified before reaching the financial stage. Our deep technical expertise ensures that your bid submission checks all the boxes for compliance right from the start.
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Built for Urgent Deadlines",
                  text: "With a capable and dedicated team, we deliver high-quality tender submissions even under tight timelines. This is made possible by adequate professionals and personnel who are ready to work around the clock to deliver.",
                },
                {
                  title: "Powered by Professionals",
                  text: "Our team isnt just made up of writers we bring together engineers, legal advisors, procurement specialists, auditors, and graphic designers to create technically sound, visually compelling documents.",
                },
                {
                  title: "We Stick With You",
                  text: "Our support extends beyond submission. We assist with acceptance letters, guide you through contract signing, and offer expert advice on performance guarantees to help you secure the deal with confidence.",
                },
                {
                  title: "Beginner-Friendly Approach",
                  text: "New to tendering? We walk with you every step of the way, equipping you with the tools and guidance you need to compete and succeed.",
                },
                {
                  title: "Complete Compliance",
                  text: "From KRA to NCA, we help ensure you meet every requirement and stay tender-ready year-round.",
                },
                {
                  title: "Your Success, Our Priority",
                  text: "Zessco doesnt just help you apply; we strategize with you, positioning your bids to stand out and win.",
                  bg:"bg-blue-300 text-white hover:bg-blue-400 text-blue-900",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 bg-blue-900 p-4 sm:p-6 rounded-lg shadow-md max-w-3xl mx-auto text-center italic">
              <p className="text-lg sm:text-xl text-white">
                &ldquo;At Zessco, we don&apos;t just help you apply: We position you to win.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Our Tender Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Tender Documentation",
              "Technical Input (Engineering/Specs)",
              "Legal Review & Compliance (Advocates)",
              "Financial Audits & Statements (CPA Auditors)",
              "Formatting to Tender Standards",
              "Tender Submission & Delivery Support",
              "Aftercare: KRA, Trend Updates, Feedback",
              "Bid Compilation",
              "Filling of Bill of Quantities",
              "Preparation of Audited Accounts",
              "Online E.G.P Tendering Services",
              "Graphic Design"
            ].map((service, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-3 sm:p-4 hover:bg-blue-50 transition">
                <p className="text-sm sm:text-base md:text-lg">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services" className="bg-blue-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-800 transition font-semibold text-sm sm:text-base">
              Book Free Tender Review
            </Link>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="bg-gray-100 py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
              New or Experienced — We&apos;ve Got You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg sm:text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        {/* <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">
            Our 5-Step Process
          </h2>
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            {[
              "📞 Free Consultation",
              "👥 Assign Expert Team Based on Tender",
              "📝 Prepare Full Documentation",
              "📬 Submit or Deliver Your Tender",
              "🔄 Post-Submission Support"
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 text-blue-900 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 sm:mt-8 text-gray-600 italic text-sm sm:text-base">
            Even if you&apos;re unsure, we review and guide you.
          </p>
        </section> */}

        {/* Final CTA Section */}
        <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            You Don&apos;t Have to Be Ready, You Just Need Zessco
          </h2>
          <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            We&apos;ve helped over 1,000 clients win tenders across Kenya. Whether you&apos;re just starting or under pressure, Zessco gives you the expertise, speed, and support to win.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/tender" className="bg-blue-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-800 transition font-semibold text-sm sm:text-base">
              Start My Tender
            </Link>
            <Link href="/whatsapp" className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-600 transition font-semibold text-sm sm:text-base">
              Chat on WhatsApp
            </Link>
            <Link href="/contact" className="bg-white text-blue-900 border border-blue-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-50 transition font-semibold text-sm sm:text-base">
              Request Call Back
            </Link>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-10">Other Services</h2>
          <div className="space-y-6 sm:space-y-10">
            {[
              { service: '1. Client Compliance Management', description: 'We ensure our clients are always up-to-date with all legal, financial, and regulatory requirements.' },
              { service: '2. Document Updating & Secretarial Services', description: 'We handle company updates, renewals, and act as your outsourced corporate secretariat.' },
              { service: '3. Company Transactions', description: 'We assist in buying, selling, and leasing companies with or without past experience legally and ethically.' },
              { service: '4. Regulatory Compliance Assistance', description: 'We ensure compliance with KRA, NCA, and all other relevant regulatory authorities.' },
              { service: '5. Company Profile Preparation', description: 'We prepare compelling, professional company profiles that give you a competitive edge in tendering.' },
              { service: '6. Graphic Design', description: 'From logos and branding to marketing materials and company profiles, we craft visually striking designs that communicate your message with clarity and impact.' },
              { service: '7. Website Development', description: 'We design and develop fast, mobile-friendly websites that reflect your brand, improve user experience, and help you achieve your business objectives online.' },
            ].map((item, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start transition duration-300"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-blue-900 p-3 sm:p-4 border rounded-md shadow-sm 
                                group-hover:shadow-md group-hover:border-blue-400 
                                group-hover:text-2xl group-hover:bg-blue-900 group-hover:text-white
                                transition-all duration-500 ease-in-out">
                  {item.service}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 p-3 sm:p-4 border rounded-md 
                            group-hover:bg-orange-50 group-hover:shadow-sm group-hover:border-orange-300 
                            transition duration-500 ease-in-out">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Join 10,000+ Winning Clients
              </h2>
              <p className="text-blue-700 text-lg sm:text-xl max-w-3xl mx-auto">
                Don&apos;t just take our word for it — here&apos;s what our clients say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  quote: "Zessco helped me win a 5M KEMSA supply contract. They worked fast and professionally.",
                  author: "Susan M., Nairobi",
                  bg: "bg-blue-600"
                },
                {
                  quote: "I was late and stressed. Zessco got my tender ready in 2 days. I was shortlisted.",
                  author: "Brian O., Nakuru",
                  bg: "bg-blue-600"
                },
                {
                  quote: "From zero documents to submission in 3 days — and I WON. Thank you Zessco.",
                  author: "Kevin T., Eldoret",
                  bg: "bg-blue-600"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`${testimonial.bg} text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="mb-4 text-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="italic text-lg sm:text-xl mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-bold text-blue-100 text-base sm:text-lg"> {testimonial.author}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Read More Success Stories
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}