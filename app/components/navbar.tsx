"use client"

import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

export default function Navbar() {
    return (
        <div className="flex justify-between px-15 py-7 text-center items-center">
            <div className="text-[#1F1F1F] text-4xl ">
                ClearDent
            </div>
            <div className="text-[#252525] flex gap-7 text-xl ">
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
            <div className="">
                <motion.button className="text-[#1F1F1F] border border-[#1F1F1F]/50 rounded-xl px-5 py-3 font-semibold "
                    whileHover={{ scale: 1.05, borderColor: "rgba(37, 37, 37, 1)" }}
                    transition={{ duration: 0.15 }}
                    whileTap={{ scale: 1 }}
                >
                    Book Appointment
                </motion.button>
            </div>
        </div>
    )
}