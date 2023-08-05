import Logo from "./Logo";
import Buttons from "./Buttons";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-between w-[736px] h-[64px] flex-shrink-0">
			<Logo />
			<Buttons />
		</div>
	);
};
export default NavBar;
