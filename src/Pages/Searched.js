import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components'
import { motion } from "framer-motion"


const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const getsearchedRecipe = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5b2429dc40fe4a61a2b5bd295aaf29c3&query=${name}`)
        const response = await data.json()
        setSearchedRecipes(response.results)

    }
    useEffect(() => {
        getsearchedRecipe(params.search)
    }, [params.search])
    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            {searchedRecipes.map((item, index) => (
                <Card key={index}>
                    <Link to={"/RecipeDetails/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    gap:3rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched
