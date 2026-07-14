"use client"

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function Header() {
    const avatars = [
        "https://i.pravatar.cc/100?img=47",
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=32",
    ];
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    const fadeRight = {
        hidden: { x: -20, opacity: 0 },
        show: {
            x: 0, opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="bg-[#F2F2F2] flex flex-col justify-between text-[#1F1F1F] px-15 py-10">
            <motion.div
                className="flex justify-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex flex-col gap-5">
                    <motion.div
                        className="text-[#7299C9] text-3xl"
                        variants={fadeIn}
                    >
                        Smile & Dental Care
                    </motion.div>

                    <motion.div
                        className="text-7xl max-w-2xl"
                        variants={fadeUp}
                    >
                        Advanced dentistry for every smile
                    </motion.div>
                </div>

                <div className="py-15">
                    <motion.div
                        className="text-[#787878] text-2xl max-w-sm"
                        variants={fadeIn}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Complete care for your smile prevention, restoration, and aesthetic treatments in one place.
                    </motion.div>

                    <motion.div
                        className="mt-5 flex items-center"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.button
                            variants={fadeUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl bg-[#223070] px-8 py-3 text-lg font-medium text-white will-change-transform relative z-10"
                        >
                            Schedule Appointment
                        </motion.button>

                        <motion.button
                            initial={{ x: -32, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1.3 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="rounded-xl bg-[#223070] px-4 py-4 text-white will-change-transform"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
            <div className="w-full flex gap-5 min-w-full">
                <motion.div
                    className="relative overflow-hidden rounded-3xl min-h-[500px] flex flex-col justify-between bg-cover bg-center"
                    style={{ backgroundImage: "url('/header-1.jpg')" }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Subtle darkening layer so white text stays readable */}
                    <div className="pointer-events-none absolute inset-0 bg-black/10" />

                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 max-w-4xl">
                        <h2 className="text-white text-4xl sm:text-5xl tracking-tight">
                            Dental Treatment
                        </h2>
                        <p className="mt-7 text-white text-xl leading-relaxed">
                            Comprehensive care including check-ups, fillings, root canal
                            therapy, crowns, and preventive treatments — tailored to your
                            needs.
                        </p>
                    </div>

                    {/* Footer row: avatars + arrow button */}
                    <motion.div className="relative z-10 flex items-end justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex items-center p-8">
                            {avatars.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt=""
                                    className="h-17 w-17 rounded-full border-3 border-[#779FC0] object-cover"
                                    style={{ marginLeft: i === 0 ? 0 : -14 }}
                                />
                            ))}
                            <div
                                className="h-17 w-17 rounded-full bg-white text-sky-700 text-sm font-semibold flex items-center justify-center border-3 border-[#779FC0] shadow-sm"
                                style={{ marginLeft: -14 }}
                            >
                                +20
                            </div>
                        </div>

                        <button
                            type="button"
                            aria-label="View dental treatment details"
                            className="h-17 w-17 rounded-tl-2xl bg-blue-900/90 hover:bg-blue-900 transition-colors flex items-center justify-center shadow-md"
                        >
                            <ArrowUpRight className="h-7 w-7 text-white hover:h-9 hover:w-9 transition-all" />
                        </button>
                    </motion.div>
                </motion.div>
                <motion.div className="relative overflow-hidden rounded-3xl min-h-[500px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div
                        className="absolute inset-0 bg-fit bg-center"
                        style={{ backgroundImage: "url('/header-2.jpg')" }}
                    />
                    <div className="relative z-10 p-6 sm:p-8 max-w-3xl">
                        <h2 className="text-[#1F1F1F] text-4xl sm:text-5xl -rotate-90 text-center translate-y-12/3 ">
                            Orthodontics
                        </h2>
                    </div>
                </motion.div>
                <motion.div className="relative overflow-hidden rounded-3xl min-h-[500px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/header-3.png')" }}
                    />
                    <div className="relative z-10 p-6 sm:p-8 max-w-3xl">
                        <h2 className="text-[#1F1F1F] text-4xl sm:text-5xl -rotate-90 text-center translate-y-12/3 ">
                            Dental Surgery
                        </h2>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}