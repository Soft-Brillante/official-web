/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "cdn-kmhen.nitrocdn.com"
        }, {
            protocol: "https",
            hostname: "images.unsplash.com"
        }]
    }
};

export default nextConfig;
