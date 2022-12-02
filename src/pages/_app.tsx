import '../global/styles/globals';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../global/styles/globals';
import { Toasted } from '../global/styles/toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toasted>
        <ToastContainer
          position="top-center"
          autoClose={3500}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
      </Toasted>
    </>
  );
}
