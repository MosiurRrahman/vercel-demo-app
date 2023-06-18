import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css//preloader.css";
import "../../public/assets/css/style2.css";
import 'node_modules/react-modal-video/css/modal-video.css';
import { useEffect } from "react";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
     
      <Component {...pageProps} />
    </>
  );
}
