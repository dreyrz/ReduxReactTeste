import React, { useState } from 'react';

export default function Counter(){
    const [counter, setCounter] = useState(0);
    return(
        <div className='home_container'>
            <h1>{counter}</h1>
        </div>
    )
}