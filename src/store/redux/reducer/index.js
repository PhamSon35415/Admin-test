import { createSlice } from "@reduxjs/toolkit";
import { getData, updateData, deleteData, addData } from "../actions";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(addData.pending, (state) => {
                state.loading = true;
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(addData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateData.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateData.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.posts.findIndex(
                    (product) => product.id === action.payload.id
                );
                if (index !== -1) {
                    state.posts[index] = action.payload.data;
                }
            })
            .addCase(updateData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(deleteData.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                console.log(action.payload);

                state.loading = false;
                state.posts = state.posts.filter(
                    (product) => product.id !== action.payload.id
                );
                console.log(state.posts);
            })
            .addCase(deleteData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// const categoriesSlice = createSlice({
//     name: "categories",
//     initialState: {
//         categories: [],
//         loading: false,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getData.pending, (state, action) => {
//                 state.loading = true;
//             })
//             .addCase(getData.fulfilled, (state, action) => {
//                 state.loading = true;
//                 state.categories = action.payload;
//             })
//             .addCase(addData.fulfilled, (state, action) => {
//                 state.loading = true;
//                 state.categories.push(action.payload);
//             })
//             .addCase(updateData.fulfilled, (state, action) => {
//                 const index = state.categories.findIndex(
//                     (product) => product.id === action.payload.id
//                 );
//                 if (index !== -1) {
//                     state.categories[index] = action.payload;
//                 }
//             })
//             .addCase(deleteData.fulfilled, (state, action) => {
//                 state.categories = state.categories.filter(
//                     (product) => product.id !== action.payload
//                 );
//             });
//     },
// });
const membersSlice = createSlice({
    name: "members",
    initialState: {
        members: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.members = action.payload;
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.members.push(action.payload);
            })
            .addCase(updateData.fulfilled, (state, action) => {
                const index = state.members.findIndex(
                    (user) => user.id === action.payload.id
                );
                if (index !== -1) {
                    state.members[index] = action.payload;
                }
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.members = state.members.filter(
                    (user) => user.id !== action.payload.id
                );
            });
    },
});

export const postsReducer = postsSlice.reducer;
export const membersReducer = membersSlice.reducer;
// export const categoriesReducer = categoriesSlice.reducer;
