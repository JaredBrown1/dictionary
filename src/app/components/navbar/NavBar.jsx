import Logo from "./Logo";
import Buttons from "./Buttons";

const NavBar = () => {
	return (
		<div className="flex flex-row justify-between w-[325px] h-[64px] sm:w-[689px] md:w-[689px] lg:w-[736px] lg:pr-[45px] flex-shrink-0">
			<Logo />
			<Buttons />
		</div>
	);
};
export default NavBar;
