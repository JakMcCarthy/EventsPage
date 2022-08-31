import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
      
        <li className="cards-item">
            {/* <Link className="cards-item-link" to={props.path}>     */}
            <div className="cards-item-info">
                <h2 className="card-item-title">{props.title}</h2>
                <h5 className="cards-item-text">{props.text}</h5>
                <h5 className="cards-item-time">{props.time}</h5>
            </div>
            {/* </Link> */}
        </li>
    )
}

export default CardItem;