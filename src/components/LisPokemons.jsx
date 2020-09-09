import React from 'react'
import { PokeApi } from '../helpers/PokeApi'
import '../App.css'


export const LisPokemons = () => {
    const {data, loading} = PokeApi(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`)
    let  {results}  = !!data && data;

    let info =  results
    console.log(info);
    
    return (
        <div className="listPokemon centrarListP">
            <section className="section ">
                <div className="container">
                    <h1 className="title has-text-light ">Lista de Pokémon</h1>
                    <hr></hr>
                </div>
            </section>
            <section className="centrar" >
                {
                    loading ? (
                        <div>
                            <progress className="progress is-small is-primary" max="100"> </progress>
                        </div>
                    )
                    :
                    (
                        <div className="columns is-multiline ">
                            {
                                Object.values(info).map((data, i )=>{
                                    return (
                                        <div className="column  is-mobile is-3" key = {i+1} id={i+1}>
                                            <div className="column ">
                                                <div className="card " >
                                                    <header className="card-header">
                                                        <p className="card-header-title is-centered" >
                                                            {data.name}
                                                        </p>
                                                        <p className="card-header-title is-centered">
                                                            {data.name}
                                                        </p>
                                                    </header>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </section>
        </div>
    )
}

