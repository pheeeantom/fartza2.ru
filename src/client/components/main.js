import React from "react";

import GoodsMin from './goods_min';
import CategoriesBar from './category/categories';
import ProductWrapper from'./goods';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props.goods);
        if (this.props.goods || window.location.pathname === "/") {
            return (
                <div className="px-16 md:px-12">
                    <div className="w-full sm:w-full md:w-full lg:w-1/5 inline-block text-center sm:text-center md:text-center lg:text-left">
                        <CategoriesBar />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-4/5 inline-block float-right">
                        <GoodsMin />
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
}