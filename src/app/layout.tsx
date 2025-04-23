import "./global.css";
import Header from "@/component/Header";
import Providers from "@/component/Providers";
import BodyContainer from "@/component/BodyContainer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body style={{ margin: "0" }}>
        <Providers>
          <Header />
          <BodyContainer>{children}</BodyContainer>
        </Providers>
      </body>
    </html>
  );
}
