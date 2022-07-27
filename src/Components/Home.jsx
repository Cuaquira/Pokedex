import React, { useState } from 'react';
import { changueName } from '../store/slices/input.slice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../img/image11.png"



const Home = () => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch(changueName(name));
        navigate("/pokedex")
    }


    return (

                
            <form onSubmit={submit}>
                <div className='containerTitle'>
                    <img className='Poketitle' src={img} alt="" />
                </div>
                <h2 className='title-trainer'>Hello Trainer </h2>
                <div >
                <input className='input-home' type="text"
                    placeholder='Whats your name?'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button className='input-button'>Add</button>
                </div>

                <footer className='footer'>
                    <div className='footer-black'>
                        
                    </div>
                </footer>
            </form>
        
    );
};

export default Home;