import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        /*fetchAllGoods: build.mutation({
            query: (args) => ({
                url: '',
                method: 'POST',
                body: { ...args, command: 'searchGoods' }
            })
        })*/
        fetchUserById: build.query({
            query: (id) => ({
                url: `/users/${id}`
            })
        })
    })
});

export const { useFetchUserByIdQuery } = usersAPI;