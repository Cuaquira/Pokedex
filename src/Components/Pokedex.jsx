import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Pokemon_item from './Pokemon_item';
import img from "../img/image11.png"


const Pokedex = () => {

    const username = useSelector((state) => state.username);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [poketype, setpoketype] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokemons(res.data.results))


        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setpoketype(res.data.results))
    }, []);



    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`)
    };
    const filterType = (e) => {
        axios.get(e).then((res) => setPokemons(res.data.pokemon));

    };

    return (

        <div>
            <img className='pokedes-title' src={img} alt="titulo" />
            <p className='Welcome'><b className='Username'>Welcome {username}</b>, here you can find your favorite pokemon  </p>

            <form onSubmit={search} >
                <input className='input-pokedex'
                    type="text"
                    placeholder='Search'
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)}
                />
                <button className='button-pokedex'>search</button>
            </form>


            <select className='select-pokedex' onChange={(e) => filterType(e.target.value)}>
                <option >Type Select</option>
                {
                    poketype.map((type) => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>


            <ul>
                {
                    pokemons.map(pokemon => (
                        <Pokemon_item pokemonUrl={pokemon.url} key={pokemon.url} />
                    ))
                }
            </ul>


        </div>
    );
};

export default pokedex;