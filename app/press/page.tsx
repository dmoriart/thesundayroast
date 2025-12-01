"use client";

import { useState } from "react";
import PressAsset from "./PressAsset";
import epkData from "@/epk_data.json";
import bandData from "@/band_data.json";

export default function PressPage() {
    const [activeBioTab, setActiveBioTab] = useState<"short" | "long">("short");

    return (
        <div className="min-h-screen bg-rock-black text-rock-white">
            {/* Header */}
            <header className="border-b-4 border-rock-red py-8">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tight">
                        {bandData.artist_name}
                    </h1>
                    <p className="text-rock-cream font-mono text-sm uppercase mt-2 tracking-widest">
                        Electronic Press Kit
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Bio Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display uppercase mb-6 text-rock-red border-b border-rock-gray pb-2">
                        Biography
                    </h2>

                    {/* Bio Tabs */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => setActiveBioTab("short")}
                            className={`px-6 py-2 font-mono text-sm uppercase tracking-wider transition-all border-2 ${activeBioTab === "short"
                                    ? "bg-rock-red text-white border-rock-red"
                                    : "bg-transparent text-rock-cream border-rock-cream hover:bg-rock-darkgray"
                                }`}
                        >
                            Short (50 words)
                        </button>
                        <button
                            onClick={() => setActiveBioTab("long")}
                            className={`px-6 py-2 font-mono text-sm uppercase tracking-wider transition-all border-2 ${activeBioTab === "long"
                                    ? "bg-rock-red text-white border-rock-red"
                                    : "bg-transparent text-rock-cream border-rock-cream hover:bg-rock-darkgray"
                                }`}
                        >
                            Long (300 words)
                        </button>
                    </div>

                    {/* Bio Content */}
                    <div className="bg-rock-darkgray border-2 border-rock-gray p-6">
                        <p className="text-rock-cream leading-relaxed text-lg">
                            {activeBioTab === "short" ? epkData.bio.short : epkData.bio.long}
                        </p>
                    </div>
                </section>

                {/* High-Res Assets Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display uppercase mb-6 text-rock-red border-b border-rock-gray pb-2">
                        High-Res Assets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {epkData.assets.map((asset, index) => (
                            <PressAsset
                                key={index}
                                title={asset.title}
                                format={asset.format}
                                size={asset.size}
                                downloadUrl={asset.downloadUrl}
                            />
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display uppercase mb-6 text-rock-red border-b border-rock-gray pb-2">
                        Contact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Management */}
                        <div className="bg-rock-darkgray border-2 border-rock-gray p-6">
                            <h3 className="font-mono text-sm uppercase text-rock-red mb-4 tracking-widest">
                                Management
                            </h3>
                            <p className="text-rock-cream font-bold mb-2">{epkData.contact.management.name}</p>
                            <a
                                href={`mailto:${epkData.contact.management.email}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block mb-1"
                            >
                                {epkData.contact.management.email}
                            </a>
                            <a
                                href={`tel:${epkData.contact.management.phone}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block"
                            >
                                {epkData.contact.management.phone}
                            </a>
                        </div>

                        {/* PR */}
                        <div className="bg-rock-darkgray border-2 border-rock-gray p-6">
                            <h3 className="font-mono text-sm uppercase text-rock-red mb-4 tracking-widest">
                                Press / PR
                            </h3>
                            <p className="text-rock-cream font-bold mb-2">{epkData.contact.pr.name}</p>
                            <a
                                href={`mailto:${epkData.contact.pr.email}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block mb-1"
                            >
                                {epkData.contact.pr.email}
                            </a>
                            <a
                                href={`tel:${epkData.contact.pr.phone}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block"
                            >
                                {epkData.contact.pr.phone}
                            </a>
                        </div>

                        {/* Booking */}
                        <div className="bg-rock-darkgray border-2 border-rock-gray p-6">
                            <h3 className="font-mono text-sm uppercase text-rock-red mb-4 tracking-widest">
                                Booking Agent
                            </h3>
                            <p className="text-rock-cream font-bold mb-2">{epkData.contact.booking.name}</p>
                            <a
                                href={`mailto:${epkData.contact.booking.email}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block mb-1"
                            >
                                {epkData.contact.booking.email}
                            </a>
                            <a
                                href={`tel:${epkData.contact.booking.phone}`}
                                className="text-rock-cream hover:text-rock-red transition-colors text-sm font-mono block"
                            >
                                {epkData.contact.booking.phone}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Back to Website */}
                <div className="text-center pt-8 border-t-2 border-rock-gray">
                    <a
                        href="/"
                        className="inline-block px-8 py-4 bg-rock-red hover:bg-opacity-80 transition-all font-bold uppercase tracking-wider border-2 border-rock-black"
                    >
                        Back to Website
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t-4 border-rock-red py-8 mt-16">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-rock-cream text-sm font-mono uppercase tracking-widest">
                        © 2024 {bandData.artist_name}. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
