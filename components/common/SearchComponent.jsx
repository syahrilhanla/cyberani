import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchAnimeQuery } from "../utils/fetchAnime";
import DisplayResults from "./DisplayResults";

const SearchComponent = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = (query) => {
		setTimeout(() => {
			if (query === "") {
				setSearchQuery("");
			}
			// if letter less than 3, do nothing
			if (query.length < 3) return;

			setSearchQuery(query);
		}, 750);
	};

	const fetchData = async () => {
		const results = await fetchAnimeQuery(searchQuery);
		setSearchResults(results);
	};

	useEffect(() => {
		fetchData();
	}, [searchQuery]);

	useEffect(() => {}, [searchResults]);

	return (
		<div className="relative">
			<div
				className="flex flex-row justify-between
      border-gray-200 border-b items-center md:mr-10 mr-[-6rem]  text-slate-300"
			>
				<input
					type="text"
					className=" bg-transparent placeholder-shown:font-light focus:w-[165px] focus:mr-[50px] 
           placeholder-gray-400 duration-500 focus:outline-none"
					placeholder="Search"
					onChange={(e) => handleChange(e.target.value)}
				/>
				<FaSearch />
			</div>
			<DisplayResults searchResults={searchResults} searchQuery={searchQuery} />
		</div>
	);
};

export default SearchComponent;
