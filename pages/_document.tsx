import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../functions/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <!-- https://youtu.be/O2C5R3FOWdE -->
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
