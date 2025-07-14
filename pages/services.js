import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    { title: "Freight Shipping", desc: "Worldwide freight via air, land, and sea.", icon: "🚚" },
    { title: "Warehousing", desc: "Secure storage with real-time inventory tracking.", icon: "🏢" },
    { title: "Customs Clearance", desc: "We handle complex import/export documentation.", icon: "📄" },
    { title: "Last Mile Delivery", desc: "Reliable delivery right to your customer's door.", icon: "📦" },
    { title: "Cargo Insurance", desc: "Your goods are always protected.", icon: "🛡️" },
    { title: "Tracking Solutions", desc: "Live GPS tracking for your shipments.", icon: "📍" },
    { title: "Cold Chain Logistics", desc: "Refrigerated shipping for sensitive cargo.", icon: "❄️" },
    { title: "Fleet Management", desc: "Maintain, track, and optimize your vehicles.", icon: "🚛" },
    { title: "Supply Chain Consulting", desc: "Streamline and improve your operations.", icon: "📊" },
    { title: "Inventory Management", desc: "Real-time control over your stock.", icon: "📦" },
    { title: "Logistics Software", desc: "Powerful tools to automate logistics tasks.", icon: "💻" },
    { title: "24/7 Support", desc: "Always available when you need us.", icon: "🕒" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3 sm:mb-4">
            Our Logistics Services
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
            Zessco Logistics offers comprehensive, efficient, and dependable services tailored to your supply chain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1 sm:mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}