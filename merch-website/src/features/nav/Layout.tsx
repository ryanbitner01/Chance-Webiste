import { Outlet } from "react-router";
import NavBar from "./Nav";

import "./layout.scss";

interface Prop {
	backButton: boolean;
}

const Layout = ({ backButton = false }: Prop) => {
	return (
		<>
			<NavBar backButton={backButton} />
			<div className="content">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
