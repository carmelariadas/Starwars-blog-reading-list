import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import CardPeople from "../component/cardPeople";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";


export const Home = () => {

const {store, actions} = useContext(Context)

const[peopleSW, setPeopleSW]=useState({});
const[planetsSW, setPlanetsSW]=useState({});
const[vehiclesSW, setVehiclesSW]=useState({});


useEffect(() => {
	fetch('https://www.swapi.tech/api/people/', {
		method: 'GET'
	})
	.then (response =>{ return response.json()}) //ESto
	.then (result => {setPeopleSW(result)})
}
, [])

useEffect(() => {
	fetch('https://www.swapi.tech/api/planets/', {
		method: 'GET'
	})
	.then (response =>{ return response.json()}) //ESto
	.then (result => {setPlanetsSW(result)})
}
, [])

useEffect(() => {
	fetch('https://www.swapi.tech/api/vehicles/', {
		method: 'GET'
	})
	.then (response =>{ return response.json()}) //ESto
	.then (result => {setVehiclesSW(result)})
}
, [])

let n=400

return (
	<div className=" container  mt-5 ">
		
		<h1>Characters</h1>
		<div className="d-flex overflow-auto py-5">
		{
			peopleSW?.results?.map((element)=>
			<>
				<CardPeople h1={element.name} idPhoto={n++} uid={element.uid} addFav= {actions.addFavorito} />
			</>	
			)
		}
		</div>

		<h1>Planets</h1>
		<div className="d-flex overflow-auto py-5">
		{
			planetsSW?.results?.map((element)=>
			<>
				<CardPlanets h1={element.name} idPhoto={n++} uid={element.uid} addFav= {actions.addFavorito} />
			</>	
			)
		}
		</div>

		<h1>Vehicles</h1>
		<div className="d-flex overflow-auto py-5">
		{
			vehiclesSW?.results?.map((element)=>
			<>
				<CardVehicles h1={element.name} idPhoto={n++} uid={element.uid} addFav= {actions.addFavorito} />
			</>	
			)
		}
		</div>
	</div>
);
};