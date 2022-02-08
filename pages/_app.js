import { useEffect } from "react";
import "../styles/globals.less";

const setRem = () => {
  require("lib-flexible");
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setRem();
    window.addEventListener("resize", setRem);
  });
  return <Component {...pageProps} />;
}

export default MyApp;
