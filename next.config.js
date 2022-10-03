/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.imagekit.io',
//       },
//     ],
//   },
// }

// module.exports = {
//   images: {
//     domains: ['https://ik.imagekit.io'],
//   },
// }