import React from 'react'
import CardItem from '../Cards/CardItem';
import '../Cards/cards.css';

function Cards(){
    return (
        <div className='cards'>
            <h1> Check out these upcoming events </h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                  <ul className="cards-items">
                    <CardItem />
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards