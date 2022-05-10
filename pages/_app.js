import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Benjamin Velie</title>
        <meta name="description" content="GNU or bust" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
