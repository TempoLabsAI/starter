import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { TempoDevtools } from "tempo-devtools";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_TEMPO) {
      TempoDevtools.init();
    }
  }, []);
  return <Component {...pageProps} />;
}
