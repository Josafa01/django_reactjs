import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props) {
    const items = props.items;
    return (
        <div className="container">
            <ul className="list-group mt-4">
                <li className="list-group-item active">{ props.listName }</li>
                <li className="list-group-item">{items.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
                </li>
            </ul>
        </div>
    )
}