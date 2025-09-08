import { social } from "@/constants/social_media";
import { Fragment } from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube];

export const SocialMedia = ({ size = 16 }) => {
    return <div className="flex items-center h-full">
        {
            Object.entries(social).map(([key, value], idx) => {
                const Icon = socialIcons[idx];
                return <a
                    key={idx}
                    href={value}
                    className="hover:text-yellow-400 transition-colors p-2"
                    aria-label={`Visit our ${socialIcons[idx].name.replace('Fa', '')}`}
                >
                    <Icon size={size} />
                </a>
            })
        }
    </div>
};
