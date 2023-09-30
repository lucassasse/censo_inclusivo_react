import { Outlet, Link } from "react-router-dom";

export default function  Register(){
	return(
		<div>
			<h1>Register Page</h1>
			<Link to="/">Voltar para o login</Link>
			<Outlet />
		</div>
	);
}
