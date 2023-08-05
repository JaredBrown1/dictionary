"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const PlayButton = ({ audio }) => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div>
			<button className="cursor-pointer" onClick={handlePlayPause}>
				<Image
					src="/images/icon-play.svg"
					width={80}
					height={80}
					alt="playbutton"
				/>
			</button>
			<audio ref={audioRef} src={audio}></audio>
		</div>
	);
};
export default PlayButton;
