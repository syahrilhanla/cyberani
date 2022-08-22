import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
	name: "animeIndex",
	initialState: {
		episodeNum: 1,
		currentAnime: "",
	},
	reducers: {
		nextEpisode: (state) => {
			state.episodeNum += 1;
		},
		prevEpisode: (state) => {
			if (state.episodeNum > 0) {
				state.episodeNum -= 1;
			}
		},
		goToEpisode: (state, action) => {
			state.episodeNum = parseInt(action.payload);
		},
		selectAnime: (state, action) => {
			// when select a new anime always go to ep 1
			state.episodeNum = 1;
			state.currentAnime = action.payload;
		},
	},
});

export const { nextEpisode, prevEpisode, goToEpisode, selectAnime } =
	animeSlice.actions;

export default animeSlice.reducer;
