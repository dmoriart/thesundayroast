import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "The Sunday Roast - Indie Rock Band from Ireland",
    description: "The Sunday Roast are an indie rock band bringing high-energy performances and infectious melodies to venues across Ireland.",
    keywords: ["The Sunday Roast", "indie rock", "alternative", "Ireland", "band", "live music"],
    openGraph: {
        title: "The Sunday Roast",
        description: "Indie Rock / Alternative band from Ireland",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
