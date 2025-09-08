"use client";

import Image from "next/image";
import { FaUsers, FaStar, FaRegClock } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { useRef } from "react";
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Placements } from "@/components/Placements";
import { Footer } from "@/components/Footer";
import { Courses } from "@/components/Courses";

const navigationItems = ["Home", "Services", "Courses", "Placements", "About", "Contact"];

export default function HomePage() {
   
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
            const marginTop = -40;
            const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition + marginTop,
                behavior: "smooth"
            });
        }
    }

    return (
        <main className="flex flex-col items-center w-full">
            {/* Top bar */}
            <TopBar />

            {/* Navbar */}
            <NavBar navigationItems={navigationItems} refs={refs} scrollToRef={scrollToRef} />

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
            <Courses refs={refs}/>

            {/* Placements Section */}
            <Placements refs={refs} />

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
            <Footer navigationItems={navigationItems} />
        </main>
    );
}
