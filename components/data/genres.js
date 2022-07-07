const genres = [
	"action",
	"adventure",
	"cars",
	"comedy",
	"crime",
	"dementia",
	"demons",
	"drama",
	"dub",
	"ecchi",
	"family",
	"fantasy",
	"game",
	"gourmet",
	"harem",
	"historical",
	"horror",
	"josei",
	"kids",
	"magic",
	"martial-arts",
	"mecha",
	"military",
	"music",
	"mystery",
	"parody",
	"police",
	"psychological",
	"romance",
	"samurai",
	"school",
	"sci-fi",
	"seinen",
	"shoujo",
	"shoujo-ai",
	"shounen",
	"shounen-ai",
	"slice-of-Life",
	"space",
	"sports",
	"super-power",
	"supernatural",
	"suspense",
	"thriller",
	"vampire",
	"yaoi",
	"yuri",
];

const capitalizeWords = genres.map((genre) => {
	const newWord = genre.split("");
	const firstLetter = newWord[0].toUpperCase();
	newWord[0] = firstLetter;
	return newWord.join("");
});

export default capitalizeWords;
