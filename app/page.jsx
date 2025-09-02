"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaUsers, FaStar, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { HiMenu, HiOutlineAcademicCap } from "react-icons/hi";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = ["Home", "Courses", "Placements", "Services", "About", "Contact"];
  const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube];
  
  return (
    <main className="flex flex-col items-center w-full">
      {/* Top bar */}
      <header className="w-full bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="mx-auto w-full max-w-7xl flex justify-between items-center py-3 px-4 sm:px-6">
          <div className="flex items-center space-x-6">
            <a href="tel:+919778144724" className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
              <FaPhoneAlt size={12} />
              <span>+91 9778144724</span>
            </a>
            <a href="mailto:info@softbrillante.com" className="hidden md:flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors">
              <FaEnvelope size={12} />
              <span>info@softbrillante.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            {socialIcons.map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:text-yellow-400 transition-colors p-2"
                aria-label={`Visit our ${Icon.name.replace('Fa', '')}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <Image 
            src="/logo.png"
            alt="Company Logo"
            width={140}
            height={140}
            className="w-28 sm:w-36"
            priority
          />

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-primary font-medium text-sm tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
              Enroll Now
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <HiMenu size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Mobile menu with dropdown animation */}
        <div 
          className={`${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col p-6 space-y-4 bg-white border-t">
            {navigationItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-primary py-2 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors mt-2">
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <span className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold">
                Premier Software Training Institute in Kerala
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Career Through Expert-Led Training
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Comprehensive industry-aligned curriculum with dedicated placement support
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                  Explore Courses
                </button>
                <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-10">
                {[
                  { src: "/startup-india.png", alt: "Startup India Logo", width: 160 },
                  { src: "/asap.png", alt: "ASAP Logo", width: 120 },
                  { src: "/ksum.png", alt: "KSUM Logo", width: 160 }
                ].map((partner) => (
                  <Image 
                    key={partner.alt}
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={60}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-full filter blur-3xl"></div>
              <Image
                src="/hero-image.png"
                alt="Professional training environment"
                width={700}
                height={700}
                className="relative rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: HiOutlineAcademicCap, count: "1000+", label: "Successful Graduates" },
              { icon: FaStar, count: "95%", label: "Placement Rate" },
              { icon: FaUsers, count: "50+", label: "Industry Partners" },
              { icon: FaRegClock, count: "8+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-colors"
              >
                <stat.icon className="mx-auto text-3xl mb-6" />
                <div className="text-2xl font-bold mb-3">{stat.count}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Professional Courses</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Industry-validated curriculum designed to prepare you for high-growth career opportunities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "MERN Stack Development",
                image: "/mern.png",
                options: [
                  { duration: "6 months", price: "49,999" },
                  { duration: "1 year", price: "₹79,999" }
                ]
              },
              { 
                title: "Python Full Stack",
                image: "/python.png",
                options: [
                  { duration: "6 months", price: "49,999" },
                  { duration: "1 year", price: "₹79,999" }
                ]
              },
              { 
                title: "Flutter Development",
                image: "/flutter.png",
                options: [
                  { duration: "6 months", price: "49,999" },
                  { duration: "1 year", price: "₹79,999" }
                ]
              }
            ].map((course, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={`${course.image}`}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {course.options.map((option, optIndex) => (
                      <div key={optIndex} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        {option.duration}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">{course.title}</h3>
                  <div className="flex flex-col gap-4">
                    {course.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{option.price}</span>
                        <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-medium text-sm hover:bg-primary hover:text-white transition-colors">
                          {option.duration}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-white text-gray-800 py-16 overflow-hidden">
        {/* Rotated green background */}
        <div className="absolute inset-0 -skew-y-6 bg-primary/10 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={160}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-600 mb-6">
                Empowering careers through expert-led training and industry-aligned curriculum.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Courses</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">MERN Stack</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Python Full Stack</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Flutter Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Software Testing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a href="tel:+919778144724" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <FaPhoneAlt size={16} />
                  <span>+91 9778144724</span>
                </a>
                <a href="mailto:info@softbrillante.com" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                  <FaEnvelope size={16} />
                  <span>info@softbrillante.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-600">
                  <FaMapMarkerAlt size={16} className="mt-1" />
                  <span>2nd Floor, Carnival Infopark, Kakkanad, Kochi, Kerala 682030</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Soft Brillante. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
