export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <div>
            kjfcsda
        </div>
        {children}
    </body>
    </html>
  );
}