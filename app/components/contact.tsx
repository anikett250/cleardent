"use client"

import { motion, type Variants } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Contact() {
    const avatars = [
        "https://i.pravatar.cc/100?img=47",
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=32",
    ];

    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    return (
        <div className="bg-[#F2F2F2] p-10 mb-30">
            <div className="bg-[#C8E0F1] rounded-3xl flex justify-between text-[#1F1F1F] px-15 py-10">
                <div className="flex flex-col gap-5">
                    <motion.div className="text-[#1F1F1F] text-7xl max-w-xl mt-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Your confidents smile starts here
                    </motion.div>
                    <motion.div className="text-[#787878] text-2xl max-w-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Schedule your consultation and let our experienced team create a treatment plan designed just for you.
                    </motion.div>
                    <div className="flex flex-col mt-10">
                        <motion.div className="flex gap-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <input type="text"
                                placeholder="Your name"
                                className="bg-white text-[#787878] text-xl px-7 py-3 rounded-xl border border-[#C8E0F1] hover:border-[#7299C9] transition-colors "
                            />
                            <input type="text"
                                placeholder="Your phone"
                                className="bg-white text-[#787878] text-xl px-7 py-3 rounded-xl border border-[#C8E0F1] hover:border-[#7299C9] transition-colors "
                            />
                        </motion.div>
                        <motion.div
                            className="mt-5 flex items-center"
                            variants={containerVariants}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.button
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "tween", duration: 0.6, ease: "easeOut", delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="rounded-xl bg-[#223070] px-47 py-3 text-lg font-medium text-white will-change-transform relative z-10"
                            >
                                Book Appointment
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
                </div>
                <div className="relative w-full max-w-[900px] py-10">
                    {/* ORIGINAL IMAGE — untouched */}
                    <motion.div className=""
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/contact-1.png"
                            alt=""
                            className="w-130 h-130 object-cover object-top rounded-3xl ml-20"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 2.3,
                        }}
                        className="absolute top-4 left-0 bg-white rounded-2xl shadow-xl px-6 py-5 w-64 flex items-center justify-between gap-4"
                    >
                        <div>
                            <p className="font-semibold text-slate-800 text-base leading-snug">
                                Patient Loyalty
                            </p>
                            <p className="text-slate-400 text-sm leading-snug mt-2">
                                return for
                                <br />
                                continued care
                            </p>
                        </div>
                        <div className="relative w-16 h-16 shrink-0">
                            <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="4"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    stroke="#5b7fb5"
                                    strokeWidth="4"
                                    strokeDasharray="100"
                                    strokeDashoffset={100 - 78}
                                    pathLength="100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white rounded-full px-1.5 py-0.5 text-[11px] font-semibold text-slate-600 shadow">
                                    78%
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Choose the right Doctor bubble — right side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 2.5,
                        }}
                        className="absolute top-[38%] right-50 bg-white rounded-2xl shadow-xl px-6 py-5 w-64"
                    >
                        <p className="font-semibold text-slate-800 text-base leading-snug mb-4">
                            Choose the right
                            <br />
                            Doctor
                        </p>
                        <div className="flex items-center">
                            {avatars.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt=""
                                    className="h-13 w-13 rounded-full border-3 border-[#779FC0] object-cover"
                                    style={{ marginLeft: i === 0 ? 0 : -14 }}
                                />
                            ))}
                            <div
                                className="h-13 w-13 rounded-full bg-white text-sky-700 text-sm font-semibold flex items-center justify-center border-3 border-[#779FC0] shadow-sm"
                                style={{ marginLeft: -14 }}
                            >
                                +20
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Scanning bubble — bottom left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 2.7,
                        }}
                        className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-xl p-4 w-56"
                    >
                        <p className="font-semibold text-slate-800 text-base mb-3">
                            3D Scaning
                        </p>
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src="/contact-2.png"
                                alt=""
                                className="w-full h-28 object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-white/90 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-full">
                                Radiation-safe
                            </span>
                            <span className="absolute bottom-2 right-2 bg-white text-slate-800 text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                                $60
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}