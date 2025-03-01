import React from 'react';
import { Phone, Mail, MapPin, Clock, Hammer, HardHat, FlaskRound as Flask, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { construction, Healthcare, PipelineInstallation, oilRig } from '../../images/index'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={oilRig}
            alt="Oil and Gas Industry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Excellence in Construction, Energy & Healthcare
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Leading provider of construction services, oil & gas solutions, and medical equipment
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Hammer className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Construction</h3>
              <p className="text-gray-600 mb-4">
                Complete construction services for commercial, residential, and industrial projects
              </p>
              <Link to="/services" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Flask className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Oil & Gas</h3>
              <p className="text-gray-600 mb-4">
                Specialized solutions and services for the oil and gas industry
              </p>
              <Link to="/services" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Stethoscope className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">
                Premium medical equipment resale and distribution services
              </p>
              <Link to="/services" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "7+ Years Experience",
              "Multi-Industry Expertise",
              "Quality Guaranteed",
              "Global Network"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <HardHat className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-yellow-500 hover:text-yellow-600 font-semibold">
              View All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              construction,
              Healthcare,
              PipelineInstallation
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/projects" className="text-white font-semibold">View Project</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction, oil & gas, or medical equipment needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;