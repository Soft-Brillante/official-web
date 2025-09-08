import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SocialMedia } from "./SocialMedia";

export const TopBar = () => {
    return <header className="w-full h-10 flex items-center bg-gradient-to-r from-primary to-primary/90 text-white">
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
};