import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../../assets/logo.svg';

import { Container, Form } from './styles'; 

import api from '../../services/api';

export default function SignUp({ history }){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignUp(e) {
        e.preventDefault();

        if(!username || !email || !password) {
            alert("Preencha todos os dados");
        } else {
            try {
                await api.post('/register', {
                    username,
                    email,
                    password
                });
                history.push('/app');
            } catch(err) {
                alert("Não foi possível enviar dos dados. Erro no index.js");
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                <img src={Logo} alt="Logo Github app" />
                <input 
                    type="text" 
                    placeholder="Seu nome" 
                    onChange={e => setUsername(e.target.value)} />
                <input
                    type="email"
                    placeholder="Seu email"
                    onChange={e => setEmail(e.target.value)}    
                />    
                <input 
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
                <hr/>
                <Link to='/'>Login</Link>
            </Form>
        </Container>
    );
}