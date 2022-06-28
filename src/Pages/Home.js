import React from 'react'
import Popular from "../Components/Popular"
import Veggie from "../Components/Veggie"
import { motion } from "framer-motion"
const Home = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <Veggie />
            <Popular />
        </motion.div>
    )
}

export default Home