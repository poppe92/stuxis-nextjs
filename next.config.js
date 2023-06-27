/** @type {import('next').NextConfig} */
const nextConfig = {

    // Highlight potential problems in the application
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
        ],
    },
}

module.exports = nextConfig

