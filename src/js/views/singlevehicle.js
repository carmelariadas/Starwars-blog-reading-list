import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const[dataVehicle, setDataVehicle] = useState({})

	useEffect(()=>
		fetch('https://www.swapi.tech/api/vehicles/'+params.id, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (result => setDataVehicle(result))
	, [])
	

	return (
		<>
		<div className="container my-5 d-flex">
			
			<div className="col">
			<img src={`https://picsum.photos/id/23${+params.id}/700/500`} className="me-5" alt="..."/>
			</div>
			<div className="col">
			<h1>{dataVehicle.result?.properties.name}</h1>
			<p>{dataVehicle.result?.description}</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>

		</div>
		<div className="container">
			<hr style={{"color": "#E87480"}}/>
		</div>
		<div className="container text-center" style={{"color": "#E87480"}}>
			<div className="row">
                <div className="col"></div>

				<div className="col"><h5>Model</h5><h6>{dataVehicle.result?.properties.model}</h6></div>
				<div className="col"><h5>Vehicle Class</h5><h6>{dataVehicle.result?.properties.vehicle_class}</h6></div>
				<div className="col"><h5>Manufacturer</h5><h6>{dataVehicle.result?.properties.manufacturer}</h6></div>
				<div className="col"><h5>Length</h5><h6>{dataVehicle.result?.properties.length}</h6></div>
				
				<div className="col"></div>
			</div>
		</div>
		</>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
