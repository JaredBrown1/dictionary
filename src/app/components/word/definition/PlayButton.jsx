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
				<div className=" h-[48px] w-[48px]">
					<Image
						src="/images/icon-play.svg"
						alt="playbutton"
						width={48}
						height={48}
					/>
				</div>
			</button>
			<audio ref={audioRef} src={audio}></audio>
		</div>
	);
};
export default PlayButton;
