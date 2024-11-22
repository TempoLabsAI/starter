/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: process.env.NEXT_PUBLIC_OUTPUT_MODE,
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    swcPlugins: [[require.resolve("tempo-devtools/swc"), {}]],
  };
}

module.exports = nextConfig;
