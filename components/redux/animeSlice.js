import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
	name: "animeIndex",
	initialState: {
		episodeList: [],
		episodeNum: 1,
		currentAnime: "",
	},
	reducers: {
		setEpisodeList: (state, action) => {
			state.episodeList = action.payload;
		},
		nextEpisode: (state) => {
			if (state.episodeNum < state.episodeList.length) state.episodeNum += 1;
		},
		prevEpisode: (state) => {
			if (state.episodeNum > 1) {
				state.episodeNum -= 1;
			}
		},
		goToEpisode: (state, action) => {
			state.episodeNum = parseInt(action.payload);
		},
		selectAnime: (state, action) => {
			state.currentAnime = action.payload;
		},
	},
});

export const {
	nextEpisode,
	prevEpisode,
	goToEpisode,
	selectAnime,
	setEpisodeList,
} = animeSlice.actions;

export default animeSlice.reducer;
