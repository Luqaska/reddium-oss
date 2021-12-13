import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../functions/gtag";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
