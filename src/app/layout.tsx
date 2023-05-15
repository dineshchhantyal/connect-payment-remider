import "./globals.css";
import { Inter } from "next/font/google";
import { unstable_getServerSession } from "next-auth/next";
import { Component } from "react";
import Header from "@/components/header/defaultHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connect Payment Reminder",
  description: "Connect Payment Reminder",
};

export default async function RootLayout({
  dashboard,
  login,
  children,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  console.log("session", session);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Header logo={"/next.svg"} />
        {session ? dashboard : login}
        {children}
      </body>
    </html>
  );
}
