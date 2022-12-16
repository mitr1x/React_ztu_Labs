import React, { useState } from 'react';

export function Counter(props){

    let init = props.initial || 0;
    let min = props.min || -10;
    let max = props.max || 10;
    let [count, CountOperation] = useState(init);

    let result = <div>
        <span> Поточний рахунок: {count} </span>
        <button className='btn' onClick={() => CountOperation(Add(count, max))}>+</button>
        <button className='btn' onClick={() => CountOperation(Subtraction(count, min))}>-</button>
        <button className='btn' onClick={() => CountOperation(count = init)}>Reset</button>
    </div>;

    return (
        result
    );
}

function Add(count, max){
    if(count < max)
        ++count;
    return count;
}

function Subtraction(count, min){
    if(count > min)
        --count;
    return count;
}