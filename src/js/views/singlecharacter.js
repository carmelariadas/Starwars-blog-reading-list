import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const[dataCharacter, setDataCharacter] = useState({})

	useEffect(()=>
		fetch('https://www.swapi.tech/api/people/'+params.id, {
			method: 'GET'
		})
		.then (response => response.json())
		.then (result => setDataCharacter(result))
	, [])
	

	return (
		<>
		<div className="container my-5 d-flex">
			
			<div className="col">
			<img src={`https://picsum.photos/id/23${+params.id}/700/500`} className="me-5" alt="..."/>
			</div>
			<div className="col">
			<h1>{dataCharacter.result?.properties.name}</h1>
			<p>{dataCharacter.result?.description}</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>

		</div>
		<div className="container">
			<hr style={{"color": "#E87480"}}/>
		</div>
		<div className="container text-center" style={{"color": "#E87480"}}>
			<div className="row">
				<div className="col"><h5>Name</h5><h6>{dataCharacter.result?.properties.name}</h6></div>
				<div className="col"><h5>Birth Year</h5><h6>{dataCharacter.result?.properties.birth_year}</h6></div>
				<div className="col"><h5>Gender</h5><h6>{dataCharacter.result?.properties.gender}</h6></div>
				<div className="col"><h5>Height</h5><h6>{dataCharacter.result?.properties.height}</h6></div>
				<div className="col"><h5>Skin Color</h5><h6>{dataCharacter.result?.properties.skin_color}</h6></div>
				<div className="col"><h5>Eye Color</h5><h6>{dataCharacter.result?.properties.eye_color}</h6></div>
			</div>
		</div>
		</>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
