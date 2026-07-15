"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volleyball, ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Do you accept walk-in patients?",
        answer: "Yes, we welcome walk-ins, though booking an appointment ensures shorter wait times.",
    },
    {
        question: "What insurance plans do you accept?",
        answer: "We accept most major dental insurance plans. Contact us to confirm your specific coverage.",
    },
    {
        question: "How often should I visit for a checkup?",
        answer: "We recommend a routine checkup and cleaning every six months for most patients.",
    },
    {
        question: "Do you offer emergency dental care?",
        answer: "Yes, we reserve same-day slots for urgent dental issues like pain or trauma.",
    },
    {
        question: "Is teeth whitening safe?",
        answer: "Professional whitening performed in-office is safe and monitored by our dental team.",
    },
    {
        question: "Do you treat children?",
        answer: "Absolutely, our pediatric dentistry services cover children of all ages.",
    },
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className="px-15 mt-50 flex flex-col gap-7 mb-50">
            <div className="flex justify-between items-center">
                <motion.div className="flex items-center text-center gap-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Volleyball className="w-7 h-7 text-black" />
                    <span className="text-[#1F1F1F] text-3xl"
                    >
                        Faq
                    </span>
                </motion.div>
                <motion.div className="text-[#1F1F1F] text-6xl mr-70"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 3 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Get clear answers to your questions
                </motion.div>
            </div>


            <div className="flex items-end mt-10">
                {/* Left image */}
                <div
                    className="w-45 h-45 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                    style={{ backgroundImage: "url('/faq-1.png')" }}
                />

                {/* FAQ */}
                <div className="flex flex-col max-w-4xl w-full ml-100">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <motion.div
                                key={index}
                                className="border-t border-[#E5E5E5] last:border-b py-6 cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                viewport={{ once: true, amount: 0.3 }}
                                onClick={() => toggle(index)}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-[#1F1F1F] text-xl">
                                        {faq.question}
                                    </h3>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-[#787878]" />
                                    </motion.div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#787878] text-lg leading-relaxed mt-4">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}