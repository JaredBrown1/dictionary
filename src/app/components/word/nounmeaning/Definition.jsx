const Definition = () => {
	return (
		<div className="flex justify-start flex-col">
			<div className="flex pt-4">
				<h1 className="pr-4 text-xl font-bold">noun</h1>
				<div className="h-1 w-full mt-3 bg-gray-200"></div>
			</div>
			<div className="pt-6">
				<h1 className="text-gray-400 text-xl">Meaning</h1>
				<div className="pt-6 pl-10">
					<ul className="list-disc marker:text-purple-600">
						<li className="p-4">
							(etc.) A set of keys used to operate a typewriter, computer etc.
						</li>
						<li className="p-4">
							A component of many instruments including the piano, organ, and
							harpsichord <br /> consisting of usually black and white keys that
							cause different tones to be <br /> produced when struck.
						</li>
						<li className="p-4">
							A device with keys of a musical keyboard, used to control
							electronic sound-
							<br />
							producing devices which may be built into or separate from the
							keyboard device.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Definition;
