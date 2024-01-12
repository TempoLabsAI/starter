/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    swcPlugins: [[require.resolve("tempo-devtools/swc"), {}]],
  };
}

module.exports = nextConfig;
