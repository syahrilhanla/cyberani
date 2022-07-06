import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Jumbotron = ({ data }) => {
	return (
		<div className=" text-gray-300 flex justify-center min-w-full px-8">
			{/* <span className="w-[50px] flex items-center justify-start duration-300 opacity-30 group hover:opacity-100">
				<div>
					<FaArrowLeft className="w-6 h-6" />
				</div>
			</span> */}
			<div className="flex justify-center items-center bg-[#030B17] rounded-lg">
				<div className="px-7 max-w-md">
					<h2 className="text-3xl font-semibold mb-3 text-gray-200">
						{data.title}
					</h2>
					<span className="flex w-fit gap-2 mb-3">
						<p className="font-medium">{data.genre}</p>{" "}
						<p className="font-medium"> . </p>
						<p className="font-medium">{data.yearRelease}</p>
					</span>
					<p>{data.description}</p>
				</div>
				<div className="px-7 relative w-[700px] h-[400px] ">
					<div
						className="absolute top-0 left-0 z-10 w-full h-full"
						style={{ boxShadow: "130px -1px 60px 0px #030B17 inset" }}
					></div>
					<span className="z-0">
						<Image
							src={`/${data.imgURL}`}
							className={"rounded-lg"}
							alt="Current Image"
							layout={"fill"}
							objectFit="cover"
						/>
					</span>
				</div>
			</div>
			{/* <span className="w-[50px] flex items-center justify-end duration-300 opacity-30 group hover:opacity-100">
				<div>
					<FaArrowRight className="w-6 h-6" />
				</div>
			</span> */}
		</div>
	);
};

export default Jumbotron;
