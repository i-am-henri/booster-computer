"use client"
import { motion, type MotionProps } from "framer-motion"
import React from "react"

export const FadeToTop: React.FC<{ children: React.ReactNode } & MotionProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <motion.div initial={{ opacity: 0, y: "25px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} {...props}>
            {children}
        </motion.div>
    )
}
export default FadeToTop;