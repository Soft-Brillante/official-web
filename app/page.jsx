"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaUsers, FaStar, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { HiMenu, HiOutlineAcademicCap } from "react-icons/hi";
import { useRef, useState } from "react";
import { SocialMedia } from "@/components/SocialMedia";

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const refs = {
        Home: useRef(null),
        Courses: useRef(null),
        Placements: useRef(null),
        Services: useRef(null),
        About: useRef(null),
        Contact: useRef(null)
    };

    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const navigationItems = ["Home", "Services", "Courses", "Placements", "About", "Contact"];

    return (
        <main className="flex flex-col items-center w-full">
            {/* Top bar */}
            <header className="w-full h-10 flex items-center bg-gradient-to-r from-primary to-primary/90 text-white">
                <div className="mx-auto w-full h-full max-w-7xl flex justify-between items-center py-3 px-4 sm:px-6">
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
                    <div className="flex items-center space-x-3">
                        <SocialMedia size={16} />
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
                            <span
                                key={item}
                                onClick={() => scrollToRef(refs[item])}
                                className="text-gray-800 hover:text-primary font-medium text-sm tracking-wide transition-colors"
                            >
                                {item}
                            </span>
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
                        <HiMenu size={28} className="text-gray-800 cursor-pointer" />
                    </button>
                </div>

                {/* Mobile menu with dropdown animation */}
                <div
                    className={`${isMenuOpen
                        ? 'max-h-[450px] opacity-100'
                        : 'max-h-0 opacity-0'
                        } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="flex flex-col p-6 space-y-4 bg-white border-t">
                        {navigationItems.map((item) => (
                            <span
                                key={item}
                                onClick={() => scrollToRef(refs[item])}
                                className="text-gray-800 hover:text-primary py-2 text-sm font-medium transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                        <button className="bg-primary text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors mt-2">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full bg-gray-50" ref={refs.Home}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <span className="inline-block bg-primary/10 text-primary px-4 py-3 rounded-full text-sm font-semibold">
                                "Building Tomorrow's Tech Leaders Today"
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

                        </div>
                        <div className="relative flex justify-center">
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
                            { icon: HiOutlineAcademicCap, count: "0", label: "Successful Graduates" },
                            { icon: FaStar, count: "100%", label: "Placement Rate" },
                            { icon: FaUsers, count: "1+", label: "Industry Partners" },
                            { icon: FaRegClock, count: "2+", label: "Years of Excellence" }
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

            {/* Services Section */}
            <section className="w-full py-20 bg-gray-50" ref={refs.Services}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Comprehensive support services to ensure your success throughout your learning journey
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "On-boarding Support",
                                description: "Seamless integration into our program with personalized guidance and setup assistance",
                                icon: "👋"
                            },
                            {
                                title: "1:1 Mentoring",
                                description: "Direct access to industry experts for personalized guidance and problem-solving",
                                icon: "👥"
                            },
                            {
                                title: "Project Experience",
                                description: "Hands-on experience with real-world projects to build a strong portfolio",
                                icon: "💻"
                            },
                            {
                                title: "Interview Preparation",
                                description: "Comprehensive interview training including mock interviews and feedback sessions",
                                icon: "🎯"
                            },
                            {
                                title: "Career Take-off",
                                description: "Dedicated placement support to launch your career in the tech industry",
                                icon: "🚀"
                            },
                            {
                                title: "Continuous Reviews",
                                description: "Regular performance assessments and feedback to track your progress",
                                icon: "📊"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-6">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="w-full py-20 bg-gray-50" ref={refs.Courses}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Professional Courses</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Industry-validated curriculum designed to prepare you for high-growth career opportunities
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {[
                            {
                                title: "MERN Stack Development",
                                image: "/mern.png",
                                description: "Master full-stack development with MongoDB, Express, React & Node.js",
                                features: [
                                    "Frontend Development with React",
                                    "Backend Development with Node.js & Express",
                                    "Database Management with MongoDB",
                                    "API Development & Integration",
                                    "Authentication & Authorization",
                                    "Real-world Project Development"
                                ],
                                placementSupport: {
                                    basic: {
                                        duration: "6 months",
                                        price: "₹49,999",
                                        includes: [
                                            "150+ hours of live training",
                                            "Project-based learning",
                                            "Placement support",
                                            "Certificate of completion"
                                        ]
                                    },
                                    premium: {
                                        duration: "1 year",
                                        price: "₹79,999",
                                        includes: [
                                            "300+ hours of live training",
                                            "Advanced projects & Mentorship",
                                            "Premium placement support",
                                            "Certificate of completion"
                                        ]
                                    }
                                }
                            }
                        ].map((course, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                            >
                                <div className="relative h-40">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <h3 className="text-white text-xl font-bold p-4">{course.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 mb-6">{course.description}</p>
                                    
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold mb-4">Placement Support Features</h4>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {course.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-lg font-bold text-primary">{course.placementSupport.basic.price}</span>
                                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                                    {course.placementSupport.basic.duration}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {course.placementSupport.basic.includes.map((item, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600">• {item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-lg font-bold text-primary">{course.placementSupport.premium.price}</span>
                                                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {course.placementSupport.premium.duration}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {course.placementSupport.premium.includes.map((item, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600">• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placements Section */}
            <section className="w-full py-20 bg-white" ref={refs.Placements}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Our First Placement Coming Soon!</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            We're excited to announce our first placement success story. Stay tuned to meet our pioneering graduate who will pave the way for future success stories.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-gray-50 p-8 rounded-2xl text-center max-w-lg">
                            <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                                <FaUsers className="text-primary text-4xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Who will be first?</h3>
                            <p className="text-gray-600">
                                Our inaugural placement story is in the making. This space will soon showcase our first success story, inspiring future tech professionals.
                            </p>
                            <div className="mt-8">
                                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
                                    Join Our Program
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="w-full py-20 bg-gray-50" ref={refs.About}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-3xl filter blur-3xl"></div>
                            <Image
                                src="/mentor.png"
                                alt="About Soft Brillante"
                                width={600}
                                height={600}
                                className="relative rounded-3xl shadow-xl"
                            />
                        </div>

                        <div className="space-y-8">
                            <span className="inline-block bg-primary/10 text-primary px-4 py-3 rounded-full text-sm font-semibold">
                                About Us
                            </span>
                            <h2 className="text-3xl font-bold">Empowering Tech Careers Through Excellence</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At Soft Brillante, we are committed to shaping the future of technology education. Our comprehensive training programs are designed to bridge the gap between academic learning and industry requirements, ensuring our students are well-prepared for successful careers in technology.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                                    <p className="text-gray-600">To provide industry-leading technology education that transforms careers and creates future-ready professionals.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                                    <p className="text-gray-600">To become the most trusted name in technology education, known for excellence and innovation.</p>
                                </div>
                            </div>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="w-full py-20 bg-white" ref={refs.Contact}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your phone number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map */}
                        <div className="h-[500px] w-full rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125059.55612868187!2d75.73703889726567!3d11.255275899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709729891346!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                            ></iframe>
                        </div>
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
                                <SocialMedia size={18} />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                            <ul className="space-y-4">
                                {navigationItems.map((item) => (
                                    <li key={item}>
                                        <span onClick={() => scrollToRef(refs[item])} className="text-gray-600 hover:text-primary transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6">Courses</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">MERN Stack</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">More Soon...</a></li>
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
                                    <span>Kozhikode, Kerala, India</span>
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
