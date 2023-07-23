import Logo from "./Logo";
import Buttons from "./Buttons";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-around pr-8">
			<Logo />
			<Buttons />
		</div>
	);
};
export default NavBar;
