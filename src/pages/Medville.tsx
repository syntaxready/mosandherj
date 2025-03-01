import React from 'react';
import { hongzhi, galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8, galleryImage9, galleryImage10, galleryImage11, galleryImage12, galleryImage13, galleryImage14, galleryImage15, galleryImage16 } from '../../images/index'

import constructionbg from '../../images/constructionbg.png';

function Medville() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={constructionbg}
            alt="Medville"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Medville</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to Medville, your trusted partner in healthcare construction and services.
          </p>
        </div>
      </div>


      {/* List and Image Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-4">
                <li>Wound Dressing Kit</li>
                <li>Vacuum Sealing Drainage (VSD)</li>
                <li>Vacuum Sealing Supply and Drainage (VSSD)</li>
                <li>Vacuum Assisted Closure Pumps</li>
                <li>Negative Pressure Pump</li>
                <li>Lacuna VSD</li>
              </ul>
            </div>
            <div>
              <img
                src={galleryImage2}
                alt="Our Achievements"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partner</h2>
          <p className="text-center text-gray-600 mb-8">
            We are partners with Guangdong Hongzhi Biological Technology Co Ltd,
            a Chinese company involved in the development of high-function wound repair materials, dedicated to the overall solution of wound treatment.
          </p>
          <div className="flex justify-center">
            <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={hongzhi} alt="Partner 1" className="w-34 h-16 mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Construction",
                description: "Building state-of-the-art healthcare facilities from the ground up."
              },
              {
                title: "Renovations",
                description: "Upgrading and modernizing existing healthcare environments."
              },
              {
                title: "Maintenance",
                description: "Ensuring your facility remains in top condition with regular maintenance services."
              }
            ].map((service, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Gallery */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                src: galleryImage1,
                alt: "Gallery Image 1"
              },
              {
                src: galleryImage2,
                alt: "Gallery Image 2"
              },
              {
                src: galleryImage3,
                alt: "Gallery Image 3"
              },
              {
                src: galleryImage4,
                alt: "Gallery Image 4"
              },
              {
                src: galleryImage5,
                alt: "Gallery Image 5"
              },
              {
                src: galleryImage6,
                alt: "Gallery Image 6"
              },
              {
                src: galleryImage7,
                alt: "Gallery Image 7"
              },
              {
                src: galleryImage8,
                alt: "Gallery Image 8"
              },
              {
                src: galleryImage9,
                alt: "Gallery Image 9"
              },
              {
                src: galleryImage10,
                alt: "Gallery Image 10"
              },
              {
                src: galleryImage11,
                alt: "Gallery Image 11"
              },
              {
                src: galleryImage12,
                alt: "Gallery Image 12"
              },
              {
                src: galleryImage13,
                alt: "Gallery Image 13"
              },
              {
                src: galleryImage14,
                alt: "Gallery Image 14"
              },
              {
                src: galleryImage15,
                alt: "Gallery Image 15"
              },
              {
                src: galleryImage16,
                alt: "Gallery Image 16"
              }
            ].map((image, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1">📞</div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+234 806 3508 690</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1">✉️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@mosandherjltd.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1">📍</div>
                  <div>
                    <h4 className="font-semibold  mb-1">Port Harcourt Address</h4>
                    <p className="text-gray-600">
                      No 20 Nembe road<br />
                      Rumuibekwe H/Est, Port<br />
                      Harcourt, Rivers State<br />
                      <br />
                      No 31 Emekuku St, D-Line, Port Harcourt
                      <br />
                      <br />
                      <h4 className="font-semibold text-black mb-1">Abuja Address</h4>
                      No 1 Kudang Street off
                      <br />
                      Monrovia street Wuse 2 Abuja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medville;