import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', {
            replace: true
        });
    }
 
    return (
        <ContLogin className='container mt-5'>

            <h1>Login</h1>
            <hr/>
            <button 
            className='btn btn-warning'
            onClick={handleLogin}

            >
                Login
            </button>

        </ContLogin>
    )
}

const ContLogin = styled.div`
`
