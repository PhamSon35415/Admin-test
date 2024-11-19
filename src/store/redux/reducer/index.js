import { createSlice } from "@reduxjs/toolkit";
import { getData, updateData, deleteData, addData } from "../actions";

// Hàm xử lý chung cho pending, fulfilled, và rejected
const handleDataState = (builder, thunk, entity) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            state.loading = false;
            state[entity] = action.payload;
        })
        .addCase(thunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
};

// Slice Posts
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        handleDataState(builder, getData, "posts");

        builder
            .addCase(addData.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(updateData.fulfilled, (state, action) => {
                const index = state.posts.findIndex(
                    (post) => post.id === action.payload.id
                );
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.posts = state.posts.filter(
                    (post) => post.id !== action.payload.id
                );
            });
    },
});

// Slice Members
const membersSlice = createSlice({
    name: "members",
    initialState: {
        members: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        handleDataState(builder, getData, "members");

        builder
            .addCase(addData.fulfilled, (state, action) => {
                state.members.push(action.payload);
            })
            .addCase(updateData.fulfilled, (state, action) => {
                const index = state.members.findIndex(
                    (member) => member.id === action.payload.id
                );
                if (index !== -1) {
                    state.members[index] = action.payload;
                }
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                console.log("Payload:", action.payload);

                state.members = state.members.filter(
                    (member) => member.id !== action.payload.id
                );
            });
    },
});

export const postsReducer = postsSlice.reducer;
export const membersReducer = membersSlice.reducer;
