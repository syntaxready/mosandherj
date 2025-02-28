import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Medville from './pages/Medville';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Router>
            <div className="min-h-screen bg-white">
                <nav className="sticky top-0 z-50 bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <Link to="/" className="flex items-center space-x-3">
                                <div className="flex items-center space-x-3">
                                    <img src="/images/logoblack.png" alt="MOSAND HERJ LTD. Logo" className="w-21 h-20" />
                                </div>
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-8">
                                    <Link to="/services" className="text-gray-600 hover:text-orange-500 transition">Services</Link>
                                    <Link to="/medville" className="text-gray-600 hover:text-orange-500 transition">Medville</Link>
                                    <Link to="/about" className="text-gray-600 hover:text-orange-500 transition">About</Link>
                                    <Link to="/projects" className="text-gray-600 hover:text-orange-500 transition">Projects</Link>
                                    <Link to="/contact" className="text-gray-600 hover:text-orange-500 transition">Contact</Link>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-orange-500 transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/services" className="block text-center text-lg text-gray-600 hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                                <Link to="/medville" className="block text-center text-lg text-gray-600 hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Medville</Link>
                                <Link to="/about" className="block text-center text-lg text-gray-600 hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                <Link to="/projects" className="block text-center text-lg text-gray-600 hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                                <Link to="/contact" className="block text-center text-lg text-gray-600 hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            </div>
                        </div>
                    )}
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/medville" element={<Medville />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <footer className="bg-[#003B5C] text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <img src="/images/logowhite.png" alt="MOSAND HERJ LTD. Logo" className="w-21 h-20" />
                                </div>
                                <p className="text-gray-300">
                                    Providing innovative solutions in construction, oil & gas, and healthcare
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <div className="space-y-2">
                                    <Link to="/services" className="block text-gray-300 hover:text-orange-500">Services</Link>
                                    <Link to="/about" className="block text-gray-300 hover:text-orange-500">About</Link>
                                    <Link to="/projects" className="block text-gray-300 hover:text-orange-500">Projects</Link>
                                    <Link to="/contact" className="block text-gray-300 hover:text-orange-500">Contact</Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                                <div className="space-y-2 text-gray-300">
                                    <p>No 20 Nembe road</p>
                                    <p>Rumuibekwe H/Est, Port Harcourt</p>
                                    <p>Rivers State, Nigeria</p>
                                    <p>+234 806 350 8690</p>
                                    <p>info@mosandherjltd.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
                            <p>&copy; {new Date().getFullYear()} Powered by <a href="https://www.syntaxready.com" className="font-bold" target="_blank" rel="noopener noreferrer">SyntaxReady</a>. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;