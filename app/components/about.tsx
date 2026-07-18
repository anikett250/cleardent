"use client"

import { motion } from "framer-motion"
import { Cross } from "lucide-react"

export default function About() {
    const stats = [
        { value: "20+", label: "certified specialists" },
        { value: "50+", label: "advanced procedures offered" },
        { value: "15", label: "years in practice" },
        { value: "99%", label: "patient satisfaction rate" },
    ];
    return (
        <div className="px-6 mt-24 mb-24 flex flex-col gap-7 lg:px-15 lg:mt-50 lg:mb-50">
            <motion.div className="flex items-center text-center gap-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Cross className="w-7 h-7 text-black" />
                <span className="text-[#1F1F1F] text-3xl"
                >
                    About Us
                </span>
            </motion.div>
            <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-0">
                <div className="">
                    <motion.div className="text-[#1F1F1F] text-6xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 3 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Expertise you can trust
                    </motion.div>
                    <div className="bg-neutral-100 py-10 px-4 mt-6 lg:py-16 lg:px-6 lg:mt-0">
                        <div className="max-w-full lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.8 + i * 0.2,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <p className="text-7xl font-light text-neutral-900 leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="text-[#787878] mt-3 text-base">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative w-full mt-8 lg:w-fit lg:mt-0">
                    <motion.img
                        src="/about-1.jpg"
                        alt=""
                        className="w-full h-[280px] sm:h-[380px] object-cover rounded-4xl lg:w-[800px] lg:h-[500px]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 3 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />

                    {/* Top Left Card */}
                    <motion.div className="absolute top-4 left-4 bg-white rounded-2xl px-6 py-5 shadow-xl lg:top-14 lg:-left-15"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 2.3,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-lg text-[#1F1F1F]">Patient rate</p>
                        <p className="text-xl">
                            <span className="text-[#7299C9]">★</span>
                            <span className="text-[#7299C9]">★</span>
                            <span className="text-[#7299C9]">★</span>
                            <span className="text-[#7299C9]">★</span>
                        </p>
                        <p className="text-3xl font-semibold text-[#7299C9] ">4.8/5</p>
                    </motion.div>

                    {/* Bottom Card */}
                    <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white rounded-xl px-5 py-3 shadow-xl lg:left-auto lg:-translate-x-1/3 lg:bottom-15"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: 2.4,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-lg text-[#1F1F1F]">
                            Expert Hands
                        </p>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}