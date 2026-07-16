"use client"

import { motion } from "framer-motion"

export default function Footer() {
    const aboutLinks = ["About Clinic", "Our Doctors", "Technology", "Reviews"];
    const serviceLinks = [
        "General Dentistry",
        "Orthodontics",
        "Dental Implants",
        "Pediatric Dentistry",
        "Cosmetic Dentistry",
    ];
    const legalLinks = ["Privacy policy", "Term of use", "Cookie policy"];

    return (
        <footer className="bg-[#1c2560] border border-[#2b3480] text-white px-8 md:px-16 pt-14 pb-8 w-full mx-auto">
            <div className="flex flex-wrap justify-between gap-10">
                {/* Contact info */}
                <div >
                    <p className="text-lg mb-5 leading-snug">
                        245 Madison Avenue, Suite 1203
                        <br />
                        New York, NY 10016
                    </p>
                    <p className="text-lg mb-5">+1 (212) 555-7483</p>
                    <p className="text-lg">info@brightsmiledental.com</p>
                </div>

                {/* Link columns */}
                <div className="flex flex-wrap gap-16 md:gap-24">
                    <div>
                        <h4 className="text-lg font-medium mb-6">About</h4>
                        <ul className="space-y-5">
                            {aboutLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-base font-light text-blue-100 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Services</h4>
                        <ul className="space-y-5">
                            {serviceLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-base font-light text-blue-100 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Legal</h4>
                        <ul className="space-y-5">
                            {legalLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-base font-light text-blue-100 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Brand wordmark */}
            <div className="mt-16 md:mt-24 leading-none">
                <h1 className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[400px] tracking-tight">
                    <span className="text-white">Clear</span>
                    <span className="text-[#cfe0f0]">Dent</span>
                </h1>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between gap-2 text-sm font-light text-blue-100">
                <span>© 2026 Cleardent Clinic</span>
                <span>All rights reserved</span>
            </div>
        </footer>
    );
}