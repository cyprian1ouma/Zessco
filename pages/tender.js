import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ServiceModal = ({ service, isOpen, onClose, type }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">
              {type === 'details' ? service.title : `Tender for ${service.title}`}
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
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm">Tender Categories:</h4>
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
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm">Tender Requirements:</h4>
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
                  Submit Tender
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-green">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Tender Inquiries</p>
                    <p className="text-blue-600 text-xs">+254 725798258</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-green">
                    <span className="text-sm">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">WhatsApp Tenders</p>
                    <p className="text-blue-600 text-xs">+254 725798258</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-green">
                    <span className="text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Tender Email</p>
                    <p className="text-blue-600 text-xs">tenders@zesscointernational.com</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-xs">
                Tender documents available upon request. Submission deadlines apply.
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

  const civilEngineeringTenders = [
    {
      title: "Road Works Tender",
      description: "Tendering services for road construction, maintenance, and rehabilitation projects",
      detailedInfo: "We provide tender services for comprehensive road works including planning, design, construction, and maintenance. We handle tender documentation, submission, and compliance for all road projects.",
      features: [
        "Tender documentation preparation",
        "Technical proposal development",
        "Financial bid structuring",
        "Compliance verification",
        "Submission management",
        
      ],
      subServices: [
        { name: "Road Construction Tenders", description: "Tender services for new road and highway projects" },
        { name: "Road Maintenance Tenders", description: "Tendering for road upkeep and repair contracts" },
        { name: "Asphalt Works Tenders", description: "Tender services for resurfacing projects" },
        { name: "Drainage Systems Tenders", description: "Tendering for water management systems" },
        { name: "Bridge Works Tenders", description: "Tender services for bridge construction and repair" },
        { name: "Pavement Marking Tenders", description: "Tendering for road safety markings" },
        {name:" And many more...", description: "" }
      ]
    },
    {
      title: "Water Works Tender",
      description: "Tendering services for water infrastructure projects",
      detailedInfo: "We handle tenders for water supply systems, treatment plants, and distribution networks. Our expertise ensures successful tender submissions for water infrastructure development.",
      features: [
        "Water project tendering",
        "Technical specifications",
        "Regulatory compliance",
        "Bid evaluation support",
        "Contract negotiation",
        
      ],
      subServices: [
        { name: "Borehole Tenders", description: "Tendering for drilling and installation projects" },
        { name: "Water Dam Tenders", description: "Tender services for water storage projects" },
        { name: "Irrigation Tenders", description: "Tendering for agricultural water systems" },
        { name: "Water Treatment Tenders", description: "Tender services for purification systems" },
        { name: "Piping Tenders", description: "Tendering for water distribution networks" },
        { name: "Sewerage Tenders", description: "Tender services for wastewater management" },
        {name:" And many more...", description: "" }

      ]
    },
    {
      title: "Electrical Works Tender",
      description: "Tendering services for electrical installations and power solutions",
      detailedInfo: "We provide tender services for electrical system installations across residential, commercial, and industrial projects. We ensure all tender requirements are met for successful bidding.",
      features: [
        "Electrical tender preparation",
        "Safety compliance documentation",
        "Technical specifications",
        "Equipment certification",
        "Bid submission management",
      
      ],
      subServices: [
        { name: "Wiring Tenders", description: "Tendering for electrical wiring projects" },
        { name: "Power Distribution Tenders", description: "Tender services for electrical panels" },
        { name: "Lighting Tenders", description: "Tendering for lighting system projects" },
        { name: "Generator Tenders", description: "Tender services for backup power systems" },
        { name: "Solar Power Tenders", description: "Tendering for renewable energy installations" },
        { name: "Transformer Tenders", description: "Tender services for power transformers" },
        {name:" And many more...", description: "" }
      ]
    },
    {
      title: "Building Works Tender",
      description: "Tendering services for construction and architectural projects",
      detailedInfo: "We handle tenders for building construction from design to completion. Our tender services ensure compliance with all architectural and construction requirements.",
      features: [
        "Architectural tender services",
        "Construction bid preparation",
        "Project documentation",
        "Regulatory compliance",
        "Contract management",
        "And more..."
      ],
      subServices: [
        { name: "Design Tenders", description: "Tendering for architectural design projects" },
        { name: "Construction Tenders", description: "Tender services for building projects" },
        { name: "Renovation Tenders", description: "Tendering for building refurbishment" },
        { name: "Structural Tenders", description: "Tender services for foundation works" },
        { name: "Finishing Tenders", description: "Tendering for interior and exterior finishes" },
        { name: "Landscaping Tenders", description: "Tender services for outdoor spaces" },
        {name:" And many more...", description: "" }
      ]
    },
    {
      title: "Mechanical Works Tender",
      description: "Tendering services for mechanical systems installation",
      detailedInfo: "We provide tender services for mechanical engineering projects including HVAC systems, plumbing, and industrial equipment installation.",
      features: [
        "Mechanical tender preparation",
        "Equipment specifications",
        "Installation requirements",
        "Maintenance contracts",
        "Technical compliance",
        "And more..."
      ],
      subServices: [
        { name: "HVAC Tenders", description: "Tendering for heating and cooling systems" },
        { name: "Plumbing Tenders", description: "Tender services for plumbing systems" },
        { name: "Equipment Tenders", description: "Tendering for industrial machinery" },
        { name: "Maintenance Tenders", description: "Tender services for regular maintenance" },
        { name: "Piping Tenders", description: "Tendering for mechanical piping systems" },
        { name: "Fabrication Tenders", description: "Tender services for custom fabrication" },
        {name:" And many more...", description: "" }
      ]
    },
    {
      title: "General Supplies Tender",
      description: "Tendering services for construction materials and equipment",
      detailedInfo: "We handle procurement tenders for quality construction materials, tools, and equipment. Our services ensure competitive bidding and proper documentation.",
      features: [
        "Procurement tendering",
        "Supplier evaluation",
        "Quality specifications",
        "Delivery requirements",
        "Documentation management",
        "And more..."
      ],
      subServices: [
        { name: "Material Tenders", description: "Tendering for construction materials" },
        { name: "Equipment Tenders", description: "Tender services for construction equipment" },
        { name: "Tools Tenders", description: "Tendering for professional tools" },
        { name: "Safety Equipment Tenders", description: "Tender services for safety gear" },
        { name: "Consumables Tenders", description: "Tendering for construction consumables" },
        { name: "Logistics Tenders", description: "Tender services for supply chain management" },
        {name:" And many more...", description: "" }
      ]
    }
  ];

  const serviceProvisionTenders = [
    {
      title: "Car Hire Tender Services",
      description: "Tendering services for vehicle rental and transport contracts",
      detailedInfo: "We handle tenders for car hire and transport services, ensuring all requirements for fleet quality, maintenance standards, and service reliability are met.",
      features: [
        "Transport tender preparation",
        "Fleet documentation",
        "Service level agreements",
        "Maintenance requirements",
        "Insurance compliance",
        "And more..."
      ]
    },
    {
      title: "Security Services Tender",
      description: "Tendering services for security solutions contracts",
      detailedInfo: "We provide tender services for security contracts including manned guarding, surveillance systems, and security consultancy.",
      features: [
        "Security tender documentation",
        "Personnel requirements",
        "Equipment specifications",
        "Response protocols",
        "Compliance verification",
        "And more..."
      ],
    },
    {
      title: "Cleaning Services Tender",
      description: "Tendering services for professional cleaning contracts",
      detailedInfo: "We handle tenders for commercial and industrial cleaning services, ensuring compliance with cleaning standards and environmental regulations.",
      features: [
        "Cleaning tender preparation",
        "Quality standards",
        "Environmental compliance",
        "Equipment requirements",
        "Staff qualifications",
        "And more..."
      ]
    },
    {
      title: "Consultancy Tender Services",
      description: "Tendering services for expert advisory contracts",
      detailedInfo: "We provide tender services for consultancy contracts in engineering, project management, and business development.",
      features: [
        "Consultancy tender documentation",
        "Expert qualifications",
        "Methodology proposals",
        "Project references",
        "Fee structure development",
        "And more..."
      ]
    }
  ];

  const additionalServiceTenders = [
    {
      title: "Relief Food Supply Tender",
      description: "Tendering services for emergency food distribution contracts",
      detailedInfo: "We handle tenders for relief food supply contracts, ensuring compliance with food quality standards and distribution requirements.",
      features: [
        "Food supply tender preparation",
        "Quality certifications",
        "Storage requirements",
        "Distribution logistics",
        "Emergency response",
        "Health & safety compliance",
        "And more..."
      ]
    },
    {
      title: "Livestock & Cereals Tender",
      description: "Tendering services for agricultural produce supply contracts",
      detailedInfo: "We provide tender services for livestock and cereals supply contracts, ensuring product quality and supply chain reliability.",
      features: [
        "Agricultural tender documentation",
        "Quality verification",
        "Supply chain management",
        "Health certifications",
        "Delivery schedules",
        "And more..."
      ]
    },
    {
      title: "Secretarial Tender Services",
      description: "Tendering services for professional documentation contracts",
      detailedInfo: "We handle tenders for secretarial services including document preparation, filing, and administrative support contracts.",
      features: [
        "Secretarial tender preparation",
        "Confidentiality requirements",
        "Document management",
        "Service level agreements",
        "Compliance standards",
        "And more..."
      ]
    },
    {
      title: "Company Upkeep Tender Services",
      description: "Tendering services for document storage and maintenance contracts",
      detailedInfo: "We provide tender services for company upkeep contracts including document storage, office maintenance, and facility management.",
      features: [
        "Upkeep tender documentation",
        "Storage requirements",
        "Maintenance standards",
        "Security protocols",
        "Service continuity",
        "And more..."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 pt-16 pb-16 px-4 sm:px-6 relative overflow-hidden">
        
        {/* Background Objects - Exact same as before */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-10"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-200 rounded-full opacity-5"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-4 border-blue-100/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-2 border-blue-200/20 rounded-full"></div>
          
          <div className="absolute top-1/2 left-20 grid grid-cols-3 gap-4 opacity-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-blue-400 rounded-full"></div>
            ))}
          </div>
          
          <div className="absolute top-1/4 right-20 w-1 h-48 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-20 w-48 h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
          
          <div className="absolute top-10 right-40 w-2 h-2 bg-blue-300/30 rounded-full"></div>
          <div className="absolute top-60 left-40 w-3 h-3 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-60 w-2 h-2 bg-blue-300/30 rounded-full"></div>
          <div className="absolute bottom-60 left-60 w-3 h-3 bg-blue-400/20 rounded-full"></div>
          
          <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-blue-100/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-128 h-128 border-2 border-blue-100/5 rounded-full"></div>
        </div>

        {/* Banner - Same visual, updated text */}
        <div className="w-full h-[30vh] sm:h-[40vh] mt-3 overflow-hidden shadow-lg relative z-10">
          <Image
            src="/image1.png"
            alt="Tender Services banner"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Tender Services</h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
                Professional tender preparation and submission services
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Civil Engineering Section - Updated text only */}
          <section className="mt-12 sm:mt-20 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Civil Engineering Tender Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Professional tender services for infrastructure projects
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {civilEngineeringTenders.map((service, index) => (
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
                      View Tender Details
                    </button>
                    <button
                      onClick={() => openModal(service, 'contact')}
                      className="flex-1 border border-blue-600 text-blue-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                    >
                      Inquire About Tender
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Provisions - Updated text only */}
          <section className="mt-16 sm:mt-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Service Provision Tender Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Tender services for support and auxiliary service contracts
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceProvisionTenders.map((service, index) => (
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
                      View Tender Details
                    </button>
                    <button
                      onClick={() => openModal(service, 'contact')}
                      className="flex-1 border border-blue-600 text-blue-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                    >
                      Inquire About Tender
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Services - Updated text only */}
          <section className="mt-16 sm:mt-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Additional Tender Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                Specialized tender services for diverse business needs
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServiceTenders.map((service, index) => (
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
                        View Tender Details
                      </button>
                      <button
                        onClick={() => openModal(service, 'contact')}
                        className="flex-1 border border-blue-600 text-blue-600 px-2 py-1 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                      >
                        Inquire About Tender
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section - Updated text only */}
          <section className="mt-16 sm:mt-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 sm:p-10 text-center text-white shadow-xl backdrop-blur-sm bg-blue-900/90 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Need Tender Assistance?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-4 text-sm">
                We provide professional tender preparation and submission services. Contact us for expert tender support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 font-bold px-6 py-2 rounded text-sm hover:bg-blue-50 transition-colors shadow hover:shadow-md"
                >
                  Request Tender Support
                </Link>
                <a
                  href="tel:+254725798258"
                  className="border border-white text-white font-bold px-6 py-2 rounded text-sm hover:bg-white/10 transition-colors"
                >
                  Call for Tender Inquiries
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