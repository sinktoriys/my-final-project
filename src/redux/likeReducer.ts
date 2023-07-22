import { createSlice } from '@reduxjs/toolkit'


type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = { }

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer