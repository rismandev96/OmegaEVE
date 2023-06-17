import { OmegaMainNetwork } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={ OmegaMainNetwork }>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
