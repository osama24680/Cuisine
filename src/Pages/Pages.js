import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import RecipeDetails from './RecipeDetails'
import { Route, Routes,useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const Pages = () => {
    const location=useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/Cuisine/:type" element={<Cuisine />} />
                <Route path="/Searched/:search" element={<Searched />} />
                <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
            </Routes>
        </AnimatePresence>

    )
}

export default Pages
