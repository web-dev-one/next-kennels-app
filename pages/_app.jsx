import Head from 'next/head';
import "../styles/global.css";
import "../styles/index.css";


export default function App({ Component, pageProps }) {
  return(<>
          <Head>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
           <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />;
        </>
        )
}
