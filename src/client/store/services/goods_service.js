import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const goodsAPI = createApi({
    reducerPath: 'goodsAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        /*fetchAllGoods: build.mutation({
            query: (args) => ({
                url: '',
                method: 'POST',
                body: { ...args, command: 'searchGoods' }
            })
        })*/
        fetchAllGoods: build.query({
            query: (args) => ({
                url: '/goods',
                params: args
            })
        }),
        fetchAllGoodsCats: build.query({
            query: (args) => ({
                url: '/goods_cats',
                params: args
            })
        }),
        fetchGoodsById: build.query({
            query: ({ id, args }) => ({
                url: `/goods/${id}`,
                params: args
            })
        }),
        fetchGoodsByNick: build.query({
            query: (args) => ({
                url: `/goods/nick/${args.nick}`,
                params: {since: args.since, lat: args.lat, lon: args.lon}
            })
        })
    })
});

export const { useFetchAllGoodsQuery, useFetchAllGoodsCatsQuery, useFetchGoodsByIdQuery, useFetchGoodsByNickQuery } = goodsAPI;



//export const fetchAllGoodsState = (state) => goodsAPI.endpoints.fetchAllGoods.select()(state);