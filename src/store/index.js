import { createSelector } from "@reduxjs/toolkit";

export const getProducts = createSelector((state) => {
    console.log(state);
});
