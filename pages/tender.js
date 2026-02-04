import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link"; // Added import

const ServiceModal = ({ service, isOpen, onClose, type }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">
              {type === 'details' ? service.title : `Contact for ${service.title}`}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>

          {type === 'details' ? (
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">{service.detailedInfo}</p>
              {service.subServices && (
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm">Sub-Services:</h4>
                  <ul className="space-y-2">
                    {service.subServices.map((sub, idx) => (
                      <li key={idx} className="pl-3 border-l-2 border-blue-200">
                        <strong className="text-blue-700 text-sm">{sub.name}:</strong>
                        <p className="text-gray-600 text-xs mt-1">{sub.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {service.features && (
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 text-xs mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6 pt-4 border-t">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Phone Call</p>
                    <p className="text-blue-600 text-xs">+254 725798258</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <span className="text-sm">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
                    <p className="text-blue-600 text-xs">+254 725798258</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <span className="text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email</p>
                    <p className="text-blue-600 text-xs">info@zesscointernational.com</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-xs">
                We typically respond within 1-2 hours during business days.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalType, setModalType] = useState('details');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service, type) => {
    setSelectedService(service);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const civilEngineeringServices = [
    {
      title: "Road Works",
      description: "Comprehensive road construction, maintenance, and rehabilitation services",
      detailedInfo: "We provide complete road construction solutions including planning, design, construction, and maintenance. Our team ensures durability, safety, and compliance with all regulatory standards. We use modern equipment and proven techniques to deliver roads that last.",
      features: [
        "Modern construction equipment",
        "Experienced engineering team",
        "Quality materials",
        "Timely project completion",
        "Safety compliance"
      ],
      subServices: [
        { name: "Road Construction", description: "Building new roads and highways with modern techniques" },
        { name: "Road Maintenance", description: "Regular upkeep and repair of existing road networks" },
        { name: "Asphalt Paving", description: "High-quality asphalt laying and resurfacing" },
        { name: "Drainage Systems", description: "Stormwater drainage and water management systems" }
      ]
    },
    {
      title: "Water Works",
      description: "Complete water infrastructure development and management",
      detailedInfo: "Specializing in water supply systems, treatment plants, and distribution networks. We ensure sustainable water management solutions for communities and industries. Our expertise includes borehole drilling, dam construction, and irrigation systems.",
      features: [
        "Sustainable water solutions",
        "Modern drilling equipment",
        "Water quality testing",
        "Efficient irrigation systems",
        "Maintenance services"
      ],
      subServices: [
        { name: "Borehole Drilling", description: "Professional drilling and installation of boreholes" },
        { name: "Water Dams", description: "Construction of water storage and conservation dams" },
        { name: "Irrigation Systems", description: "Design and installation of efficient irrigation networks" },
        { name: "Water Treatment", description: "Purification and treatment systems installation" }
      ]
    },
    {
      title: "Electrical Works",
      description: "Full electrical installations, maintenance, and power solutions",
      detailedInfo: "Certified electrical contractors providing safe and reliable electrical systems for residential, commercial, and industrial projects. We handle everything from wiring to complete electrical system installation.",
      features: [
        "Certified electricians",
        "Safety first approach",
        "Energy efficient solutions",
        "24/7 emergency services",
        "Quality materials"
      ],
      subServices: [
        { name: "Wiring Installation", description: "Complete electrical wiring for buildings" },
        { name: "Power Distribution", description: "Electrical panel and distribution system setup" },
        { name: "Lighting Solutions", description: "Interior and exterior lighting design and installation" },
        { name: "Generator Installation", description: "Backup power systems installation" }
      ]
    },
    {
      title: "Building Works",
      description: "Architectural design, construction, and structural works",
      detailedInfo: "From architectural design to complete construction, we deliver quality buildings that meet client specifications and regulatory requirements. We handle both residential and commercial projects.",
      features: [
        "Architectural design",
        "Quality construction",
        "Project management",
        "Timely delivery",
        "Cost-effective solutions"
      ],
      subServices: [
        { name: "Architectural Design", description: "Creative and functional building designs" },
        { name: "Construction", description: "Complete building construction services" },
        { name: "Renovation", description: "Building refurbishment and upgrades" },
        { name: "Structural Works", description: "Foundation and structural works" }
      ]
    },
    {
      title: "Mechanical Works",
      description: "Mechanical systems installation and maintenance",
      detailedInfo: "Specialized mechanical engineering services including HVAC systems, plumbing, and industrial equipment installation. We ensure efficient and reliable mechanical systems.",
      features: [
        "Expert technicians",
        "Modern equipment",
        "Energy efficient systems",
        "Regular maintenance",
        "Quick response time"
      ],
      subServices: [
        { name: "HVAC Systems", description: "Heating, ventilation and air conditioning installation" },
        { name: "Plumbing", description: "Complete plumbing systems for buildings" },
        { name: "Equipment Installation", description: "Industrial machinery and equipment setup" },
        { name: "Maintenance Services", description: "Regular maintenance and repairs" }
      ]
    },
    {
      title: "General Supplies",
      description: "Procurement and supply of construction materials and equipment",
      detailedInfo: "Reliable supplier of quality construction materials, tools, and equipment with timely delivery and competitive pricing. We source from trusted manufacturers.",
      features: [
        "Quality materials",
        "Competitive pricing",
        "Timely delivery",
        "Wide range of products",
        "Bulk discounts available"
      ],
      subServices: [
        { name: "Material Supply", description: "Quality construction materials delivery" },
        { name: "Equipment Rental", description: "Construction equipment rental services" },
        { name: "Tools Supply", description: "Professional-grade construction tools" },
        { name: "Safety Equipment", description: "Construction safety gear and equipment" }
      ]
    }
  ];

  const serviceProvisions = [
    {
      title: "Car Hire Services",
      description: "Reliable vehicle rental for short and long-term needs",
      detailedInfo: "Fleet of well-maintained vehicles available for hire with flexible rental terms and professional drivers upon request. We offer various vehicle types for different needs.",
      features: [
        "Well-maintained fleet",
        "Flexible rental terms",
        "Professional drivers",
        "24/7 roadside assistance",
        "Competitive rates"
      ]
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions for premises and personnel",
      detailedInfo: "Professional security services including manned guarding, surveillance systems, and security consultancy. Our trained personnel ensure maximum security.",
      features: [
        "Trained security personnel",
        "Modern surveillance systems",
        "24/7 monitoring",
        "Regular patrols",
        "Emergency response"
      ]
    },
    {
      title: "Cleaning Services",
      description: "Professional cleaning and maintenance services",
      detailedInfo: "Commercial and industrial cleaning services using eco-friendly products and modern equipment. We provide regular and one-time cleaning services.",
      features: [
        "Eco-friendly products",
        "Modern equipment",
        "Trained staff",
        "Flexible scheduling",
        "Satisfaction guaranteed"
      ]
    },
    {
      title: "Consultancy",
      description: "Expert advisory services across multiple sectors",
      detailedInfo: "Professional consultancy services in engineering, project management, and business development. We provide expert advice and solutions.",
      features: [
        "Expert consultants",
        "Industry experience",
        "Custom solutions",
        "Project management",
        "Cost analysis"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Relief Food Supply",
      description: "Emergency and relief food distribution services",
      detailedInfo: "Timely delivery of relief food supplies during emergencies with proper storage and distribution networks. We ensure food reaches those in need efficiently.",
      features: [
        "Timely delivery",
        "Proper storage",
        "Quality food items",
        "Distribution network",
        "Emergency response"
      ]
    },
    {
      title: "Livestock & Cereals Supply",
      description: "Quality livestock and agricultural produce supply",
      detailedInfo: "Supply of quality livestock, cereals, and agricultural products from verified sources. We ensure fresh and healthy products.",
      features: [
        "Quality livestock",
        "Fresh cereals",
        "Verified sources",
        "Bulk supply",
        "Delivery services"
      ]
    },
    {
      title: "Secretarial Duties",
      description: "Professional documentation and administrative support",
      detailedInfo: "Comprehensive secretarial services including document preparation, filing, and administrative support. We help businesses stay organized.",
      features: [
        "Document preparation",
        "Filing services",
        "Administrative support",
        "Confidentiality",
        "Professional staff"
      ]
    },
    {
      title: "Company Upkeep Services",
      description: "Secure document storage and company maintenance",
      detailedInfo: "Professional upkeep services including document storage, office maintenance, and facility management. We ensure your business runs smoothly.",
      features: [
        "Secure storage",
        "Office maintenance",
        "Facility management",
        "Regular updates",
        "Professional service"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 pt-16 pb-16 px-4 sm:px-6 relative overflow-hidden">
        
        {/* Background Objects - More decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Large circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-10"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-200 rounded-full opacity-5"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-4 border-blue-100/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-2 border-blue-200/20 rounded-full"></div>
          
          {/* Dotted patterns */}
          <div className="absolute top-1/2 left-20 grid grid-cols-3 gap-4 opacity-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-blue-400 rounded-full"></div>
            ))}
          </div>
          
          {/* Line patterns */}
          <div className="absolute top-1/4 right-20 w-1 h-48 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-20 w-48 h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
          
          {/* Small decorative dots */}
          <div className="absolute top-10 right-40 w-2 h-2 bg-blue-300/30 rounded-full"></div>
          <div className="absolute top-60 left-40 w-3 h-3 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-60 w-2 h-2 bg-blue-300/30 rounded-full"></div>
          <div className="absolute bottom-60 left-60 w-3 h-3 bg-blue-400/20 rounded-full"></div>
          
          {/* Wave-like pattern */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-blue-100/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-128 h-128 border-2 border-blue-100/5 rounded-full"></div>
        </div>

        {/* Banner - Keep exactly as is */}
        <div className="w-full h-[30vh] sm:h-[40vh] mt-3 overflow-hidden shadow-lg relative z-10">
          <Image
            src="/image1.png"
            alt="Services banner"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Comprehensive Services</h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
                Professional solutions tailored to your specific needs
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Civil Engineering Section */}
          <section className="mt-12 sm:mt-20 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Civil Engineering Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Professional engineering solutions with precision and excellence
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {civilEngineeringServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-300 group backdrop-blur-sm bg-white/90"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => openModal(service, 'details')}
                      className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => openModal(service, 'contact')}
                      className="flex-1 border border-blue-600 text-blue-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                    >
                      Get Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Provisions */}
          <section className="mt-16 sm:mt-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Service Provisions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Professional support services to keep your operations running smoothly
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceProvisions.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-300 group backdrop-blur-sm bg-white/90"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => openModal(service, 'details')}
                      className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => openModal(service, 'contact')}
                      className="flex-1 border border-blue-600 text-blue-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                    >
                      Get Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Services */}
          <section className="mt-16 sm:mt-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Additional Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Specialized services to meet diverse business needs
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-300 group backdrop-blur-sm bg-white/90"
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-base font-bold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-xs mb-3 flex-grow">{service.description}</p>
                    
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => openModal(service, 'details')}
                        className="flex-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                      >
                        View More
                      </button>
                      <button
                        onClick={() => openModal(service, 'contact')}
                        className="flex-1 border border-blue-600 text-blue-600 px-2 py-1 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                      >
                        Get Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 sm:mt-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 sm:p-10 text-center text-white shadow-xl backdrop-blur-sm bg-blue-900/90 relative overflow-hidden">
            {/* Background pattern for CTA */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Need Custom Solutions?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-4 text-sm">
                We provide tailored services to meet your unique requirements. Contact us for personalized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 font-bold px-6 py-2 rounded text-sm hover:bg-blue-50 transition-colors shadow hover:shadow-md"
                >
                  Request Consultation
                </Link>
                <a
                  href="tel:+254725798258"
                  className="border border-white text-white font-bold px-6 py-2 rounded text-sm hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Modal */}
        <ServiceModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
          type={modalType}
        />
      </main>
      <Footer />
    </>
  );
}