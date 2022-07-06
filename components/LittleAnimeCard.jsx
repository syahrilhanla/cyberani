import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const LittleAnimeCard = () => {
	return (
		<div>
			<div className="relative ">
				<div className="absolute top-0 left-0 z-10 h-full w-full">
					<div className="flex items-center absolute top-16 left-3 gap-2">
						<FaPlay /> <p>S1 Ep1</p>
					</div>
				</div>
				<span>
					<Image
						src={"/jujutsu-kaisen.jpg"}
						width={200}
						height={110}
						className="rounded-lg z-0"
					/>
				</span>
			</div>
		</div>
	);
};

export default LittleAnimeCard;
