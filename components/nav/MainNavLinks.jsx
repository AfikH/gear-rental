import NavLink from "./NavLink";

const MainNavLinks = () => (
	<>
		<NavLink to="/" exact>Home</NavLink>
		<NavLink to="/cameras">Cameras</NavLink>
		<NavLink to="/lenses">Lenses</NavLink>
		<NavLink to="/sound">Sound</NavLink>
		<NavLink to="/lighting">Lighting</NavLink>
		<NavLink to="/grip-services">Grip/Services</NavLink>
	</>
);

export default MainNavLinks;