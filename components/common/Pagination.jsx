const Pagination = ({ topPage, currentPage, setCurrentPage }) => {
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage((prevState) => prevState - 1);
		}
	};

	const handleNext = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<div className="flex flex-row bg-[#16386b] text-slate-200">
			<button
				className="px-3 py-2 hover:bg-[#3360a3] duration-300 rounded-sm w-28"
				onClick={handlePrev}
			>
				&#60; Previous
			</button>
			<button
				className={
					currentPage == currentPage
						? `px-3 py-2 bg-[#3f75c7] rounded-sm`
						: `px-3 py-2 hover:bg-[#3360a3] duration-300 rounded-sm`
				}
			>
				{currentPage}
			</button>

			<button
				className="px-3 py-2 hover:bg-[#3360a3] duration-300 rounded-sm w-28"
				onClick={handleNext}
			>
				Next &#62;
			</button>
		</div>
	);
};

export default Pagination;
