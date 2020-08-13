import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

export default function Counter() {
    const counter = useSelector(state => state.contador);
    const history = useHistory();
    
    return (
        <div className='counter_container'>
            <h1 onClick={() => history.goBack()} >Voltar</h1>
            <h1>{counter}</h1>
        </div>
    )
}