import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import {motion} from "framer-motion"

const RecipeDetails = () => {
    const [details, setDetails] = useState({})
    const [activeTap, setActiveTap] = useState("instructions")
    let params = useParams()
    const getDetailsRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=5b2429dc40fe4a61a2b5bd295aaf29c3`)
        const response = await data.json()
        setDetails(response)
        console.log(response)
    }
    useEffect(() => {
        getDetailsRecipe()
        // eslint-disable-next-line
    }, [params.id])
    return (
        <Wrapper
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:.5}}
        >
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={activeTap === "Instructions" && "active"} onClick={() => { setActiveTap("Instructions") }}>Instructions</Button>
                <Button className={activeTap === "Ingredients" && "active"} onClick={() => { setActiveTap("Ingredients") }}>Ingredients </Button>
                {activeTap === "Instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}

                {activeTap === "Ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}

            </Info>
        </Wrapper>
    )
}
const Wrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color:#fff;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color:#313131;
    background-color: #fff;
    border:2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer
`
const Info = styled.div`
    margin-left: 10rem;
`
export default RecipeDetails