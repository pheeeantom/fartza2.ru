import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: null,
    activeCategoryName: null
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setCategoryName(state, action) {
            state.activeCategoryName = action.payload;
        }
    }
    /*extraReducers: (builder) => {
        builder.addCase(getGoodsFromAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.goods = action.payload;
        }),
        builder.addCase(getGoodsFromAPI.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getGoodsFromAPI.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }*/
});

const { actions, reducer } = categoriesSlice;

// export individual action creator functions
export const { setCategory, setCategoryName } = actions;

// often the reducer is a default export, but that doesn't matter
export default reducer;