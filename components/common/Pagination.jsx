import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ topPage, currentPage, setCurrentPage, totalPages }) => {
	console.log({ topPage, currentPage, totalPages });

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage((prevState) => prevState - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < topPage) {
			setCurrentPage((prevState) => prevState + 1);
		}
	};

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	const generatePageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 3; // Number of pages to display around the current page
		const startPage = Math.max(
			1,
			currentPage - Math.floor(maxVisiblePages / 2)
		);
		const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		// Add ellipsis for skipped pages
		if (startPage > 1) {
			pages.unshift("...");
			pages.unshift("First");
		}
		if (endPage < totalPages) {
			pages.push("...");
			pages.push("Last");
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-center gap-2 bg-[#1a2235] text-slate-200 py-4 rounded-lg shadow-md">
			{/* Previous Button */}
			<button
				className={`px-3 py-2 rounded-md font-medium transition-all duration-300 shadow-sm flex items-center gap-1 ${
					currentPage > 1
						? "bg-blue-500 text-white hover:bg-blue-600"
						: "bg-gray-500 text-gray-300 cursor-not-allowed"
				}`}
				onClick={handlePrev}
				disabled={currentPage <= 1}
			>
				<FaChevronLeft />
				<span>Prev</span>
			</button>

			{/* Page Numbers */}
			<div className="flex gap-2">
				{generatePageNumbers().map((page) => (
					<button
						key={page}
						className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${
							page === currentPage
								? "bg-blue-700 text-white"
								: "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
						}`}
						onClick={() => handlePageClick(page)}
					>
						{page}
					</button>
				))}
			</div>

			{/* Next Button */}
			<button
				className={`px-3 py-2 rounded-md font-medium transition-all duration-300 shadow-sm flex items-center gap-1 ${
					currentPage < topPage
						? "bg-blue-500 text-white hover:bg-blue-600"
						: "bg-gray-500 text-gray-300 cursor-not-allowed"
				}`}
				onClick={handleNext}
				disabled={currentPage >= topPage}
			>
				<span>Next</span>
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Pagination;
