import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fetchAllGoodsState, goodsAPI } from '../store/services/goods_service';
import { store } from '../app';
import { setLastArgs } from '../store/reducers/goods_slice';
import { Carousel } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { useFetchAllGoodsCatsQuery, useFetchAllGoodsQuery } from '../store/services/goods_service';
import { calcCrow } from '../math/distance';
import { useEffect } from 'react';
import { useFetchGoodsByNickQuery } from '../store/services/goods_service';
import { useGetFavoritesQuery } from '../store/services/users_service';

import { pageSize } from '../../config';

function GoodsMin(props) {
//	unsubscribe = null;

	/*constructor(props) {
		super(props);
		this.state = {goods: null, count: null, isLoading: null, error: null};
		this.move = this.move.bind(this);
		//this.state = { lastArgs: null };
		//this.state = { goods: useSelector((state) => state.goods) };
		//this.getNew = this.getNew.bind(this);
		//this.getPopular = this.getPopular.bind(this);
  		//this.dispatch = useDispatch();
		//const subscriptionChangeState = this.props.emitter.subscribe("CHANGE", (state) => this.setState({ goods: state }));
	}

	/*componentDidUpdate(prevProps) {
		if (this.state.first || JSON.stringify(this.props.lastArgs) !== JSON.stringify(prevProps.lastArgs)) {
			this.setState({first: false});
			console.log(this.props.lastArgs);
			this.props.fetchAllGoods(this.props.lastArgs);
		}
	}*/

	//getNew() {
		/*const data = new FormData();
		data.append('command', 'getGoods');
		data.append('since', 0);*/
		/*fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({command: 'getNew', since: 0})
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
			});
		});*/
		/*const searchParams = new URLSearchParams(location.search);
		this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.props.updateGoods('Ничего не найдено!');
				return;
			}
			this.props.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.props.updateGoods(reject.error);
		});*/
		
		//const searchParams = new URLSearchParams(location.search);
		//this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'new');
		
		/*const searchParams = new URLSearchParams(location.search);
		this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0, sort: 'new'});*/
		//console.log(10);
	//}

	//getPopular() {
		/*const searchParams = new URLSearchParams(location.search);
		this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
			if (resolve.body.goods[0].length == 0) {
				this.props.updateGoods('Ничего не найдено!');
				return;
			}
			this.props.updateGoods(resolve.body.goods[0]);
		}).catch(reject => {
			this.props.updateGoods(reject.error);
		});*/
		
		//const searchParams = new URLSearchParams(location.search);
		//this.props.getGoodsFromAPI((searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", 0, 'popular');
		/*const searchParams = new URLSearchParams(location.search);
		this.props.getGoodsAll({ word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
			searchParams.get('query') : ""), since: 0, sort: 'popular'})
	}*/

	const dispatch = useDispatch()

	const lastArgs = useSelector((state) => state.goodsReducer.lastArgs);

	let query
    if (lastArgs.category)
        query = useFetchAllGoodsCatsQuery
	else if (props.option === "profile") 
		query = useFetchGoodsByNickQuery
	else if (props.option === "favorites")
		query = useGetFavoritesQuery
    else
        query = useFetchAllGoodsQuery

    const { data, error, isLoading, isError, isFetching } = query(props.option !== "profile" ? lastArgs : { ...lastArgs, nick: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop()})

	//componentDidUpdate(prevProps) {
		/*let fetch = this.props.lastArgs?.category ? this.props.fetchAllGoodsCatsState : this.props.fetchAllGoodsState
		let fetch2 = prevProps.lastArgs?.category ? prevProps.fetchAllGoodsCatsState : prevProps.fetchAllGoodsState
		if (fetch(this.props.lastArgs).isLoading !== fetch2(prevProps.lastArgs).isLoading ||
			fetch(this.props.lastArgs).isUninitialized !== fetch2(prevProps.lastArgs).isUninitialized ||
			fetch(this.props.lastArgs).isError !== fetch2(prevProps.lastArgs).isError ||
			fetch(this.props.lastArgs).data !== fetch2(prevProps.lastArgs).data) {
			if (!fetch(this.props.lastArgs).isLoading &&
				!fetch(this.props.lastArgs).isUninitialized) {
				if (!fetch(this.props.lastArgs).isError) {
					this.setState({goods: fetch(this.props.lastArgs).data.goods[0].rows, count: fetch(this.props.lastArgs).data.goods[0].count});
					//console.log(goods);
					/*for (let i = 0; i < goods.length; i++)
						rows.push(<MyCard id={goods[i].id} name={goods[i].name} img={goods[i].photos} price={goods[i].price}
							createdAt={goods[i].created_at} nickname={goods[i].user?.nickname}
							rating={goods[i].user?.rating} />);*/
					/*if (rows.length < 12)
						while (rows.length < 12)
							rows.push(<div></div>)*/
				/*} else {
					//rows = fetch(this.props.lastArgs).error.data.error;
					this.setState({isError: fetch(this.props.lastArgs).error.data.error});
				}
			}
			else {
				//rows = 'Подождите, идет загрузка...';
				this.setState({isLoading: 'Подождите, идет загрузка...'});
			}
		}*/
		/*if (this.props !== prevProps) {
			console.log(this.props.fetchAllGoodsState(this.props.lastArgs).data);
		}
	}*/

	//componentDidUpdate(prevProps) {
/*
		const { fetchAllGoods } = this.props;
		// Start a subscription for the component to the cached data
		const { unsubscribe } = fetchAllGoods();
	
		// Store the unsubscribe promise for later use
		this.unsubscribe = unsubscribe;
*/

	/*	if (this.state.first || JSON.stringify(this.props.lastArgs) !== JSON.stringify(prevProps.lastArgs)) {
			this.setState({first: false});
			const searchParams = new URLSearchParams(location.search);
			let lastArgs = { word: ((searchParams.get('query') && searchParams.get('query').length > 1) ?
				searchParams.get('query') : ""), since: 0};
			if (!searchParams.get('category')) {
				if (searchParams.get('sort') == 'new' || !searchParams.get('sort')) {
					this.props.fetchAllGoods({ ...lastArgs, sort: 'new' });
					this.props.setLastArgs({ ...lastArgs, sort: 'new' });
					//this.setState({ lastArgs: { ...lastArgs, sort: 'new' } });
				}
				else if (searchParams.get('sort') == 'popular') {
					this.props.fetchAllGoods({ ...lastArgs, sort: 'popular' });
					this.props.setLastArgs({ ...lastArgs, sort: 'popular' });
					//this.setState({ lastArgs: { ...lastArgs, sort: 'popular' } });
				}
			}
			else {
				if (searchParams.get('sort') == 'new' || !searchParams.get('sort')) {
					this.props.fetchAllGoodsCats({ ...lastArgs, sort: 'new', category: searchParams.get('category') });
					this.props.setLastArgs({ ...lastArgs, sort: 'new', category: searchParams.get('category') });
				}
				else if (searchParams.get('sort') == 'popular') {
					this.props.fetchAllGoodsCats({ ...lastArgs, sort: 'popular', category: searchParams.get('category') });
					this.props.setLastArgs({ ...lastArgs, sort: 'popular', category: searchParams.get('category') });
				}
			}
		}
	}*/

	/*componentDidUpdate(prevProps) {
		if (this.props.goods !== prevProps.goods)
			this.setState({goods: this.props.goods});
	}*/

	/*componentWillReceiveProps(nextProps) {
		console.log(nextProps.goods);
		if (!nextProps.goods) {
			console.log(10000000000000);
			if (!window.location.href.match("search=true")) {
				if (window.location.href.match("sort=new") || !window.location.href.match("sort")) {
					this.getNew();
				}
				else if (window.location.href.match("sort=popular")) {
					this.getPopular();
				}
			}
		}
		else {
			this.setState({goods: nextProps.goods});
		}
	}*/

	/*componentWillReceiveProps(newProps) {
		console.log(newProps.goods);
		this.setState({ goods: newProps.goods });
	}*/

	useEffect(() => {
		getLocation();
	}, []);

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else { 
			alert("Разрешите геолокацию чтобы видеть ближайшие товары...");
		}
	}
		
	function showPosition(position) {
		dispatch(setLastArgs({...lastArgs, lat: position.coords.latitude, lon: position.coords.longitude}));
	}

	function move(arg) {
		if (arg === "left") {
			dispatch(setLastArgs({...lastArgs, since: lastArgs.since - 1}));
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', (this.props.lastArgs.since - 1).toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		}
		else if (arg === "right") {
			dispatch(setLastArgs({...lastArgs, since: lastArgs.since + 1}));
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', (this.props.lastArgs.since + 1).toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		}
		else {
			dispatch(setLastArgs({...lastArgs, since: arg - 1}));
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', arg.toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		
		}
	}

	//render() {
		/*let rows = [];
		let rowsGroups = [];
		let j = 0;
		for (let i = 0; i < this.state.goods.length; i++) {
			rows.push(<Card name={this.state.goods[i].name} img={this.state.goods[i].photos} price={this.state.goods[i].price} createdAt={this.state.goods[i].created_at} />);
			j++;
			if (j == 3 || i == this.state.goods.length - 1) {
				j = 0;
				rowsGroups.push(<div className="card-group">{rows}</div>);
				rows = [];
			}
		}
		return (
			<div>
			  {rowsGroups}
			</div>
		);*/
		//console.log(this.state.goods);
		//let rows = [];
		/*let count;*/
		//let fetchAllGoodsState = goodsAPI.endpoints.fetchAllGoods;
		//console.log(fetchAllGoodsState.select(this.state.lastArgs)(store.getState()));
		//console.log(fetchAllGoodsState);
		//console.log(this.state.lastArgs);
		/*if (isLoading) {
			rows = isLoading;
		}
		else if (error) {
			rows = error.data.error;
		}
		else if (data) {
			if (props.option === "favorites") {
				rows = data.favorites[0][0].rows.map((fav) => <MyCard key={`MyCard1-${fav.good.id}`} id={fav.good.id} name={fav.good.name} img={fav.good.photos} price={fav.good.price}
					createdAt={fav.good.created_at} nickname={fav.good.user?.nickname}
					rating={fav.good.user?.rating} distance={fav.good.distance} key={fav.good.id} isByNick={props.option === "profile"} />);
			}
			else {
				rows = data.goods[0].rows.map((goods) => <MyCard key={`MyCard2-${fav.good.id}`} id={goods.id} name={goods.name} img={goods.photos} price={goods.price}
					createdAt={goods.created_at} nickname={goods.user?.nickname}
					rating={goods.user?.rating} distance={goods.distance} key={goods.id} isByNick={props.option === "profile"}
					isAuthorized={data.authorized} />);
			}
		}*/

		//console.log(this.props.fetchAllGoodsState(this.props.lastArgs));
		
		
		//console.log(fetchAllGoodsState(store.getState()));
		//console.log(this.props.activeCategoryName)
		//console.log(this.props.lastArgs);
		let count = props.option === "favorites" ? data?.favorites[0][0].count : data?.goods[0].count;

		return (
			//<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 mb-3 mt-3">
			<>
				<main id={props.option !== "profile" ? "goods-min" : "profile-goods-min"}>
				{error ? error.data.error : isLoading ? isLoading : !isError && !isFetching ? (
					props.option === "favorites" ?
							data.favorites[0][0].rows.map((fav) => <MyCard id={fav.good.id} key={'MyCard1-' + fav.good.id} name={fav.good.name} img={fav.good.photos} price={fav.good.price}
									createdAt={fav.good.created_at} nickname={fav.good.user?.nickname}
									rating={fav.good.user?.rating} distance={fav.good.distance} isByNick={props.option === "profile"} />)
					:
							data.goods[0].rows.map((goods) => <MyCard id={goods.id} key={'MyCard2-' + goods.id} name={goods.name} img={goods.photos} price={goods.price}
									createdAt={goods.created_at} nickname={goods.user?.nickname}
									rating={goods.user?.rating} distance={goods.distance} isByNick={props.option === "profile"}
									isAuthorized={data.authorized} />)
				) : null}
				</main>
				{error ? null : (
					<div className={props.pageSize === pageSize / 2 ? "pl-7" : null}>
						{data && count > 0 ? <button onClick={() => lastArgs?.since > 0 && move("left")}>&#60;</button> : null}
						{data && count > 0 && lastArgs?.since > 1 ? "..." : null}
						{data && count > 0 && lastArgs?.since > 0	? <button onClick={() => move(lastArgs?.since)}>{lastArgs?.since}</button> : null}
						{data && count > 0 ? <button className="underline" onClick={() => move(lastArgs?.since + 1)}>{lastArgs?.since + 1}</button> : null}
						{data && count > (lastArgs?.since + 1) * props.pageSize ? <button onClick={() => move(lastArgs?.since + 2)}>{lastArgs?.since + 2}</button> : null}
						{data && count > (lastArgs?.since + 2) * props.pageSize ? "..." : null}
						{data && count > 0 ? <button onClick={() => (lastArgs?.since + 1) * props.pageSize < count && move("right")}>&#62;</button> : null}	
				</div>
				)}
			</>
			//</div>
		);
	//}
}

function MyCard(props) {
	/*constructor(props) {
		super(props);
	}

	render() {*/
		/*let date = new Date(this.props.createdAt);
		let dateStr = date.toLocaleString('ru', {
	        year: 'numeric',
	        month: 'long',
	        day: 'numeric',
	        hour: 'numeric',
	        minute: 'numeric'
	      });
		let butImg = [];
		//console.log(this.props.img);
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
			else
				butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
		}
		let img = [];
		for (let i = 0; i < this.props.img.length; i++) {
			if (i == 0)
				img.push(<div className="carousel-item active"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
			else
				img.push(<div className="carousel-item"><img className="d-block w-100" src={"goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
		}*/

		let date = new Date(props.createdAt);
		let dateStr = date.toLocaleString('ru', {
	        year: 'numeric',
	        month: 'long',
	        day: 'numeric',
	        hour: 'numeric',
	        minute: 'numeric'
	      });
		return (
			/*<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"  style={{float: 'left', height: '450px'}}>
				<div className="card m-1">
					<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						{butImg}
					</div>
					<div className="carousel-inner">
						{img}
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
					</div>
					<div className="card-body">
					<a href={"/goods/" + this.props.id} target="_blank" style={{color: "black"}}><h5 className="card-title">{this.props.name.length > 45 ? this.props.name.substring(0, 45) + "..." : this.props.name}</h5></a>
					<p className="card-text">{this.props.price + "₽"}</p>
					<p className="card-text"><small className="text-muted">{dateStr}</small></p>
					</div>
				</div>
			</div>*/
			<Card className="h-96 mb-5 bg-neutral-200">
				{props.isByNick && props.isAuthorized ? <>
					<form action={"/api/goods/" + props.id} method="post" enctype="multipart/form-data">
						<input type="hidden" name="status" value="deleted" />
						<button type="submit" className="btn">Удалить</button> 
					</form>
				</> : null}
				<Carousel className="goods-carousel" slide={false} indicators={false}>
					{props.img.map(img => <img src={"/goods_photos/" + img} key={img} alt="slide" />)}
				</Carousel>
				<a href={"/goods/" + props.id} target="_blank" style={{color: "black"}}><h5 className="break-words">{props.name.length > 45 ? props.name.substring(0, 20) + "..." : props.name}</h5></a>
				{props.price ? <p>{props.price + "₽"}</p> : null}
				{props.isByNick ? null :
					<p>
						<a href={props.nickname ? "/user/" + props.nickname : undefined}>{props.nickname ?? "аноним"}</a>
						{/* <span className='inline-block px-5 float-right text-lg'>{props.rating ?? "-"}<img alt="star" src="/service_photos/star.png" width="20" className='inline'/></span> */}
					</p>
				}
				{props.distance && <p><small className="text-muted">{"Расстояние: " + (props.distance / 1000).toFixed(1) + "км"}</small></p>}
				<p><small className="text-muted">{dateStr}</small></p>
			</Card>
		);
	//}
}

/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		fetchAllGoodsCatsState: (args) => goodsAPI.endpoints.fetchAllGoodsCats.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs,
		activeCategoryName: state.categoriesReducer.activeCategoryName
    };
}*/

/*goods: state.goodsReducer.goods,
isLoading: state.goodsReducer.isLoading,
error: state.goodsReducer.error*/

/*const mapDispatchToProps =  (dispatch) => {
  return {
    getGoodsAll: (word, since, sort) => dispatch(getGoodsFromAPI(word, since, sort))
  }
}*/

/*const mapDispatchToProps = {
    fetchAllGoods: goodsAPI.endpoints.fetchAllGoods.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
	fetchAllGoodsCats: goodsAPI.endpoints.fetchAllGoodsCats.initiate,
	setLastArgs: setLastArgs
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsMin);*/

export default GoodsMin;

/*ReactDOM.render(
  <GoodsMin />,
  document.getElementById('goods-min')
);

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
		this.getGoodsURL = this.getGoodsURL.bind(this);
	}

	componentDidMount() {
        if (window.location.href.match("search=true")) {
        	let params = new URLSearchParams(new URL(window.location.href).search);
			let query;
			let sort;
			for(let pair of params.entries()) {
			  if (pair[0] == 'query') {
			  	query = pair[1];
			  }
			  else if (pair[0] == 'sort') {
			  	sort = pair[1];
			  }
			}
        	document.getElementById("search").value = query;
			this.getGoodsURL(query, 0, sort);
		}
    }

	getGoodsURL(query, since, sort) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/

	/*getGoods(event) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value, since: 0 })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/

	/*getGoods(event) {
		const url = new URL(window.location);
		url.searchParams.set('search', 'true');
		url.searchParams.set('query', document.getElementById("search").value);
		window.history.pushState({}, '', url);
		window.location.reload();
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.getGoods} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}

ReactDOM.render(
  <Search />,
  document.getElementById('search-wrapper')
);

var links = [
  "Новые",
  "Подписки",
  "Популярные"
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    let params = new URLSearchParams(new URL(window.location.href).search);
	let sort;
	for(let pair of params.entries()) {
	  if (pair[0] == 'sort') {
	  	sort = pair[1];
	  }
	}
	if (!sort || sort == 'new') {
		var active = [true];
	    for (var i = 1; i < links.length; i++) {
	      active.push(false);
	    }
	}
	else if (sort == 'popular') {
		var active = [];
	    for (var i = 0; i < links.length; i++) {
	      active.push(false);
	    }
	    active[2] = true;
	}
	this.state = {isActive: active};
  }

  output = num => {
    var active = [];
    for (var i = 0; i < links.length; i++) {
      active.push(false);
    }
    active[num] = true;
    this.setState({ isActive : active});
  }

  render() {
    var rows = [];
    for (var i = 0; i < links.length; i++) {
      rows.push(<Nav isActive={this.state.isActive[i]} name={links[i]} func={this.output}/>);
    }
    return (
      <span>
        {rows}
        <LogReg/>
      </span>
    );
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var num;
    for (var i = 0; i < links.length; i++) {
      if (this.props.name == links[i]) {
        num = i;
      }
    }
    this.props.func(num);
    if (this.props.name == "Популярные") {
      const url = new URL(window.location);
	  url.searchParams.set('sort', 'popular');
	  window.history.pushState({}, '', url);
	  window.location.reload();
    }
    else if (this.props.name == "Новые") {
      const url = new URL(window.location);
	  url.searchParams.set('sort', 'new');
	  window.history.pushState({}, '', url);
	  window.location.reload();
    }
  }

  render() {
    var ariaCurrent = this.props.isActive ? "page" : null;
    var className = 'nav-link';
    if (this.props.isActive) {
      className += ' active';
    }
    return (
      <li className="nav-item d-block d-sm-block d-md-inline-block"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
    );
  }
}

class LogReg extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {logout: false, confirm: null, nick: null};
  }
  componentDidMount() {
  	fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'isLoggedIn' })
		}).then(response => {
			response.json().then(body => {
				this.setState({logout: body.logout, confirm: body.confirm, nick: body.nick});
			});
		});
  }
  render() {
  	console.log(this.state);
  	if (!this.state.logout) {
  	  return (
	    <li className="nav-item d-block d-sm-block d-md-inline-block px-3"><a href="/logreg" className="nav-link" id="logreg">Вход/Регистрация</a></li>
	  );
  	}
    else {
      return (
      	<div className="dropdown d-block d-sm-block d-md-inline-block px-3">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {this.state.nick} {this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
            {this.state.confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
            <li><a className="dropdown-item" href="#">Настройки</a></li>
            <li><a className="dropdown-item" href="/logout">Выйти</a></li>
          </ul>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav')
);*/