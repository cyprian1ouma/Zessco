import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const tenders = [
  {
    company: "Zessco Ltd",
    name: "Logistics Support",
    description: "Supply chain logistics for regional delivery.",
    number: "ZL-2025-001",
    posted: "2025-07-01",
    closing: "2025-08-01",
    contact: "+254 700 123 456",
    email: "info@zessco.com",
    link: "#",
  },
  {
    company: "Cargo Movers Inc.",
    name: "Cold Chain Transport",
    description: "Refrigerated transport for perishables.",
    number: "CM-2025-009",
    posted: "2025-06-20",
    closing: "2025-07-30",
    contact: "+254 721 456 789",
    email: "tenders@cargomovers.com",
    link: "#",
  },
  {
    company: "LogiMax Kenya",
    name: "Warehouse Services",
    description: "Tender for storage and inventory systems.",
    number: "LM-2025-010",
    posted: "2025-06-10",
    closing: "2025-07-25",
    contact: "+254 734 567 890",
    email: "support@logimax.co.ke",
    link: "#",
  },
  {
    company: "FreightPro",
    name: "International Shipping",
    description: "Export-import logistics and customs.",
    number: "FP-2025-013",
    posted: "2025-07-05",
    closing: "2025-08-10",
    contact: "+254 722 000 333",
    email: "info@freightpro.com",
    link: "#",
  },
  {
    company: "TransAfrica Ltd",
    name: "Fleet Maintenance",
    description: "Management and maintenance of logistics vehicles.",
    number: "TA-2025-015",
    posted: "2025-07-02",
    closing: "2025-08-05",
    contact: "+254 700 222 111",
    email: "contact@transafrica.com",
    link: "#",
  },
  {
    company: "EastCom Logistics",
    name: "Inventory Management",
    description: "Systems development for tracking goods.",
    number: "EC-2025-011",
    posted: "2025-06-18",
    closing: "2025-08-02",
    contact: "+254 711 345 678",
    email: "info@eastcom.co.ke",
    link: "#",
  },
  {
    company: "QuickMove",
    name: "Last Mile Delivery",
    description: "Efficient city delivery solutions.",
    number: "QM-2025-008",
    posted: "2025-06-22",
    closing: "2025-07-28",
    contact: "+254 722 444 999",
    email: "contact@quickmove.com",
    link: "#",
  },
  {
    company: "SafeHaul Ltd",
    name: "Cargo Safety Systems",
    description: "Install safety monitoring systems.",
    number: "SH-2025-014",
    posted: "2025-07-07",
    closing: "2025-08-12",
    contact: "+254 733 123 000",
    email: "tenders@safehaul.com",
    link: "#",
  },
  {
    company: "Urban Express",
    name: "Urban Freight Movement",
    description: "Cargo transport within urban areas.",
    number: "UE-2025-017",
    posted: "2025-06-25",
    closing: "2025-07-31",
    contact: "+254 720 222 333",
    email: "urban@express.com",
    link: "#",
  },
  {
    company: "AfricaLink",
    name: "Cross-Border Logistics",
    description: "Facilitate cargo across African countries.",
    number: "AL-2025-020",
    posted: "2025-07-09",
    closing: "2025-08-09",
    contact: "+254 712 111 888",
    email: "support@africalink.com",
    link: "#",
  },
  {
    company: "TrackSmart",
    name: "Real-Time Tracking",
    description: "Tender for asset tracking systems.",
    number: "TS-2025-019",
    posted: "2025-06-30",
    closing: "2025-08-03",
    contact: "+254 735 111 222",
    email: "sales@tracksmart.com",
    link: "#",
  },
  {
    company: "EcoHaul",
    name: "Green Logistics",
    description: "Tender for sustainable logistics solutions.",
    number: "EH-2025-021",
    posted: "2025-07-10",
    closing: "2025-08-15",
    contact: "+254 736 222 111",
    email: "eco@haul.com",
    link: "#",
  },
];

export default function TenderPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-16 pb-16 px-4 sm:px-6">
        {/* Banner */}
        <div className="w-full h-[30vh] sm:h-[40vh] mt-3 overflow-hidden shadow-lg relative">
          <Image
            src="/image1.png"
            alt="Tender banner"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          />
        </div>

        {/* Tender Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-7xl mx-auto">
          {tenders.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-5 hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1">{t.company}</h3>
              <p className="text-sm sm:text-md font-semibold text-gray-700">{t.name}</p>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">{t.description}</p>
              <p className="text-xs sm:text-sm"><strong>Tender No:</strong> {t.number}</p>
              <p className="flex items-center gap-2 text-xs sm:text-sm"><FaCalendarAlt className="text-xs sm:text-sm" /> <strong>Posted:</strong> {t.posted}</p>
              <p className="flex items-center gap-2 text-xs sm:text-sm"><FaCalendarAlt className="text-xs sm:text-sm" /> <strong>Closing:</strong> {t.closing}</p>
              <p className="text-xs sm:text-sm"><strong>Contact:</strong> {t.contact}</p>
              <p className="text-xs sm:text-sm mb-2"><strong>Email:</strong> {t.email}</p>
              <a
                href={t.link}
                className="text-blue-700 font-semibold text-xs sm:text-sm mt-2 inline-flex items-center gap-2 hover:underline"
              >
                <FaDownload className="text-xs sm:text-sm" /> Download Tender
              </a>
            </div>
          ))}
        </div>

        {/* Steps to Apply */}
        <section className="max-w-7xl mx-auto mt-12 sm:mt-20 px-2 sm:px-4 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-14">How to Apply for a Tender</h2>

          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-24 relative">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="bg-white border border-gray-200 p-4 sm:p-6 rounded shadow hover:shadow-lg transition z-10 relative"
              >
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Step {step}</h3>
                <p className="text-xs sm:text-sm text-gray-600">Complete this step with accuracy and confidence to proceed smoothly.</p>
              </div>
            ))}
            <div className="hidden sm:block absolute top-[45%] left-[18%] w-[25%] h-0 border-t-2 border-dotted border-blue-700 z-0 animate-move">
              <div className="absolute -right-2 -top-2 rotate-45 w-4 h-4 border-t-4 border-r-4 border-blue-700"></div>
            </div>
            <div className="hidden sm:block absolute top-[45%] left-[52%] w-[25%] h-0 border-t-2 border-dotted border-blue-700 z-0 animate-move">
              <div className="absolute -right-2 -top-2 rotate-45 w-4 h-4 border-t-4 border-r-4 border-blue-700"></div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative">
            {[4, 5].map((step) => (
              <div
                key={step}
                className="bg-white border border-gray-200 p-4 sm:p-6 rounded shadow hover:shadow-lg transition z-10 relative"
              >
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Step {step}</h3>
                <p className="text-xs sm:text-sm text-gray-600">Follow this step carefully for the final part of the tender process.</p>
              </div>
            ))}
            <div className="bg-green-50 border-2 sm:border-4 border-green-600 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl z-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2 sm:mb-3">Zessco Makes It Easy</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                With Zessco, all these steps are simplified into one seamless system — powered by our expert team.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded hover:bg-green-700 transition mt-2 sm:mt-4 text-sm sm:text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Arrows for second row */}
            <div className="hidden sm:block absolute top-[calc(100%+40px)] left-[18%] w-[25%] h-0 border-t-2 border-dotted border-blue-700 z-0 animate-move">
              <div className="absolute -right-2 -top-2 rotate-45 w-4 h-4 border-t-4 border-r-4 border-blue-700"></div>
            </div>
            <div className="hidden sm:block absolute top-[calc(100%+40px)] left-[52%] w-[30%] h-0 border-t-2 border-dotted border-green-700 z-0 animate-fast-move">
              <div className="absolute -right-3 -top-3 rotate-45 w-6 h-6 border-t-4 border-r-4 border-green-700"></div>
            </div>
          </div>

          {/* Animation Keyframes */}
          <style jsx>{`
            @keyframes move {
              0% { transform: translateX(0); opacity: 0.3; }
              50% { opacity: 1; }
              100% { transform: translateX(10px); opacity: 0.3; }
            }
            @keyframes fastMove {
              0% { transform: translateX(0); opacity: 0.3; }
              50% { opacity: 1; }
              100% { transform: translateX(15px); opacity: 0.3; }
            }
            .animate-move {
              animation: move 2s infinite linear;
            }
            .animate-fast-move {
              animation: fastMove 1s infinite linear;
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}