import { configureStore } from "@reduxjs/toolkit";
// import { categoriesSlice, postsSlice, usesSlice } from "./reducer";
import { membersReducer, postsReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        members: membersReducer,
    },
});
