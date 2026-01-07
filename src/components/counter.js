import React from 'react'
import {use, useState } from 'react';


function Counter() {
    let [count, setCount] = useState(0)

    return (
        <div className="counter">
            <h1 id='counterDigit'>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}>Decrement</button>
        </div>
    )
}

export default Counter