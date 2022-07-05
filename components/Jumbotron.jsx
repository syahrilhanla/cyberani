import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Jumbotron = () => {
	return (
		<div className=" text-gray-300 flex justify-between min-w-full px-8">
			<span className="w-[50px] flex items-center justify-start duration-300 opacity-30 group hover:opacity-100">
				<FaArrowLeft className="w-6 h-6" />
			</span>
			<div className="flex justify-center items-center bg-[#030B17] rounded-lg">
				<div className="px-7 max-w-md">
					<h2 className="text-3xl font-semibold mb-3 text-gray-200">
						Star Wars: Obi-Wan Kenobi
					</h2>
					<span className="flex w-fit gap-2 mb-3">
						<p className="font-medium">Action</p>{" "}
						<p className="font-medium"> . </p>
						<p className="font-medium">2021</p>
					</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						itaque molestias, iure labore pariatur ipsam, repellendus ducimus,
						possimus deserunt aliquid quod. Repudiandae minus, dolorem hic
						quidem voluptates doloribus recusandae sed.
					</p>
				</div>
				<div className="px-7 relative w-[700px] h-[400px] ">
					<div
						className="absolute top-0 left-0 z-10 w-full h-full"
						style={{ boxShadow: "130px -1px 60px 0px #030B17 inset" }}
					></div>
					<span className="z-0">
						<Image
							src={"/obiwan-kenobi.webp"}
							className={"rounded-lg"}
							alt="Current Image"
							layout={"fill"}
							objectFit="cover"
						/>
					</span>
				</div>
			</div>
			<span className="w-[50px] flex items-center justify-end duration-300 opacity-30 group hover:opacity-100">
				<FaArrowRight className="w-6 h-6" />
			</span>
		</div>
	);
};

export default Jumbotron;
