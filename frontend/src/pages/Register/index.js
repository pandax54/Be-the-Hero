import React , { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'


import api from '../../services/api'

export default function Register() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState(''); 
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');  
    
    const history = useHistory();
    
    async function handleregister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city, 
            uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${ response.data.id }`);

            history.push('/')
            
        }catch (err) {
            alert(`Erro no cadastro, tente novamente`);
        }

    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    
                <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#E02041" />
                  Não tenho cadastro  
                </Link>
                </section>
                <form onSubmit={ handleregister }>
                
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG" type="text"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"placeholder="E-mail"/>
                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width:80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )
}