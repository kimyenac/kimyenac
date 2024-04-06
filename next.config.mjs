import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
