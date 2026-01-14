import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdisiDev 👨‍💻",
  description: "Works || AdisiDev",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
