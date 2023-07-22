import React from "react";

//import { connect } from "react-redux";
import { setLastArgs } from "../../store/reducers/goods_slice";
//import { goodsAPI } from "../../store/services/goods_service";

import { links } from "./links";
import { useDispatch, useSelector } from "react-redux";

function Nav(props) {
    /*constructor(props) {
        super(props);

        //this.state = { lastArgs: null };

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }*/

    const lastArgs = useSelector((state) => state.goodsReducer.lastArgs)
    const dispatch = useDispatch()

    function handleClick() {
        let num;
        for (let i = 0; i < links.length; i++) {
            if (props.name == links[i]) {
                num = i;
            }
        }
        props.func(num);
        //let [searchParams, setSearchParams] = useSearchParams();
        //const searchParams = new URLSearchParams(location.search);
        /*let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0};*/
        if (props.name == "Популярные") {
            /*const url = new URL(window.location);
            url.searchParams.set('sort', 'popular');
            window.history.pushState({}, '', url);
            window.location.reload();*/
            /*searchParams.set('sort', 'popular');
            window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
            /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
                if (resolve.body.goods[0].length == 0) {
                this.props.updateGoods('Ничего не найдено!');
                return;
                }
                this.props.updateGoods(resolve.body.goods[0]);
            }).catch(reject => {
                this.props.updateGoods(reject.error);
            });*/
            //this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
			dispatch(setLastArgs({ ...lastArgs, sort: 'popular' }));
        }
        else if (props.name == "Новые") {
            /*const url = new URL(window.location);
            url.searchParams.set('sort', 'new');
            window.history.pushState({}, '', url);
            window.location.reload();*/
            //searchParams.set('sort', 'new');
            //window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
            /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
                if (resolve.body.goods[0].length == 0) {
                this.props.updateGoods('Ничего не найдено!');
                return;
                }
                this.props.updateGoods(resolve.body.goods[0]);
            }).catch(reject => {
                this.props.updateGoods(reject.error);
            });*/
            //this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
			dispatch(setLastArgs({ ...lastArgs, sort: 'new' }));
        }
        else if (props.name == 'Ближайшие') {
            dispatch(setLastArgs({ ...lastArgs, sort: 'distance' }));
        }
    }

    let className = 'block md:inline-block align-middle px-2 mx-2 md:border-2 rounded-sm hover:border-neutral-300';
    if (props.isActive) {
        className += ' rounded-tl-lg';
    }
    return (
        <li className={className}><button className="text-white text-lg hover:text-neutral-300" onClick={handleClick}>{props.name}</button></li>
    );
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}*/

export default Nav;

/*const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	setLastArgs: setLastArgs
}

export default connect(null, mapDispatchToProps)(Nav);*/