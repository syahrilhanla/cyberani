import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage((prevState) => prevState - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
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
			pages.unshift(<MdKeyboardDoubleArrowLeft title="First" size={24} />);
		}
		if (endPage < totalPages) {
			pages.push("...");
			pages.push(<MdKeyboardDoubleArrowRight title="Last" size={24} />);
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-center gap-2 text-slate-200">
			{/* Previous Button */}
			<button
				className={`px-3 py-3 rounded-full font-normal text-sm transition-all duration-300 shadow-sm flex items-center gap-1 ${
					currentPage > 1
						? "bg-[#1e3a8a]/70 text-white hover:bg-[#2563eb]/60" // Platform theme colors
						: "bg-[#374151] text-gray-300 cursor-not-allowed"
				}`}
				title="Previous Page"
				onClick={handlePrev}
				disabled={currentPage <= 1}
			>
				<FaChevronLeft />
			</button>

			{/* Page Numbers */}
			<div className="flex gap-2">
				{generatePageNumbers().map((page, index) => (
					<button
						key={index}
						className={`h-10 w-10 rounded-full font-normal flex items-center justify-center text-sm transition-all duration-300 ${
							page === currentPage
								? "bg-[#1e40af]/70 text-white" // Active page color
								: page !== "..."
								? "bg-[#1f2937] text-gray-300 hover:bg-[#2563eb]/40 hover:text-white" // Hover effect
								: "bg-[#374151] text-gray-300 cursor-not-allowed"
						}`}
						onClick={() => {
							if (page.props?.title === "First") return handlePageClick(1);
							if (page.props?.title === "Last")
								return handlePageClick(totalPages);

							if (typeof page === "number") return handlePageClick(page);
						}}
						disabled={page === "..."}
					>
						{page}
					</button>
				))}
			</div>

			{/* Next Button */}
			<button
				className={`px-3 py-3 rounded-full font-normal text-sm transition-all duration-300 shadow-sm flex items-center gap-1 ${
					currentPage < totalPages
						? "bg-[#1e3a8a]/70 text-white hover:bg-[#2563eb]/60" // Platform theme colors
						: "bg-[#374151] text-gray-300 cursor-not-allowed"
				}`}
				title="Next Page"
				onClick={handleNext}
				disabled={currentPage >= totalPages}
			>
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Pagination;
