import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Pokemon_item = ( {pokemonUrl}) => {

    const[pokemonn, setPokemonn] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res =>setPokemonn(res.data) )
    }, [])

    console.log(pokemonUrl)
    return (
        <div onClick={ () => navigate(`/pokedex/${pokemonn.id}`)} className='card-item'>
            <div className='card-body'>
            <h3 className='card-title'>{pokemonn.name}</h3>
            <figure className='fondo'>
            <img className='pokemon-item' src={pokemonn.sprites?.other.dream_world.front_default} alt="" />
            </figure>
            </div>
        </div>
    );
};

export default Pokemon_item;