import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const[dataPlanet, setDataPlanet] = useState({})

	useEffect(()=>
		fetch('https://www.swapi.tech/api/planets/'+params.id, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (result => setDataPlanet(result))
	, [])
	

	return (
		<>
		<div className="container my-5 d-flex">
			
			<div className="col">
			<img src={`https://picsum.photos/id/23${+params.id}/700/500`} className="me-5" alt="..."/>
			</div>
			<div className="col">
			<h1>{dataPlanet.result?.properties.name}</h1>
			<p>{dataPlanet.result?.description}</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>

		</div>
		<div className="container">
			<hr style={{"color": "#E87480"}}/>
		</div>
		<div className="container text-center" style={{"color": "#E87480"}}>
			<div className="row">
                <div className="col"></div>

				<div className="col"><h5>Name</h5><h6>{dataPlanet.result?.properties.name}</h6></div>
				<div className="col"><h5>Diameter</h5><h6>{dataPlanet.result?.properties.diameter}</h6></div>
				<div className="col"><h5>Rotation Period</h5><h6>{dataPlanet.result?.properties.rotation_period}</h6></div>
				<div className="col"><h5>Orbital Period</h5><h6>{dataPlanet.result?.properties.orbital_period}</h6></div>
				
				<div className="col"></div>
			</div>
		</div>
		</>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
