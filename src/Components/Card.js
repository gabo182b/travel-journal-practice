import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './card.css'

function Card(props) {
    return (
        <section className="card-container">
            <picture className="card-container__img">
                <img src={props.imageUrl} alt='Destination' />
            </picture>
            <div className="card-container__info">
                <div className="card-container__location">
                    <FontAwesomeIcon className="card-container__info--icon" icon={faLocationDot} />
                    <p className="card-container__info--location">{props.location}</p>
                    <a className="card-container__info--anchor" href={props.googleMapsUrl} target="_blank">Wiew on Google Maps</a>
                </div>
                <h2 className="card-container__info--title">{props.title}</h2>
                <div className="date-container">
                    <p className="card-container__info--start-date">{props.startDate}</p>
                    -
                    <p className="card-container__info--end-date">{props.endDate}</p>
                </div>
                <p className="card-container__info--description">{props.description}</p>
            </div>
        </section >
    )
}

export { Card }