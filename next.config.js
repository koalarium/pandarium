/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'standalone', // MUST HAVE FOR PRODUCTION DEPLOYMENT!
}

// module.exports = nextConfig

// ONLY FOR DOCKER (hot refresh)
// DO NOT USE IT WITH PRODUCTION DEPLOYMENT!
// 
module.exports = {
  webpackDevMiddleware: config => {
      config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
      }
      return config
  },
}
