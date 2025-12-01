"use client";

import Image from "next/image";
import bandData from "@/band_data.json";
import { useState, useEffect } from "react";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Account for nav height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen">
            {/* Navigation Banner */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-rock-black shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <button onClick={() => scrollToSection('home')} className="text-rock-red font-display uppercase text-2xl tracking-wider hover:text-rock-cream transition-colors">
                        {bandData.artist_name}
                    </button>
                    <div className="flex items-center space-x-6">
                        <button onClick={() => scrollToSection('listen')} className="text-rock-cream hover:text-rock-red transition-colors uppercase font-bold text-sm hidden md:block">
                            Listen
                        </button>
                        {bandData.tour_dates && bandData.tour_dates.length > 0 && (
                            <button onClick={() => scrollToSection('tour')} className="text-rock-cream hover:text-rock-red transition-colors uppercase font-bold text-sm hidden md:block">
                                Tour
                            </button>
                        )}
                        {bandData.social_links.instagram && (
                            <a
                                href={bandData.social_links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rock-cream hover:text-rock-red transition-colors uppercase font-bold text-sm hidden md:block"
                            >
                                Instagram
                            </a>
                        )}
                        {bandData.social_links.tiktok && (
                            <a
                                href={bandData.social_links.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rock-cream hover:text-rock-red transition-colors uppercase font-bold text-sm hidden md:block"
                            >
                                TikTok
                            </a>
                        )}
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={`/images/${bandData.hero_image}`}
                        alt={`${bandData.artist_name} band photo`}
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-6xl">
                    <p className="text-rock-red uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4">
                        {bandData.genre}
                    </p>
                    <h1 className="text-hero font-display uppercase rock-text mb-6 guitar-string-hover cursor-pointer">
                        {bandData.artist_name}
                    </h1>
                    <p className="text-lg md:text-xl text-rock-cream max-w-3xl mx-auto leading-relaxed mb-8">
                        {bandData.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center flex-wrap">
                        {bandData.social_links.instagram && (
                            <a
                                href={bandData.social_links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-rock-red hover:bg-opacity-80 transition-all font-bold uppercase tracking-wider text-sm gritty-border"
                            >
                                Instagram
                            </a>
                        )}
                        {bandData.social_links.tiktok && (
                            <a
                                href={bandData.social_links.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-rock-red hover:bg-opacity-80 transition-all font-bold uppercase tracking-wider text-sm gritty-border"
                            >
                                TikTok
                            </a>
                        )}
                        {bandData.social_links.breaking_tunes && (
                            <a
                                href={bandData.social_links.breaking_tunes}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-rock-red hover:bg-opacity-80 transition-all font-bold uppercase tracking-wider text-sm gritty-border"
                            >
                                Listen Now
                            </a>
                        )}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg
                        className="w-6 h-6 text-rock-red"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* LISTEN SECTION */}
            {bandData.spotify_embed_url && (
                <section id="listen" className="relative bg-rock-darkgray py-20 md:py-32 noise-overlay">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-5xl md:text-7xl font-display uppercase text-center mb-12 rock-text">
                            Listen
                        </h2>
                        <div className="gritty-border p-2 bg-rock-black">
                            <iframe
                                className="w-full h-[380px] md:h-[450px]"
                                src={bandData.spotify_embed_url}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>
            )}

            {/* TOUR SECTION */}
            {bandData.tour_dates && bandData.tour_dates.length > 0 && (
                <section id="tour" className="relative bg-rock-black py-20 md:py-32 noise-overlay">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-5xl md:text-7xl font-display uppercase text-center mb-16 rock-text">
                            Tour Dates
                        </h2>

                        {/* Tour Table */}
                        <div className="gritty-border bg-rock-darkgray overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-rock-red border-b-4 border-rock-black">
                                        <th className="text-left p-4 md:p-6 font-display uppercase text-lg md:text-xl tracking-wider">
                                            Date
                                        </th>
                                        <th className="text-left p-4 md:p-6 font-display uppercase text-lg md:text-xl tracking-wider hidden md:table-cell">
                                            Venue
                                        </th>
                                        <th className="text-left p-4 md:p-6 font-display uppercase text-lg md:text-xl tracking-wider">
                                            City
                                        </th>
                                        <th className="text-right p-4 md:p-6 font-display uppercase text-lg md:text-xl tracking-wider">
                                            Tickets
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bandData.tour_dates.map((show, index) => (
                                        <tr
                                            key={index}
                                            className="border-b-2 border-rock-gray hover:bg-rock-gray transition-colors"
                                        >
                                            <td className="p-4 md:p-6 font-bold text-rock-cream text-lg md:text-xl">
                                                {show.date}
                                            </td>
                                            <td className="p-4 md:p-6 text-rock-white hidden md:table-cell text-lg">
                                                {show.venue}
                                            </td>
                                            <td className="p-4 md:p-6 text-rock-white text-lg">
                                                <div className="md:hidden text-sm text-rock-cream mb-1">
                                                    {show.venue}
                                                </div>
                                                {show.city}
                                            </td>
                                            <td className="p-4 md:p-6 text-right">
                                                <a
                                                    href={show.ticket_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-4 md:px-6 py-2 md:py-3 bg-rock-red hover:bg-opacity-80 transition-all font-bold uppercase text-xs md:text-sm tracking-wider border-2 border-rock-black"
                                                >
                                                    Buy
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* FOOTER */}
            <footer className="bg-rock-black border-t-4 border-rock-red py-12 text-center">
                <p className="text-rock-cream text-sm uppercase tracking-widest">
                    © 2024 {bandData.artist_name}. All Rights Reserved.
                </p>
            </footer>
        </main>
    );
}
