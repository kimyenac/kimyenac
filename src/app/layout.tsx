import Header from "@/component/Header";
import Providers from "@/component/Providers";
import BodyContainer from "@/component/BodyContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        <Providers>
          <Header />
          <BodyContainer>{children}</BodyContainer>
        </Providers>
      </body>
    </html>
  );
}
