import { useEffect, useState } from "react";
import "../styles/main.css";
import "../styles/darkSytle.css";
import Preloader from "@/components/common/preloader";
import Script from "next/script";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  const shouldRenderMainCss =
    router.pathname === "/index-art-light" ||
    router.pathname === "/index-land" ||
    router.pathname === "/index-art-dark";
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      {!loading ? (
        <Preloader />
      ) : (
        <>
          {shouldRenderMainCss ? (
            <link rel="stylesheet" href="../styles/darkSytle.css" />
          ) : (
            <link rel="stylesheet" href="../styles/main.css" />
          )}
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
