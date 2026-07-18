"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative">
            <div className="flex justify-between px-15 py-7 text-center items-center">
                <div className="text-[#1F1F1F] text-4xl ">
                    ClearDent
                </div>
                <div className="hidden md:flex text-[#252525] gap-7 text-xl ">
                    <button className="">
                        About
                    </button>
                    <button className="">
                        Services
                    </button>
                    <button className="">
                        Our Doctors
                    </button>
                    <button className="">
                        Reviews
                    </button>
                </div>
                <div className="hidden md:block">
                    <motion.button className="text-[#1F1F1F] border border-[#1F1F1F]/50 rounded-xl px-5 py-3 font-semibold "
                        whileHover={{ scale: 1.05, borderColor: "rgba(37, 37, 37, 1)" }}
                        transition={{ duration: 0.15 }}
                        whileTap={{ scale: 1 }}
                    >
                        Book Appointment
                    </motion.button>
                </div>
                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F1F1F]/20 bg-white text-[#1F1F1F] shadow-sm md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-[#E5E7EB] bg-white px-5 py-5 md:hidden"
                >
                    <div className="space-y-4 text-[#252525] text-xl">
                        <button className="w-full text-left transition hover:text-blue-900">
                            About
                        </button>
                        <button className="w-full text-left transition hover:text-blue-900">
                            Services
                        </button>
                        <button className="w-full text-left transition hover:text-blue-900">
                            Our Doctors
                        </button>
                        <button className="w-full text-left transition hover:text-blue-900">
                            Reviews
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.15 }}
                            className="mt-2 w-full rounded-xl border border-[#1F1F1F]/50 px-5 py-3 font-semibold text-[#1F1F1F]"
                        >
                            Book Appointment
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}