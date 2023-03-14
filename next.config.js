/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains:['cdn.sanity.io', "cdn.pixabay.com", "via.placeholder.com"]
  },
  reactStrictMode: true,
  experimental: {
    appDir:true
  }
}
