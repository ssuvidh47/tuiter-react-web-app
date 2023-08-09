import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked": false,  
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
            },

        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },

    reducers: {
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        handleDislike(state, action) {
            const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
            if (index !== -1) {
              state.tuits[index].disliked = !state.tuits[index].disliked;
              state.tuits[index].dislikes += state.tuits[index].disliked ? 1 : -1;
            }
          }
        
    }
});

export const { createTuit, deleteTuit, handleDislike } = tuitsSlice.actions;
export default tuitsSlice.reducer;