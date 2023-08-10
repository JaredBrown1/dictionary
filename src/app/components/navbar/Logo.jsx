import Image from "next/image";

import Icon from "public/images/logo.svg";

const Logo = () => {
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<div className="hover:cursor-pointer">
			<Image
				src={Icon}
				alt="Logo"
				width={28}
				height={32}
				onClick={refreshPage}
			/>
		</div>
	);
};
export default Logo;
