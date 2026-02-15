import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Service categories for filtering
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'tender', name: 'Tender Services' },
    { id: 'registration', name: 'Registration' },
    { id: 'financial', name: 'Financial Services' },
    { id: 'digital', name: 'Digital Services' },
    { id: 'company', name: 'Company Secretarial' }
  ];

  const services = [
    // TENDER SERVICES
    { 
      id: 1,
      title: "Bid Compilation", 
      description: "Get assisted in putting all your company documents together by professionals and have winning documents. This service also includes lawyer certification on your document, printing and stamping of filled pages, serialization and pre-evaluation. The service takes 2 days upon client submitting all required documents.",
      charges: [
        { item: "Prequalification", amount: "3,000" },
        { item: "General Supplies", amount: "8,000" },
        { item: "Construction Works", amount: "10,000" },
        { item: "Cleaning & Construction Services", amount: "10,000" }
      ],
      timeline: "2 days",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 2,
      title: "Bill of Quantities", 
      description: "Get a BQ document that is professionally filed by our experienced surveyors in 24 hours.",
      charges: [
        { item: "Basic BQ", amount: "Depends with intensity" },
        { item: "Complex BQ", amount: "Depends with intensity" }
      ],
      timeline: "24 hours",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 3,
      title: "Quotation for Supply Works", 
      description: "We create for you a professionally filed Quotation for supply works in just 24hours.",
      charges: [
        { item: "Standard Quotation", amount: "2,000" }
      ],
      timeline: "24 hours",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 4,
      title: "Technical Proposal", 
      description: "In just 24 hours you get a Technical Proposal that includes: Work Programme, Work Methodology, Traffic Management Plan, Site Layout Plan, Site Based Facilities, Work Safety and Environment Management.",
      charges: [
        { item: "Complete Technical Proposal", amount: "3,000" }
      ],
      timeline: "24 hours",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 5,
      title: "Manual Bid Bonds", 
      description: "Apply for Bid Bonds at your comfort and get a Bid Certificate in under 24 hours.",
      charges: [
        { item: "Bid Bond", amount: "Depends with bid bond amount and Validity Period" }
      ],
      timeline: "24 hours",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 6,
      title: "Tender Profile", 
      description: "Get a company profile that is responsive to tenders which comprises of verifiable Personnel, Experiences, Equipment Lease Agreements, Affidavit and Power of Attorney, Financial Accounts & Cashflow.",
      charges: [
        { item: "Complete Profile", amount: "100,000" }
      ],
      timeline: "3-5 days",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 7,
      title: "Site Visits", 
      description: "We attend Site Visits on your behalf as you focus on growing your business.",
      charges: [
        { item: "Region A: North Eastern, Rift Valley, Coast", amount: "15,000" },
        { item: "Region B: Nyanza, Central, Western, Eastern", amount: "10,000" },
        { item: "Region C: Nairobi", amount: "5,000" }
      ],
      timeline: "As scheduled",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 8,
      title: "IFMIS Tender Uploading", 
      description: "Need help in uploading your tenders on IFMIS? Let's submit your tenders instantly.",
      charges: [
        { item: "Per Upload", amount: "3,000" }
      ],
      timeline: "Instant",
      category: "tender",
      categoryName: "Tender Services"
    },
    { 
      id: 9,
      title: "Tender Updates", 
      description: "Let Zessco update you every week on new Tenders available.",
      charges: [
        { item: "Per Month", amount: "1,000" }
      ],
      timeline: "Weekly",
      category: "tender",
      categoryName: "Tender Services"
    },

    // FINANCIAL SERVICES
    { 
      id: 10,
      title: "Tender Financial Statements", 
      description: "Let's prepare your financial statements for one year in 24 hours for bidding purposes only.",
      charges: [
        { item: "Per Year", amount: "10,000" }
      ],
      timeline: "24 hours",
      category: "financial",
      categoryName: "Financial Services"
    },
    { 
      id: 11,
      title: "KRA Monthly Nil Returns", 
      description: "Our professionals will file your NIL returns as you focus on your company's growth. Avoid penalties. Let us File your Monthly returns.",
      charges: [
        { item: "Monthly Filing", amount: "1,000" }
      ],
      timeline: "Monthly",
      category: "financial",
      categoryName: "Financial Services"
    },

    // REGISTRATION SERVICES
    { 
      id: 12,
      title: "Business Name Registration", 
      description: "Get your business name registered within Four working Days.",
      charges: [
        { item: "Business Name Registration", amount: "5,000" }
      ],
      timeline: "4 working days",
      category: "registration",
      categoryName: "Registration"
    },
    { 
      id: 13,
      title: "Private Limited Company", 
      description: "We help you register your Limited company between 24 hrs. The package includes: Registration Cert, CR12, CR1, CR2, CR8, Statement of Nominal Capital, Beneficial Ownership Declaration.",
      charges: [
        { item: "0 to 1M", amount: "7,000" },
        { item: "1M to 5M", amount: "10,000" },
        { item: "5M to 10M", amount: "15,000" },
        { item: "10M to 50M", amount: "25,000" },
        { item: "50M to 100M", amount: "50,000" },
        { item: "100M+", amount: "100,000" }
      ],
      timeline: "24 hours",
      category: "registration",
      categoryName: "Registration"
    },
    { 
      id: 14,
      title: "NGO Registration", 
      description: "Register your NGO within 8 months.",
      charges: [
        { item: "NGO Registration", amount: "70,000" }
      ],
      timeline: "8 months",
      category: "registration",
      categoryName: "Registration"
    },
    { 
      id: 15,
      title: "AGPO Registration & Renewal", 
      description: "Register for AGPO (Youth, Women & People with Disabilities) in 24hrs upon submitting all relevant documents.",
      charges: [
        { item: "Registration/Renewal", amount: "4,000" }
      ],
      timeline: "24 hours",
      category: "registration",
      categoryName: "Registration"
    },
    { 
      id: 16,
      title: "NCA Registration", 
      description: "Let's facilitate your NCA registration.",
      charges: [
        { item: "NCA 1", amount: "200,000" },
        { item: "NCA 2", amount: "150,000" },
        { item: "NCA 3", amount: "80,000" },
        { item: "NCA 4", amount: "50,000" },
        { item: "NCA 5", amount: "30,000" },
        { item: "NCA 6", amount: "20,000" },
        { item: "NCA 7", amount: "10,000" },
        { item: "NCA 8", amount: "5,000" },
        { item: "NCA 1 (Foreign)", amount: "500,000" },
        { item: "Category Upgrade", amount: "5,000" },
        { item: "New Application", amount: "5,000" },
        { item: "Appeals", amount: "5,000" }
      ],
      timeline: "24 hours (NCA 3-8), 3 days (NCA 1-2)",
      category: "registration",
      categoryName: "Registration"
    },

    // COMPANY SECRETARIAL
    { 
      id: 17,
      title: "Change of Directors", 
      description: "Add or remove directors in your company with ease within 4 working days.",
      charges: [
        { item: "Local Directors", amount: "20,000" },
        { item: "Foreign Directors", amount: "50,000" }
      ],
      timeline: "4 working days",
      category: "company",
      categoryName: "Company Secretarial"
    },
    { 
      id: 18,
      title: "Business Name to Limited Company", 
      description: "We help you upgrade your business name to a Limited Company.",
      charges: [
        { item: "Upgrade Service", amount: "20,000" }
      ],
      timeline: "5-7 working days",
      category: "company",
      categoryName: "Company Secretarial"
    },
    { 
      id: 19,
      title: "Limited Company Cessation", 
      description: "Get your Cessation Company Certificate within six (6) months.",
      charges: [
        { item: "Cessation Service", amount: "30,000" }
      ],
      timeline: "6 months",
      category: "company",
      categoryName: "Company Secretarial"
    },
    { 
      id: 20,
      title: "CR12 Renewal", 
      description: "Renew your CR12 Instantly.",
      charges: [
        { item: "Renewal", amount: "1,500" }
      ],
      timeline: "Instant",
      category: "company",
      categoryName: "Company Secretarial"
    },
    { 
      id: 21,
      title: "Company Secretarial Duties", 
      description: "Let Zessco be responsible for safe keeping, storage and Filling of all your company Documents and update you promptly on all required updates for a whole year.",
      charges: [
        { item: "Annual Retainership", amount: "10,000" }
      ],
      timeline: "1 year",
      category: "company",
      categoryName: "Company Secretarial"
    },

    // DIGITAL SERVICES
    { 
      id: 22,
      title: "IFMIS Account Registration", 
      description: "With Zessco International, it takes less than 2 hrs to register for an IFMIS account.",
      charges: [
        { item: "Registration", amount: "5,000" }
      ],
      timeline: "2 hours",
      category: "digital",
      categoryName: "Digital Services"
    },
    { 
      id: 23,
      title: "IFMIS Account Recovery", 
      description: "Let's help you recover your IFMIS account credentials within 2hrs.",
      charges: [
        { item: "Recovery Service", amount: "3,000" }
      ],
      timeline: "2 hours",
      category: "digital",
      categoryName: "Digital Services"
    },
    { 
      id: 24,
      title: "eCitizen Company Linking", 
      description: "Let us help you link your company to eCitizen in under 24hrs.",
      charges: [
        { item: "Linking Service", amount: "Depends with the Returns" }
      ],
      timeline: "24 hours",
      category: "digital",
      categoryName: "Digital Services"
    },
    { 
      id: 25,
      title: "Web Design & Development", 
      description: "Our team of Web Designers will create for you a Website that meets your company needs which is responsive on any device.",
      charges: [
        { item: "From", amount: "40,000" }
      ],
      timeline: "2-3 weeks",
      category: "digital",
      categoryName: "Digital Services"
    },

    // OTHER SERVICES
    { 
      id: 26,
      title: "Lease a Company", 
      description: "Lease a company from us and start tendering.",
      notes: "16% VAT to be retained by the firm • 3% Commission to be retained by Zessco • 81% to be retained by leasee",
      charges: [
        { item: "Company Lease", amount: "Custom arrangement" }
      ],
      timeline: "24-48 hours",
      category: "other",
      categoryName: "Business Services"
    },
    { 
      id: 27,
      title: "Business Consultancy", 
      description: "Book an appointment with our team of Experts and get advice on everything Business.",
      charges: [
        { item: "Per Session", amount: "10,000" }
      ],
      timeline: "By appointment",
      category: "other",
      categoryName: "Consultancy"
    },
    { 
      id: 28,
      title: "Corporate Company Profile", 
      description: "Get a professionally designed Company Profile for Corporate and SMEs.",
      charges: [
        { item: "Basic", amount: "10,000" },
        { item: "Business", amount: "15,000" },
        { item: "Business Plus", amount: "20,000" }
      ],
      timeline: "2-3 days",
      category: "other",
      categoryName: "Design Services"
    },
    { 
      id: 29,
      title: "Lease Agreement (Ministry of Transport)", 
      description: "We facilitate the acquisition of ministry of transport and infrastructure lease agreements in just three (3) days.",
      charges: [
        { item: "Lease Agreement", amount: "2,500" }
      ],
      timeline: "3 days",
      category: "other",
      categoryName: "Legal Documents"
    },
    { 
      id: 30,
      title: "Private Equipment Lease Agreement", 
      description: "Get a 1-year Equipment Lease Agreement with up to 5 Log books in 2 days.",
      charges: [
        { item: "Lease Agreement", amount: "50,000" }
      ],
      timeline: "2 days",
      category: "other",
      categoryName: "Legal Documents"
    },
    { 
      id: 31,
      title: "Physical Stamp", 
      description: "We help you get a physical stamp for your business.",
      charges: [
        { item: "Self Inking", amount: "3,000" },
        { item: "Wooden", amount: "400" }
      ],
      timeline: "24 hours",
      category: "other",
      categoryName: "Office Supplies"
    },
    { 
      id: 32,
      title: "Company Postal Address", 
      description: "Get a company postal address for a period of 1 year within one day.",
      charges: [
        { item: "Shared Address", amount: "4,000" },
        { item: "Personal Address", amount: "15,000" }
      ],
      timeline: "24 hours",
      category: "other",
      categoryName: "Office Services"
    },
    { 
      id: 33,
      title: "Company Seal", 
      description: "Get a physical company seal in 24 working hours.",
      charges: [
        { item: "Normal", amount: "3,000" },
        { item: "Corporate", amount: "5,000" }
      ],
      timeline: "24 hours",
      category: "other",
      categoryName: "Office Supplies"
    },
    { 
      id: 34,
      title: "Startup Package", 
      description: "Get all the accessories you need to kick start your company. This will include: Company Profile, AGPO, Business Permit.",
      charges: [
        { item: "Basic", amount: "20,000" },
        { item: "Business", amount: "35,000" }
      ],
      timeline: "3-5 days",
      category: "other",
      categoryName: "Startup Services"
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Group services by category
  const tenderServices = services.filter(s => s.category === 'tender');
  const registrationServices = services.filter(s => s.category === 'registration');
  const financialServices = services.filter(s => s.category === 'financial');
  const digitalServices = services.filter(s => s.category === 'digital');
  const companyServices = services.filter(s => s.category === 'company');
  const otherServices = services.filter(s => s.category === 'other');

  // Color schemes for different sections
  const sectionColors = {
    tender: {
      bg: 'bg-gradient-to-br from-gray-50 to-blue-50',
      header: 'bg-gradient-to-r from-blue-600 to-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700',
      accent: 'blue'
    },
    registration: {
      bg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      header: 'bg-gradient-to-r from-amber-600 to-yellow-600',
      button: 'bg-amber-600 hover:bg-amber-700',
      accent: 'amber'
    },
    financial: {
      bg: 'bg-gradient-to-br from-emerald-50 to-green-50',
      header: 'bg-gradient-to-r from-emerald-600 to-green-600',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      accent: 'emerald'
    },
    digital: {
      bg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      header: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      accent: 'purple'
    },
    company: {
      bg: 'bg-gradient-to-br from-rose-50 to-red-50',
      header: 'bg-gradient-to-r from-rose-600 to-red-600',
      button: 'bg-rose-600 hover:bg-rose-700',
      accent: 'rose'
    },
    other: {
      bg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      header: 'bg-gradient-to-r from-teal-600 to-cyan-600',
      button: 'bg-teal-600 hover:bg-teal-700',
      accent: 'teal'
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen pt-16 pb-16 px-4 sm:px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-10 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Our Services
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Zessco International Consultancy offers comprehensive, efficient, and dependable services tailored to your supply chain needs.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 mt-4"></div>
              </div>
              
              {/* Company Contact Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 min-w-[300px] shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Zessco International
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-gray-500 min-w-[70px]">Avenue:</span>
                    <span className="text-gray-800 font-medium">Moi Avenue</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gray-500 min-w-[70px]">Building:</span>
                    <span className="text-gray-800 font-medium">Tumaini House, Opposite Kencom</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gray-500 min-w-[70px]">Location:</span>
                    <span className="text-gray-800 font-medium">Nairobi - Kenya</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gray-500 min-w-[70px]">Postal:</span>
                    <span className="text-gray-800 font-medium">P.O. Box 6487-00200</span>
                  </p>
                  <div className="border-t border-gray-200 my-3 pt-3">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-semibold text-gray-900">+254 724 210375</span>
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">info@zesscointernational.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => scrollToSection('tender-services')}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Tender Services
            </button>
            <button
              onClick={() => scrollToSection('registration-services')}
              className="px-5 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition text-sm font-medium shadow-sm"
            >
              Registration
            </button>
            <button
              onClick={() => scrollToSection('financial-services')}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition text-sm font-medium shadow-sm"
            >
              Financial Services
            </button>
            <button
              onClick={() => scrollToSection('digital-services')}
              className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium shadow-sm"
            >
              Digital Services
            </button>
            <button
              onClick={() => scrollToSection('company-services')}
              className="px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition text-sm font-medium shadow-sm"
            >
              Company Secretarial
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? category.id === 'all' 
                      ? 'bg-gray-900 text-white shadow-md'
                      : category.id === 'tender' ? 'bg-blue-600 text-white shadow-md'
                      : category.id === 'registration' ? 'bg-amber-600 text-white shadow-md'
                      : category.id === 'financial' ? 'bg-emerald-600 text-white shadow-md'
                      : category.id === 'digital' ? 'bg-purple-600 text-white shadow-md'
                      : category.id === 'company' ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-teal-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {category.name}
                {category.id !== 'all' && (
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white bg-opacity-20'
                      : 'bg-gray-200'
                  }`}>
                    {services.filter(s => s.category === category.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* TENDER SERVICES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'tender') && (
            <div id="tender-services" className="mb-16">
              <div className={`${sectionColors.tender.bg} rounded-3xl p-8 border border-blue-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.tender.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tender Services</h2>
                    <p className="text-blue-700">Complete tender support from documentation to submission</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tenderServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.tender}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* REGISTRATION SERVICES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'registration') && (
            <div id="registration-services" className="mb-16">
              <div className={`${sectionColors.registration.bg} rounded-3xl p-8 border border-amber-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.registration.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Registration Services</h2>
                    <p className="text-amber-700">Get your business officially registered</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {registrationServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.registration}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FINANCIAL SERVICES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'financial') && (
            <div id="financial-services" className="mb-16">
              <div className={`${sectionColors.financial.bg} rounded-3xl p-8 border border-emerald-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.financial.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Financial Services</h2>
                    <p className="text-emerald-700">Professional financial management solutions</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {financialServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.financial}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DIGITAL SERVICES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'digital') && (
            <div id="digital-services" className="mb-16">
              <div className={`${sectionColors.digital.bg} rounded-3xl p-8 border border-purple-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.digital.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Digital Services</h2>
                    <p className="text-purple-700">Modern digital solutions for your business</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {digitalServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.digital}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* COMPANY SECRETARIAL SECTION */}
          {(activeCategory === 'all' || activeCategory === 'company') && (
            <div id="company-services" className="mb-16">
              <div className={`${sectionColors.company.bg} rounded-3xl p-8 border border-rose-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.company.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Company Secretarial</h2>
                    <p className="text-rose-700">Expert corporate governance support</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {companyServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.company}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* OTHER SERVICES SECTION */}
          {(activeCategory === 'all' || activeCategory === 'other') && (
            <div id="other-services" className="mb-16">
              <div className={`${sectionColors.other.bg} rounded-3xl p-8 border border-teal-200 shadow-lg`}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 ${sectionColors.other.header} rounded-2xl flex items-center justify-center shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Business Support Services</h2>
                    <p className="text-teal-700">Additional services to support your business</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {otherServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      openModal={openModal}
                      colorScheme={sectionColors.other}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Support Note */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-blue-50 via-amber-50 to-emerald-50 rounded-lg px-6 py-4 border border-gray-200">
              <p className="text-gray-700">
                <span className="font-semibold">24/7 Support:</span> Always available when you need us
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Call us: <span className="font-semibold">+254 724 210375</span> | Email: info@zesscointernational.com
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <ServiceModal 
          service={selectedService} 
          closeModal={closeModal} 
          colorScheme={sectionColors[selectedService.category] || sectionColors.other}
        />
      )}

      <Footer />
    </>
  );
}

// Service Card Component
function ServiceCard({ service, openModal, colorScheme }) {
  return (
    <div 
      className="bg-white rounded-xl border-2 p-6 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ borderColor: colorScheme ? `var(--${colorScheme.accent}-200)` : '#e5e7eb' }}
    >
      <div className="flex-grow">
        <div className={`inline-block px-3 py-1 ${colorScheme.header} text-white text-xs font-medium rounded-full mb-3 shadow-sm`}>
          {service.categoryName}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3 line-clamp-2">
          {service.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {service.description}
        </p>
        
        {/* Price Preview */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">Starting from: </span>
          <span className={`text-lg font-bold`} style={{ color: colorScheme ? `var(--${colorScheme.accent}-600)` : '#111827' }}>
            KES {service.charges[0]?.amount.includes('Depends') ? 'Varies' : service.charges[0]?.amount}
          </span>
        </div>

        {/* Timeline Badge */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{service.timeline}</span>
        </div>
      </div>

      {/* View Details Button */}
      <button
        onClick={() => openModal(service)}
        className={`w-full mt-4 px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium text-white ${colorScheme.button} shadow-md hover:shadow-lg`}
      >
        <span>View Details & Pricing</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// Service Modal Component
function ServiceModal({ service, closeModal, colorScheme }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={closeModal}
      ></div>

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
          
          {/* Modal Header with gradient */}
          <div className={`sticky top-0 ${colorScheme.header} px-8 py-6 flex justify-between items-start text-white`}>
            <div>
              <span className="text-sm font-medium text-white text-opacity-90 uppercase tracking-wider">
                {service.categoryName}
              </span>
              <h2 className="text-2xl font-bold mt-1">
                {service.title}
              </h2>
            </div>
            <button
              onClick={closeModal}
              className="text-white hover:text-white text-opacity-80 transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-8 py-6">
            {/* Description Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: `var(--${colorScheme.accent}-600)` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Service Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-8 rounded-xl p-5" style={{ backgroundColor: `var(--${colorScheme.accent}-50)` }}>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" style={{ color: `var(--${colorScheme.accent}-600)` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="text-sm font-medium text-gray-500">Estimated Timeline</span>
                  <p className="text-lg font-semibold text-gray-900">{service.timeline}</p>
                </div>
              </div>
            </div>

            {/* Special Notes (if any) */}
            {service.notes && (
              <div className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Information
                </h3>
                <p className="text-gray-700 text-sm">{service.notes}</p>
              </div>
            )}

            {/* Pricing Table */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: `var(--${colorScheme.accent}-600)` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing Structure
              </h3>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Item / Category
                      </th>
                      <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Charges (KES)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {service.charges.map((charge, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {charge.item}
                        </td>
                        <td className="px-6 py-4 text-sm text-right font-medium">
                          <span style={{ color: `var(--${colorScheme.accent}-600)` }}>
                            {charge.amount.includes('Depends') || charge.amount.includes('Varies') 
                              ? charge.amount 
                              : `KES ${charge.amount}`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Steps */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" style={{ color: `var(--${colorScheme.accent}-600)` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How to Apply
              </h3>
              
              <div className="space-y-4">
                {[
                  { step: 1, title: "Contact Us", description: `Reach out via phone at +254 724 210375 or email info@zesscointernational.com` },
                  { step: 2, title: "Submit Required Documents", description: "Provide all necessary documentation as per our checklist" },
                  { step: 3, title: "Make Payment", description: "Process payment via M-PESA Paybill or Bank Transfer" },
                  { step: 4, title: "Service Delivery", description: `Receive completed service within ${service.timeline}` }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white`}
                         style={{ backgroundColor: `var(--${colorScheme.accent}-600)` }}>
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-5">
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Close
              </button>
              <a
                href="tel:+254724210375"
                className={`px-6 py-2.5 text-white rounded-lg transition-colors font-medium inline-flex items-center justify-center gap-2 ${colorScheme.button}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Apply
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}