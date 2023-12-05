/** @type {import('next').NextConfig} */
const nextConfig = {
   output:  'export',
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        
      },
      {
        protocol: "https",
        hostname:  "unsplash.com",
        
      },

      

    ],
  },
}

module.exports = nextConfig
