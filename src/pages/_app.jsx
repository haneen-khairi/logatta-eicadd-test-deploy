import ThemeConfig from "@/theme";
import Layout from "@/components/layout";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { ToastContainer, Slide } from 'react-toastify';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libraries/react-query";
import HttpHelpers from '../services/helpers';
import { useRouter } from "next/router";
import NProgress from 'nprogress';
import Router from 'next/router';
import UserContextProvider from "@/context/UserProvider";
import Head from "next/head"; 
import { appWithTranslation } from 'next-i18next'; // Import appWithTranslation
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import '../../i18n'; // Import your i18n configuration

 

HttpHelpers.setBaseUrl(process.env.API_URL);

function MyApp(props) {
  const router = useRouter();
  const { Component, pageProps } = props;

  NProgress.configure({
    showSpinner: false,
    trickleRate: 0.1,
    trickleSpeed: 300,
    easing: 'ease',
    speed: 500,
  });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>منصة مخصصة لدعم الأشخاص المصابين بالتوحد والأطفال المصابين بالتوحد.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A platform dedicated to supporting autism people and autism children." />
        <meta name="keywords" content="autism, autism support, autism children, autism people" />
        <meta name="author" content="Your Name or Company" />

        <meta name="description" lang="ar" content="منصة مخصصة لدعم الأشخاص المصابين بالتوحد والأطفال المصابين بالتوحد." />
        <meta name="keywords" lang="ar" content="التوحد, دعم التوحد, أطفال التوحد, الأشخاص المصابين بالتوحد" />
        <meta property="og:title" lang="ar" content="منصة دعم التوحد" />
        <meta property="og:description" lang="ar" content="منصة مخصصة لدعم الأشخاص المصابين بالتوحد والأطفال المصابين بالتوحد." />
        <meta name="twitter:title" lang="ar" content="منصة دعم التوحد" />
        <meta name="twitter:description" lang="ar" content="منصة مخصصة لدعم الأشخاص المصابين بالتوحد والأطفال المصابين بالتوحد." />

        <meta property="og:title" content="Autism Support Platform" />
        <meta property="og:description" content="A platform dedicated to supporting autism people and autism children." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Autism Support Platform" />
        <meta name="twitter:description" content="A platform dedicated to supporting autism people and autism children." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />

        <meta name="robots" content="index, follow" />
      </Head> 
      <UserContextProvider>
        <ThemeConfig>
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              autoClose={4000}
              transition={Slide}
              rtl={router.locale !== 'en'}
              position={router.locale !== 'en' ? 'top-left' : 'top-right'}
              theme='colored'
              hideProgressBar
              style={{ width: '400px', height: 'fit-content' }}
            />
            <Layout>
              <Component key={router.asPath} {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </ThemeConfig>
      </UserContextProvider> 
    </>
  );
}

export default appWithTranslation(MyApp);
