import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['Delete', 'Post', 'DeleteFav', 'PostFav'],
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        /*fetchAllGoods: build.mutation({
            query: (args) => ({
                url: '',
                method: 'POST',
                body: { ...args, command: 'searchGoods' }
            })
        })*/
        fetchUserByNick: build.query({
            query: (nick) => ({
                url: `/users/${nick}`,
                method: 'GET'
            })
        }),
        subscribe: build.mutation({
            query: (to_id) => ({
                url: `/subscribe/${to_id}`,
                method: 'POST'
            }),
            invalidatesTags: ['Post']
        }),
        getSubscriptions: build.query({
            query: () => ({
                url: '/subscriptions',
                method: 'GET'
            }),
            providesTags: result => ['Delete', 'Post']
        }),
        unsubscribe: build.mutation({
            query: (to_id) => ({
                url: `/unsubscribe/${to_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Delete']
        }),
        addToFavorites: build.mutation({
            query: (to_id) => ({
                url: `/favorites/${to_id}`,
                method: 'POST'
            }),
            invalidatesTags: ['PostFav']
        }),
        getFavorites: build.query({
            query: (args) => ({
                url: '/favorites',
                method: 'GET',
                params: {since: args.since, lat: args.lat, lon: args.lon}
            }),
            providesTags: result => ['DeleteFav', 'PostFav']
        }),
        removeFromFavorites: build.mutation({
            query: (to_id) => ({
                url: `/favorites/${to_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['DeleteFav']
        }),
        isFavorite: build.query({
            query: (goods_id) => ({
                url: `/is_favorite/${goods_id}`,
                method: 'GET'
            }),
            providesTags: result => ['DeleteFav', 'PostFav']
        }),
        /*editUser: build.mutation({
            query: ({id, args}) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: args
            })
        }),
        changePass: build.mutation({
            query: ({id, args}) => ({
                url: `/changepass/${id}`,
                method: 'PUT',
                body: args
            })
        })*/
    })
});

export const { useFetchUserByNickQuery, useSubscribeMutation, useGetSubscriptionsQuery, useUnsubscribeMutation,
    useAddToFavoritesMutation, useGetFavoritesQuery, useRemoveFromFavoritesMutation, useIsFavoriteQuery } = usersAPI;