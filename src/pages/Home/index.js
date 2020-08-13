import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();

    function increment() {
        dispatch({ type: 'incrementar' });
    };
    function decrement() {
        dispatch({ type: 'decrementar' });
    };

    return (
        <div className='home_container' >
            <h1>Home</h1>
            <Link style={{ textDecorationLine: 'none' }} to='/contador' >
                <p>Ir para o contador</p>
            </Link>
            <div>
                <button onClick={increment} >Incrementar 1 ao contador</button>
                <button onClick={decrement} >Decrementar 1 ao contador</button>
            </div>
        </div>
    )
}