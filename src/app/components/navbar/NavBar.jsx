import Logo from "./Logo";
import Buttons from "./Buttons";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-between">
			<Logo />
			<Buttons />
		</div>
	);
};
export default NavBar;
