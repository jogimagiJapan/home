export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-[#d1d1d1] text-[#4a4a4a]">{children}</div>
  );
}
