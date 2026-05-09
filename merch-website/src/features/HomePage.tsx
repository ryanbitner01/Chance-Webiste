import { NavLink } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<title>Home</title>
			<div className="h-dvh flex items-center justify-center flex-col gap-4">
				<img className="max-w-8/10" src="src/assets/ChanceLogoText.svg"></img>

				<button className="bg-teal-500 text-white px-4 py-2 text-4xl rounded-lg">
					<NavLink to="/merch">Buy Merch</NavLink>
				</button>
			</div>
		</>
	);
}
