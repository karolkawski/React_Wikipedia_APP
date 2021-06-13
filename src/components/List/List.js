import React from 'react';
import ListItem from './ListItem';
import './List.css';

function List({items}) {
    return (
        <div className="list">
           {items.map((item, index) => {
               return (
                <ListItem key={index} item={item}/>
               )
           })}
        </div>
    );
};

export default List;