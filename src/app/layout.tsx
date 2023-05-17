import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/DefaultHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connect Payment Reminder",
  description: "Connect Payment Reminder",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Header logo={"/next.svg"} />
        {children}
      </body>
    </html>
  );
}
