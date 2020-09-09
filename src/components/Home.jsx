import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export const Home = () => {
    return (
        <div className="App-header">
            <img src={process.env.PUBLIC_URL + 'images/pokemon_logo_PNG5.png'} alt="Pokémon" />
            <h1 className ="is-size-1">Pokedex</h1>
            <Link 
                to = "/pokemons"
                className="button is-primary is-rounded is-inverted is-outlined"
            >
                Lista de Pokémon
            </Link>
        </div>
    )
}










































