import { NavLink } from "react-router-dom";
import "./error.scss";

interface ErrorProperties {
	message?: string;
}

const Error = ({ message }: ErrorProperties) => {
	return (
		<div>
			<h1>{message ?? "Something went wrong"}</h1>
			<NavLink to="/">Go Home</NavLink>
		</div>
	);
};

export default Error;
