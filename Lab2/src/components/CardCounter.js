import React, { useState } from "react";

export function Counter({count, increase, decrease, id, min, max}) {

    return <div>
        <button onClick={() => { decrease(id, min || 0) }}>-</button>
        <span>{count}</span>
        <button onClick={() => { increase(id, max) }}>+</button>
    </div>

}