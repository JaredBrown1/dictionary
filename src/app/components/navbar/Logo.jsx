import Image from "next/image";

import Icon from "public/images/logo.svg";

const Logo = () => {
	return (
		<div className="">
			<Image src={Icon} alt="Logo" width={28} height={32} />
		</div>
	);
};
export default Logo;
