"use client";
import { CalculatorProvider } from "@/context/calculatorContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CalculatorProvider>{children}</CalculatorProvider>;
}
