/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gift-landing-page",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
