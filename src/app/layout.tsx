import Header from "@/component/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
