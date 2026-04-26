import { NavLink } from "react-router-dom";
import "./error.scss";

interface ErrorProperties {
	message?: string;
}

const Error = ({ message }: ErrorProperties) => {
	return (
		<div className="error">
			<h1>{message ?? "Something went wrong"}</h1>
			<NavLink className="btn btn-secondary" to="/">
				Go Home
			</NavLink>
		</div>
	);
};

export default Error;
