import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    { title: "Tender Documentation" },
    // { title: "Technical Input (Engineering/Specs)"},
    { title: "Compliance Reviews & Certifications"},
    { title: "Financial Audits & Statements (CPA Auditors)"},
    // { title: "Bidder Registration & Prequalification"},
    { title: "ISMIF & EGP Tender Submission"},
    { title: "KRA, Return and Updates, Feedback"},
    // { title: "Bid compilation"},
    { title: "Filling of Bill of Quantities"},
    { title: "Preparation of Audited Accounts"},
    { title: "Online E.G.P tendering services"},
    { title: "Graphic Design"},
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-16 pb-16 px-4 sm:px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3 sm:mb-4">
            Our Services
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
            Zessco International Consultancy offers comprehensive, efficient, and dependable services tailored to your supply chain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition duration-300 shadow-blue-100 hover:shadow-blue-900 flex flex-col items-center justify-center space-y-8 sm:space-y-12 hover:bg-blue-100 hover:text-blue-900 cursor-pointer"
              >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{}</div>
                <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1 sm:mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center">
              <div className='text-center mt-10 bg-light m-5 sm:m-6 px-4 max-w-max'>
                <p className='italic text-sm text-center text-orange-500'>24/7 Support: Always available when you need us</p>
              </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}