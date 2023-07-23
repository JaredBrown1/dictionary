import Image from "next/image";

import Icon from "public/images/logo.svg";

const Logo = () => {
	return (
		<div>
			<Image src={Icon} alt="Logo" width={50} height={50} />
		</div>
	);
};
export default Logo;
