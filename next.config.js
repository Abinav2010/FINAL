/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images: {
    domains : ["biosafe-app.infura-ipfs.io" ,"media.giphy.com","infura-ipfs.io","musify.infura-ipfs.io"],
  },
}; 


module.exports = nextConfig
