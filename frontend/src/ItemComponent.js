import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <li>{ props.name } 
        <div>Status: {status ? <span>Finalizado</span> : <span>Nao Finalizado</span>} </div>
    </li>
}