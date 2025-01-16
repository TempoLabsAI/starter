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
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_ERRORS === "true",
  }
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    swcPlugins: [[require.resolve("tempo-devtools/swc"), {}]],
  };
  // Remove basePath from nextConfig if in Tempo
  delete nextConfig["basePath"];
}

module.exports = nextConfig;
