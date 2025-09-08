import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export const NavBar = ({ sendWhatsappMessage, scrollToRef, refs, navigationItems}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
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
                        className="text-gray-800 cursor-pointer hover:text-primary font-medium text-sm tracking-wide transition-colors"
                    >
                        {item}
                    </span>
                ))}
                <button onClick={() => sendWhatsappMessage("enroll")} className="bg-primary cursor-pointer text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
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
                        className="text-gray-800 cursor-pointer hover:text-primary py-2 text-sm font-medium transition-colors"
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
};