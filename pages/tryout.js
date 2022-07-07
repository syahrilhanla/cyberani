import React, { useEffect } from "react";

const tryout = () => {
	useEffect(() => {
		fetch("https://gogoanime.herokuapp.com/popular")
			.then((response) => response.json())
			.then((animelist) => console.log(animelist));
	}, []);

	return <div>Fetching anime</div>;
};

export default tryout;
