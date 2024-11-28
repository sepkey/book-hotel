/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lihegjbhoxaghjpuduaa.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Septel-Rooms/**",
      },
    ],
  },
};

export default nextConfig;
