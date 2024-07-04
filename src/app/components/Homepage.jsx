"use client";

import React, { useEffect, useState } from "react";

function Homepage() {
	useEffect(() => {
		// Initialize your particle background script here
		setLoaded(true);
	}, []);
	const [isloaded, setLoaded] = useState(false);
	return (
		<>
			{isloaded && <div id="particleBg"></div>}

			<h1>Hello World!!</h1>
		</>
	);
}

export default Homepage;
