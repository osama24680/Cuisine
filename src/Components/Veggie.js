import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom"

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    const getPopular = async () => {
        //this API get me only 100 visits(refresh) per day so i am saving the data i get from in the local storage
        const checkApiData = localStorage.getItem("veggie")
        if (checkApiData) {
            setVeggie(JSON.parse(checkApiData))
        } else {
            const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey=5b2429dc40fe4a61a2b5bd295aaf29c3&number=9&tags=vegetarian")
            const response = await data.json()
            localStorage.setItem("veggie",JSON.stringify(response.recipes))
            setVeggie(response.recipes)
        }
    }
    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div>

        <Wrapper >
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "2rem"
            }}>
                {veggie.map((recipe, index) => (
                    <SplideSlide key={index}>
                        <Card >
                            <Link to={"/RecipeDetails/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>

    </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height:25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 2rem;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left:50%;
        bottom:0;
        transform:translate(-50%,0);
        color:#fff;
        width: 100%;
        text-align:center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center
    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));
`

export default Veggie
