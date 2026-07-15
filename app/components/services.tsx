"use client"

import { motion } from "framer-motion"
import { Layers, ArrowUpRight } from "lucide-react"

export default function Services() {
    return (
        <div className="px-15 mt-50 flex flex-col gap-7 mb-50">
            <div className="flex justify-between items-center">
                <motion.div className="flex items-center text-center gap-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Layers className="w-7 h-7 text-black" />
                    <span className="text-[#1F1F1F] text-3xl"
                    >
                        About Us
                    </span>
                </motion.div>
                <motion.div className="text-[#1F1F1F] text-6xl max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 3 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Comprehensive diagnostics, treatment & aesthetic solutions
                </motion.div>
            </div>

            {/* Three equal-height columns */}
            <div className="flex items-stretch gap-6 mt-10">
                {/* Column 1: Stat card (left) */}
                <div className="w-95 flex-shrink-0">
                    <div className="bg-white rounded-3xl shadow-sm p-8 h-full flex flex-col items-center text-center">
                        {/* Main stat */}
                        <motion.h1 className="text-7xl text-[#1F1F1F] tracking-tight"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            5,000+
                        </motion.h1>
                        <motion.p className="text-[#787878] text-lg mt-2 leading-snug"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            successful treatments
                            <br />
                            performed
                        </motion.p>

                        {/* Bubbles */}
                        <div className="mt-15 flex flex-col gap-7 w-full">
                            <motion.div className="self-start bg-[#6F97C2] text-white text-lg font-medium px-5 py-2 rounded-full"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Preventive Care
                            </motion.div>

                            <motion.div className="self-end bg-[#AECDE2] text-[#1F1F1F] text-lg font-medium px-5 py-2 rounded-full"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}>
                                Teeth Whitening
                            </motion.div>

                            <motion.div className="self-start bg-white text-[#1F1F1F] text-lg font-medium px-5 py-2 rounded-full"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Pediatric Dentistry
                            </motion.div>

                            <motion.div className="self-end bg-[#D9E5EE] text-[#1F1F1F] text-lg font-medium px-5 py-2 rounded-full"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}>
                                Oral Surgery
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Orthodontics image card (right) */}
                <div className="flex-1">
                    <div className="relative w-full h-full min-h-[560px] rounded-3xl overflow-hidden shadow-sm">
                        {/* Background image */}
                        <motion.img
                            src="/services-1.png"
                            alt="Orthodontics"
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />

                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0" />

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between">
                            {/* Top: badge + title */}
                            <div className="mt-6 ml-6">
                                <motion.span className="inline-block bg-white backdrop-blur-sm text-[#1F1F1F] text-md px-4 py-1.5 rounded-full"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.75 }}
                                    viewport={{ once: true, amount: 0.3 }}>
                                    Top popular
                                </motion.span>
                                <motion.h1 className="text-5xl text-[#1F1F1F] mt-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.45 }}
                                    viewport={{ once: true, amount: 0.3 }}>
                                    Orthodontics
                                </motion.h1>
                            </div>

                            {/* Bottom: description + arrow button */}
                            <div className="flex justify-between items-end">
                                <motion.p className="text-[#1F1F1F] text-2xl max-w-md ml-6 mb-6 leading-snug"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.75 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Modern braces and clear aligners for balanced, healthy smiles.
                                </motion.p>
                                <motion.button
                                    type="button"
                                    aria-label="View dental treatment details"
                                    className="h-17 w-22 rounded-tl-2xl bg-blue-900/90 hover:bg-blue-900 transition-colors flex items-center justify-center shadow-md"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.45 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <ArrowUpRight className="h-7 w-7 text-white hover:h-9 hover:w-9 transition-all" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Two stacked cards (Implantology = top, Digital Dentistry = bottom) */}
                <div className="flex flex-col gap-6 flex-1">
                    {/* Implantology (top) */}
                    <div className="relative flex-1 rounded-3xl shadow-sm p-6 bg-cover bg-center flex flex-col justify-between">
                        {/* Arrow button */}
                        <motion.button
                            type="button"
                            aria-label="Learn more"
                            className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-blue-900/90 hover:bg-blue-900 transition-colors flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </motion.button>

                        {/* Title */}
                        <motion.h1 className="text-4xl text-[#1F1F1F] pr-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Implantology
                        </motion.h1>

                        {/* Description */}
                        <motion.p className="text-[#1F1F1F] max-w-sm text-xl leading-relaxed mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Advanced dental implants and full-mouth restorations with precise
                            digital planning.
                        </motion.p>
                    </div>

                    {/* Digital Dentistry (bottom) */}
                    <motion.div
                        className="relative flex-1 rounded-3xl shadow-sm p-6 bg-cover bg-center flex flex-col justify-between bg-no-repeat"
                        style={{ backgroundImage: "url('/header-2.jpg')" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.75 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Arrow button */}
                        <motion.button
                            type="button"
                            aria-label="Learn more"
                            className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-blue-900/90 hover:bg-blue-900 transition-colors flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </motion.button>

                        {/* Title */}
                        <motion.h1 className="text-4xl text-[#1F1F1F] pr-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.05 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Digital Dentistry
                        </motion.h1>

                        {/* Description */}
                        <motion.p className="text-[#1F1F1F] max-w-sm text-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.25 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            3D diagnostics, digital scanning, and precision-guided treatment planning.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}