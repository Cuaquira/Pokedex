import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import img from "../img/image11.png"

const pokedexdetail = () => {

    const [pokemon, setPokemon] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)
    return (
        <div>
            <img src={img} alt="" />
            <figure className='Font-pokemon'>
                <img className='pokemon-detail' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <div className='date-pokemon'>
                    <p className='date-par'>Height: {pokemon.height}</p>
                    <p className='date-par'>Weight: {pokemon.weight}</p>
                </div>
            </figure>

            <section>
                <p className='id-detail'>#{pokemon.id}</p>
                <div className='abilities'>
                    <h2>Abilities</h2>
                    <div className='abilities_name'>
                    <p className='abilities_par'>{pokemon.abilities?.[0].ability.name}</p>
                    
                    <p >{pokemon.abilities?.[1].ability.name}</p>
                    </div>
                </div>
                <div className='type'>
                    <h2>Type</h2>
                    <p className='abilities_name'>{pokemon.types?.[0].type.name}</p>
                </div>
                <hr />
                <h3 className='title-detail'>{pokemon.name}</h3>
            </section>
            

        </div>
    );
};

export default pokedexdetail;