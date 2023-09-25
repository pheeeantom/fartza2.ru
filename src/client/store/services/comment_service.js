import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const commentsAPI = createApi({
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (build) => ({
        fetchComments: build.query({
            query: ({id, args}) => ({
                url: `/comments/${id}`,
                params: args
            })
        }),
    })
});

export const { useFetchCommentsQuery } = commentsAPI;