import { Sora } from "next/font/google";
import "./globals.css";

const outfit = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
})

export const metadata = {
    title: "Soft Brillante",
    description: "Discover the best software development services",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased bg-white dark:bg-gray-900`}>
                {children}
            </body>
        </html>
    );
}
