/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  // basePath: '/base',
  async rewrites(){
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:4200/images/:path*'
      }
    ]
  },
  images: {
    domains: ['localhost'],
  },
  // async redirects(){
  //   return [
  //     {
  //       source: '/car/1',
  //       destination: '/car/2',
  //       permanent: true
  //     }
  //   ]
  // }
}

module.exports = nextConfig