import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchAnimeQuery } from "../utils/fetchAnime";
import DisplayResults from "./DisplayResults";

const SearchComponent = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isFocus, setIsFocus] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setLoading(true);

		const query = e.target.value;
		setSearchQuery(query);
		if (query === "") {
			setSearchResults([]);
			setLoading(false);
			return;
		}
		if (query.length < 3) {
			setLoading(false);
			return;
		}
		if (query.length < 3) return;

		// Debounce
		clearTimeout(window.__searchTimeout);
		window.__searchTimeout = setTimeout(() => {
			fetchData(query);
		}, 500);
	};

	const fetchData = async (query) => {
		const { results } = await fetchAnimeQuery(query);
		setSearchResults(results);
		setLoading(false);
	};

	return (
		<div className="relative max-w-md mr-4">
			<div
				className="flex w-48 focus-within:w-72 items-center bg-transparent px-4 py-2 transition-all
				border-b border-slate-600"
			>
				<input
					type="text"
					placeholder="Search anime..."
					value={searchQuery}
					onChange={handleChange}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setTimeout(() => setIsFocus(false), 200)}
					className="bg-transparent outline-none focus:text-slate-300 text-slate-600 w-full placeholder-slate-400"
				/>
				<FaSearch className="text-slate-400 mr-2" />
			</div>

			{isFocus && searchQuery.length >= 3 && (
				<DisplayResults
					loading={loading}
					searchResults={searchResults}
					searchQuery={searchQuery}
				/>
			)}
		</div>
	);
};

export default SearchComponent;
