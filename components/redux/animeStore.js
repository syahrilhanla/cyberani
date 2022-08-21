import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./animeSlice";

export default configureStore({
	reducer: { animeReducer },
});
