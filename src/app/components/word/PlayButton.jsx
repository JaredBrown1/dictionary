import Button from "/public/images/icon-play.svg";
import Image from "next/image";

const PlayButton = () => {
	return (
		<div>
			<Image
				src="/images/icon-play.svg"
				width={80}
				height={80}
				alt="playbutton"
			/>
		</div>
	);
};
export default PlayButton;
