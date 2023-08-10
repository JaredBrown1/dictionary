"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const PlayButton = ({ audio }) => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [imageSrc, setImageSrc] = useState("/images/icon-play.svg");

	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleMouseLeave = () => {
		setImageSrc("/images/icon-play.svg");
	};

	const handleMouseEnter = () => {
		setImageSrc("/images/icon-play-hover.svg");
	};

	return (
		<div>
			<button
				className="cursor-pointer"
				onClick={handlePlayPause}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="h-[48px] w-[48px]">
					<Image
						src={imageSrc}
						alt="playbutton"
						width={48}
						height={48}
						className="fill-current"
					/>
				</div>
			</button>
			<audio ref={audioRef} src={audio}></audio>
		</div>
	);
};

export default PlayButton;
