import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const categoriesAPI = createApi({
    reducerPath: 'categoriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        /*fetchAllGoods: build.mutation({
            query: (args) => ({
                url: '',
                method: 'POST',
                body: { ...args, command: 'searchGoods' }
            })
        })*/
        fetchAllCategories: build.query({
            query: () => ({
                url: '/categories/all'
            })
        })
    })
});

export const { useFetchAllCategoriesQuery } = categoriesAPI;