import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home_container' >
            <h1>Home</h1>
            <Link style={{textDecorationLine: 'none'}} to='/contador' >
                <p>Ir para o contador</p>
            </Link>
            <button>Adicionar 1 ao contador</button>
        </div>
    )
}