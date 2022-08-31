import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
      <>
        <li className="cards-item">
            <Link className="cards-item-link" to={props.path}>    
            <div className="cards-item-info">
                <h5> className="cards-itme-text"</h5>
            </div>
            </Link>
        </li>
      </>
    )
}

export default CardItem;