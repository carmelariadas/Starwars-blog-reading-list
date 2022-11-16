
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CardVehicles = (props) =>{

    const[dataCardsHome, setDataCardsHome] = useState({});
    const urlImg = `https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`
    const {store, actions} = useContext(Context)

    useEffect(()=> 
    fetch('https://www.swapi.tech/api/vehicles/'+props.uid, {
    method: 'GET'
    })
    .then (response => response.json()) 
    .then (result => {setDataCardsHome(result)})
    ,[])
    

    return(
        
        <div className="container " >
        <div className="card" style={{"width": 300}}>
        <img src={urlImg} className="card-img-top imagen" alt="..."/>
        <div className="card-body">
            <h5 className="card-title mb-3">{props.h1}</h5>
            
            <p>Model: {dataCardsHome?.result?.properties?.model}</p>
            <p>Vehicle Class: {dataCardsHome?.result?.properties?.vehicle_class}</p>
            <p>Manufacturer: {dataCardsHome?.result?.properties?.manufacturer}</p>
            <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary"><Link to={`/single/vehicles/${props.uid}`}>Learn more!</Link></button>
            <button onClick={()=>props.addFav(props.h1)} className={store.favoritos.includes(props.h1) ? "btn btn-outline-primary heart" : "btn btn-outline-primary"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CardVehicles;