import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import goodsReducer from './reducers/goods_slice';
import categoriesReducer from './reducers/categories_slice';
import { goodsAPI } from './services/goods_service';
import { categoriesAPI } from './services/categories_service';
import { usersAPI } from './services/users_service';

/*const rootReducer = combineReducers({
    goodsReducer,
    categoriesReducer,
    [goodsAPI.reducerPath]: goodsAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer
});*/

export const setupStore = () => {
    const store = configureStore({
        reducer: {
            goodsReducer,
            categoriesReducer,
            [goodsAPI.reducerPath]: goodsAPI.reducer,
            [categoriesAPI.reducerPath]: categoriesAPI.reducer,
            [usersAPI.reducerPath]: usersAPI.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsAPI.middleware).concat(categoriesAPI.middleware)
            .concat(usersAPI.middleware)
    });

    setupListeners(store.dispatch);

    return store;
}