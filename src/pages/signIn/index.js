import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Container, Form } from './styles';

export default function SignIn({ history }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(e) {
        e.preventDefault();

        if(!email || !password) {
            alert("Preencha todos os dados");
        } else {
            try {
                const response = await api.post('/authenticate', {
                    email,
                    password
                });
                login(response.data.token);
                history.push('/app');
            } catch(err) {
                alert('Erro no login');
            }
        }
    }
    
    return(
        <Container>
            <Form onSubmit={handleSignIn}>
                <img src={Logo} alt="Logo GitHub" />
                <input 
                    type="email"
                    placeholder="Seu email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Sua senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Acessar</button>
                <hr/>
                <Link to='/register'>Criar cadastro</Link>
            </Form>
        </Container>
    );
}