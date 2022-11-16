import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/starwars.jpg"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	let longArrayFav = store.favoritos.length

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src={logo} alt="logo star wars" width="100" />
				</Link>
				<div className="ml-auto">
					
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos ({longArrayFav})
						</button>
						<ul className="dropdown-menu">
							{longArrayFav < 1 ? <li className="ms-1">Empty</li> : "" }
						{store.favoritos.map((element, i) => 
						<div className="d-flex justify-content-between align-items-center m-1">
							<li className=" d-inline ">{element}</li>
						
							<svg onClick={()=>actions.deleteFavorito(i)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
							<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg>
						
						</div>
						)}
						</ul>
					</div>
					
				</div>
				
			</div>
		</nav>
	);
};
