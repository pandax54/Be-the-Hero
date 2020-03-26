import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

import api from '../../services/api'

import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

export default function Logon(){

    const [id, setId ] = useState('');
    const history = useHistory();

     async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            console.log(response.data.name)

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name )
            history.push('/profile')
        } catch (err) {
            alert(`Falha no longi, tente novamente.`)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
            <img src={LogoImg} alt="Be the Hero" srcset=""/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                  Não tenho cadastro  
                </Link>
            </form>
            </section>
            <img src={HeroesImg} alt="Heroes" srcset=""/>
        </div>
    );
}