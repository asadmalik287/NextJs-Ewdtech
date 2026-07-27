/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/services/seo-services', destination: '/seo-services', permanent: true },
      { source: '/services/ecommerce-development', destination: '/ecommerce-development', permanent: true },
      { source: '/services/shopify-development-agency', destination: '/shopify-development-agency', permanent: true },
      { source: '/services/branding-services', destination: '/branding-services', permanent: true },
      { source: '/services/social-media-marketing', destination: '/social-media-marketing', permanent: true },
      { source: '/services/web-development-services', destination: '/web-development-services', permanent: true },
      { source: '/services/ppc-management-services', destination: '/ppc-management-services', permanent: true },
      { source: '/services/lead-generation-services', destination: '/lead-generation-services', permanent: true },
    ];
  },
};

module.exports = nextConfig;