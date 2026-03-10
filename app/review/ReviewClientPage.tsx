"use client"
import { ReviewClient } from "@/components/review-client"
import { motion } from "framer-motion"

export default function ReviewClientPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mt-2"
      >
        <ReviewClient />
      </motion.div>
    </>
  )
}
