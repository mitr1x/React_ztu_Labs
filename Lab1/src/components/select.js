import React from "react";

export function Select(props){
    return (
        <select>
            {props.items.map((item) => <option> {item.name} </option>)}
        </select>
    )
}