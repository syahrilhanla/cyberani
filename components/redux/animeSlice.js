import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
	name: "animeIndex",
	initialState: {
		episodeNum: 1,
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
		goToEpisode: (state) => {
			state.episodeNum = action.payload;
		},
	},
});

export const { nextEpisode, prevEpisode, goToEpisode } = animeSlice.actions;

export default animeSlice.reducer;
