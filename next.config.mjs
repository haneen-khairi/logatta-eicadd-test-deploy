/** @type {import('next').NextConfig} */
const locales = ['ar'];

const nextConfig = {
    i18n: {
        locales: ['default', ...locales],
        defaultLocale: 'ar',
        localeDetection: false,
      },
      env: {
        API_URL: 'https://mychild.eicadd.com/api',
      },
};

export default nextConfig;
