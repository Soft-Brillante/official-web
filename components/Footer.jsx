import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SocialMedia } from "./SocialMedia";

export const Footer = ({ navigationItems }) => {
    return <footer className="relative w-full bg-white text-gray-800 py-16 overflow-hidden">
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
};