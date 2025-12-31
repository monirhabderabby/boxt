import SmoothScrolling from "@/components/providers/smooth-scroll";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofia = Sofia_Sans({
    variable: "--font-sofia-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "67PROHEAT | Boiler Installation & Repair Experts",
    description:
        "67PROHEAT provides fast, reliable boiler installation, repair, and servicing. Trusted engineers, transparent pricing, and hassle-free heating solutions for your home.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sofia.className}  antialiased`}>
                <SmoothScrolling>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
