import React from "react";

import GoodsMin from './goods_min';
import CategoriesBar from './category/categories';
import ProductWrapper from'./goods';
import { useSelector } from "react-redux";

export default function Main(props) {
    const activeCategoryName = useSelector((state) => state.categoriesReducer.activeCategoryName);
    //console.log(this.props.goods);
    if (props.goods || window.location.pathname === "/") {
        return (
            <div className="px-16 md:px-12">
                <div className="w-full sm:w-full md:w-full lg:w-1/5 inline-block text-center sm:text-center md:text-center lg:text-left">
                    <CategoriesBar />
                </div>
                <div className="w-full sm:w-full md:w-full lg:w-4/5 inline-block float-right">
                    <h3 className="text-3xl mb-4">{activeCategoryName ?? "Все категории"}</h3>
                    <GoodsMin pageSize={4} />
                </div>
            </div>
        );
    }
    else {
        return (
            <ProductWrapper />
        );
    }
}