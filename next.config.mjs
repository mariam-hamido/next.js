/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com', // domain name of the API
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
