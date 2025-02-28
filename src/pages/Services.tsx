import React from 'react';
import { Hammer, HardHat, Ruler, Wrench, Building, FlaskRound as Flask, Stethoscope, Truck, ShieldCheck } from 'lucide-react';
import drawingbg from '../../images/drawingbg.png';

function Services() {
  const services = [
    {
      icon: <Building className="h-12 w-12 text-yellow-500" />,
      title: "Construction Services",
      description: "Full-service construction including new builds, renovations, and fit-outs for commercial, residential, and industrial spaces."
    },
    {
      icon: <Flask className="h-12 w-12 text-yellow-500" />,
      title: "Oil & Gas Solutions",
      description: "Comprehensive services for the oil and gas industry including equipment supply, maintenance, and technical support."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-yellow-500" />,
      title: "Medical Equipment",
      description: "Premium medical equipment resale and distribution, ensuring high-quality healthcare solutions."
    },
    {
      icon: <Hammer className="h-12 w-12 text-yellow-500" />,
      title: "Project Management",
      description: "Expert project management across all our service areas, ensuring efficient delivery and quality results."
    },
    {
      icon: <HardHat className="h-12 w-12 text-yellow-500" />,
      title: "Technical Consulting",
      description: "Specialized consulting services for construction, oil & gas, and medical equipment sectors."
    },
    {
      icon: <Ruler className="h-12 w-12 text-yellow-500" />,
      title: "Equipment Maintenance",
      description: "Comprehensive maintenance services for construction, oil & gas, and medical equipment."
    },
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Repair Services",
      description: "Professional repair services across all our business sectors."
    },
    {
      icon: <Truck className="h-12 w-12 text-yellow-500" />,
      title: "Logistics & Supply",
      description: "Efficient logistics and supply chain management for all equipment and materials."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-yellow-500" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and safety standards across all our operations."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={drawingbg}
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions in construction, oil & gas, and medical equipment
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Initial meeting to understand your requirements"
              },
              {
                number: "02",
                title: "Analysis",
                description: "Detailed assessment and solution planning"
              },
              {
                number: "03",
                title: "Implementation",
                description: "Professional execution of agreed solutions"
              },
              {
                number: "04",
                title: "Support",
                description: "Ongoing maintenance and support services"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your needs and receive a customized solution
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;