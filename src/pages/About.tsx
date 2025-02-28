import React from 'react';
import { Award, Users, Target, Briefcase } from 'lucide-react';
import {
  futurelogo, landmarklogo, nalogo, nnpclogo, pmclogo, wellscartonlogo, ovatek, safety, seplat, shell, wap, ndpc, nddc
} from '../../images/index'

import constructionbg from '../../images/constructionbg.png';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={constructionbg}
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over 7 years of excellence in construction and property services
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Mosand Herj Ltd. is a Nigerian company registered under the Laws of the Federal Republic of Nigeria (RC No 1276468) to effectively handle Oil and Gas Engineering solutions, Environmental consultancy, Water Engineering and Production, Construction, Marine Logistics and procurement, Dredging and HSE services, with registered office in Port Harcourt, Nigeria. The company is strategically positioned to service clients in every part of the globe.
              </p>
              <p className="text-gray-600 mb-4">
                With our quality equipment and experienced personnel, we are strategically positioned to deliver excellent services in compliance with set standards. Our core focus has always been to provide solutions that transcend the immediate needs of our clients while making their processes better and safer.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Mosand Herj Ltd has offices in Port Harcourt and Abuja. We have a growing clientele list of prominent local corporations such as Future Concerns, Shell Exploration Company, Seplat Energy PLC. , NLNG, Nigerian Nation Petroleum Corporation (NNPC), Landmark, UBTH, Prime Medicals Hospital, the Nigerian Army, Niger Delta Development Commission (NDDC), Windek Procurement, Poly System Nigeria Ltd,Wells Carton Luxury Hotels and Apartment etc.
              </p>
              <p className="text-gray-600">
                We are also the sole Nigerian OEM representatives of Safety Step International Ltd, a premium provider of anti-slip safety products based in Australia as well as Ovatek Inc Canada manufacturers of rigid life rafts for the oil and gas and maritime industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">7+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">34+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-500" />,
                title: "Quality",
                description: "Delivering excellence in every project we undertake"
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-500" />,
                title: "Teamwork",
                description: "Collaborating effectively to achieve the best results"
              },
              {
                icon: <Target className="h-12 w-12 text-yellow-500" />,
                title: "Integrity",
                description: "Maintaining the highest standards of professional conduct"
              },
              {
                icon: <Briefcase className="h-12 w-12 text-yellow-500" />,
                title: "Reliability",
                description: "Consistently delivering on our promises to clients"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
                name: "John Smith",
                position: "Managing Director"
              },
              {
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
                name: "Sarah Johnson",
                position: "Operations Director"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                name: "David Williams",
                position: "Technical Director"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Certifications */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "ISO 9001:2015",
              "CHAS Accredited",
              "SafeContractor",
              "Construction Line"
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="flex flex-col items-center py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl relative">
          <div className="absolute -top-4 left-4 bg-red-500 text-white rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21h6v-2H9v2zm3-20C6.48 1 2 5.48 2 11c0 2.93 1.36 5.57 3.5 7.39V20h2v-2h8v2h2v-1.61C20.64 16.57 22 13.93 22 11c0-5.52-4.48-10-10-10zm-2 15H7v-2h3v2zm7 0h-3v-2h3v2zm-5-4H7v-2h5v2zm7 0h-5v-2h5v2zm-5-4H7V7h5v2zm7 0h-5V7h5v2z" />
            </svg>
          </div>
          <p className="text-gray-600 text-center">
            Here at Mosand Herj, we use established standards alongside innovative approaches to provide
            efficient solutions for our clients.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <img
              src="/path-to-image.jpg"
              alt="Morrison Okunbor"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Morrison Okunbor</h3>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                logo: safety,
                name: "SafetyStep",
                description: "Founded in Auckland New Zealand, this multi-national company is well recognized across the globe as the leading expert in the provision of highest quality integrated pedestrian safety systems that combine the very latest innovations in anti-slip technology and glow in the dark capability. Mosand Herj Ltd. serves as the sole representative of the company here in Nigeria, presenting and selling its products and services to businesses and organizations.",
                link: "https://www.safetystep.com"
              },
              {
                logo: ovatek,
                name: "Ovatek Inc.",
                description: "Since 1995, Ovatek Inc. manufacture the world’s only No Service/Repack egg shaped fiberglass life rafts which is Transport Canada & US Coast guards approved and meets Solas SLA regulations. They have a number of advantages over the conventional inflatable life rafts including the facts that they don’t require the expensive annual inspection and repacking.",
                link: "https://www.ovatek.com"
              }
            ].map((partner, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <p className="text-blue-500">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer">{partner.link}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Leading Organizations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By Leading Organizations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              futurelogo,
              landmarklogo,
              nalogo,
              nnpclogo,
              pmclogo,
              wellscartonlogo,
              seplat,
              shell,
              wap,
              ndpc,
              nddc,

            ].map((logo, index) => (
              <div key={index} className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                <img src={logo} alt={`Logo ${index + 1}`} className="max-w-full max-h-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;