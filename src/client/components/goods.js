import React from "react";
import { connect } from "react-redux";
import { goodsAPI, useFetchGoodsByIdQuery } from "../store/services/goods_service";
import { Carousel, Card } from "flowbite-react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { useAddToFavoritesMutation, useRemoveFromFavoritesMutation, useIsFavoriteQuery } from "../store/services/users_service";
import { useFetchCommentsQuery } from "../store/services/comment_service";
import { comsNum } from "../../config";

function ProductWrapper(props) {
	/*constructor(props) {
		super(props);
		//this.state = { goods: 0 };
		this.getGoods = this.getGoods.bind(this);
	}

	componentDidMount() {
        console.log(1000);
        this.getGoods();
    }

	getGoods() {
		/*const data = new FormData();
		data.append('command', 'getGoods');
		data.append('since', 0);*/
		//let searchParams = new URLSearchParams(location.search);
		/*fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'getGoodsById', id: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop() })
		}).then(response => {
			response.json().then(body => {
				this.setState({ goods: body.goods[0] });
				//console.log(this.state.goods);
			});
		});*/
		//id: window.location.href.match("goods/(.+)#?")[1]
		//console.log(10);
		/*this.props.fetchGoodsById(window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop());
	}*/

	const [coords, setCoords] = useState();

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
		setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
	}

	const { data, isLoading, error } = useFetchGoodsByIdQuery({id: window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop(), args: coords});

	/*render() {
		const id = window.location.pathname.split('/').pop() || window.location.pathname.split('/').slice(0, -1).pop();
		let goods = this.props.fetchGoodsByIdState(id);
		let rows = null;
		//console.log(goods);
		if (!goods.isLoading &&
			!goods.isUninitialized) {
			if (!goods.isError) {
				goods = goods.data.goods[0][0];
				console.log(goods);
				//console.log(goods);
				rows = (<Product id={goods.id} name={goods.name} img={goods.photos} price={goods.price}
					createdAt={goods.created_at} desc={goods.description} views={goods.views} />);
			} else {
				rows = goods.error.data.error;
			}
		}
		else {
			rows = 'Подождите, идет загрузка...';
		}*/
		return (
			<div class="mb-3 mt-3">
				<main>
					{
						isLoading ? "Подождите, идет загрузка..." : error ? error.data.error : 
							<Product id={data.goods[0][0].id} name={data.goods[0][0].name} img={data.goods[0][0].photos} price={data.goods[0][0].price}
								createdAt={data.goods[0][0].created_at} desc={data.goods[0][0].description} views={data.goods[0][0].views}
								nickname={data.goods[0][0].user?.nickname} rating={data.goods[0][0].user?.rating} distance={data.goods[0][0].distance}
								lat={data.goods[0][0].latitude} lon={data.goods[0][0].longitude} login={data.login} pageSize={comsNum} />
					}
				</main>
			</div>
		);
	//}
}

function Product (props) {

	const [since, setSince] = useState(0)

	const { data: favs, isLoading: loadingFavs, error: errorFavs } = useIsFavoriteQuery(props.id)
	const { data: coms, isLoading: loadingComs, error: errorComs } = useFetchCommentsQuery({id: props.id, args: {since}})

    const [addToFavorites, result] = useAddToFavoritesMutation()
    const [removeFromFavorites, result2] = useRemoveFromFavoritesMutation()

	//console.log(this.props.id);
	let date = new Date(props.createdAt);
	let dateStr = date.toLocaleString('ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
		});
	/*let butImg = [];
	for (let i = 0; i < this.props.img.length; i++) {
		if (i == 0)
			butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + i}></button>);
		else
			butImg.push(<button type="button" data-bs-target={"#carouselGoodsIndicators" + this.props.id} data-bs-slide-to={i} aria-label={"Slide " + i}></button>);
	}
	let img = [];
	for (let i = 0; i < this.props.img.length; i++) {
		if (i == 0)
			img.push(<div className="carousel-item active"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
		else
			img.push(<div className="carousel-item"><img className="d-block w-100" src={"/goods_photos/" + this.props.img[i]} alt={"Slide " + i}/></div>);
	}*/

	function move(arg) {
		if (arg === "left") {
			setSince(since - 1);
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', (this.props.lastArgs.since - 1).toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		}
		else if (arg === "right") {
			setSince(since + 1);
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', (this.props.lastArgs.since + 1).toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		}
		else {
			setSince(arg - 1);
			/*let searchParams = new URLSearchParams(location.search);
			searchParams.set('since', arg.toString());
			window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
		
		}
	}

	return (
		<div>
			<div className="w-4/5 md:3/4 lg:w-1/3 mx-auto mt-10">
				<Card>
					<div className="h-72 w-1/2 mx-auto">
						<Carousel slide={false} leftControl={<></>} rightControl={<></>}>
							{props.img.map(img => <img src={"/goods_photos/" + img} alt="slide" />)}
						</Carousel>
					</div>
					<div className="card-one-goods pt-5">
						<div className="flex items-start">
							<h5 className="text-3xl w-4/5 inline-block mr-3 break-words">{props.name}</h5>
							{props.login ? loadingFavs ?
								'Подождите, идет загрузка...' :
							errorFavs ?
								errorFavs.data.error : favs.isFavorite && !errorFavs ? <button onClick={() => removeFromFavorites(props.id)}
									className="mt-8">
										<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
											<path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"></path>
										</svg>
									</button>
								: <button onClick={() => addToFavorites(props.id)}
									className="mt-8">
										<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"></path>
										</svg>
									</button>
								: null}
						</div>
						<p className="break-words">{props.desc}</p>
						{props.price ? <p>{props.price + "₽"}</p> : null}
						<p>
							<a href={props.nickname ? "/user/" + props.nickname : undefined}>{props.nickname ?? "аноним"}</a>
							{/* <span className='inline-block px-5 float-right text-lg'>{props.rating ?? "-"}<img alt="star" src="/service_photos/star.png" width="20" className='inline'/></span> */}
						</p>
						{props.distance && <p><small className="text-muted">{"Расстояние: " + (props.distance / 1000).toFixed(1) + "км"}</small></p>}
						<p><small className="text-muted">{dateStr}</small></p>
						<p><small className="text-muted">Просмотры: {props.views}</small></p>
						{
							props.lat && props.lon ?
								<YMaps>
									<Map width="100%" defaultState={{ center: [props.lat, props.lon], zoom: 9}}>
										<Placemark geometry={[props.lat, props.lon]} />
									</Map>
								</YMaps>
							: null
						}
						<p className="text-2xl">Комментарии:</p>
						{props.login ?
							<form action={"/api/comments/" + props.id} method="post" enctype="multipart/form-data">
								<textarea name="text" className="border border-neutral-400"/>
								<br/>
								<button type="submit" className="btn">Отправить</button> 
							</form> : null}
						{loadingComs ?
								'Подождите, идет загрузка...' :
							errorComs ?
								<small className="text-muted">{errorComs.data.error}</small> : 
								coms.comments[0].rows.map(com => <Comment key={`Comment-${com.id}`} text={com.text} createdAt={com.created_at}
									nick={com.user.nickname} avatar={com.user.avatar}/>)}
						{errorComs ? null : (
							<div>
								{coms && coms.comments[0].count > 0 ? <button onClick={() => since > 0 && move("left")}>&#60;</button> : null}
								{coms && coms.comments[0].count > 0 && since > 1 ? "..." : null}
								{coms && coms.comments[0].count > 0 && since > 0	? <button onClick={() => move(since)}>{since}</button> : null}
								{coms && coms.comments[0].count > 0 ? <button className="underline" onClick={() => move(since + 1)}>{since + 1}</button> : null}
								{coms && coms.comments[0].count > (since + 1) * props.pageSize ? <button onClick={() => move(since + 2)}>{since + 2}</button> : null}
								{coms && coms.comments[0].count > (since + 2) * props.pageSize ? "..." : null}
								{coms && coms.comments[0].count > 0 ? <button onClick={() => (since + 1) * props.pageSize < coms.comments[0].count && move("right")}>&#62;</button> : null}	
						</div>
						)}
					</div>
				</Card>
			</div>
		</div>
	);

	/*<div id={"carouselGoodsIndicators" + this.props.id} data-bs-interval="false" className="carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6" data-bs-ride="carousel" style={{float: 'left'}}>
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
	</div>*/
}

function Comment(props) {
	let date = new Date(props.createdAt);
	let dateStr = date.toLocaleString('ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	});

	return (
		<div className="my-5">
			<a href={"/user/" + props.nick}>
				<h3 style={{height: '35px'}} className="align-middle inline-block">{props.nick}</h3>
				<img src={props.avatar ? "/avatars/" + props.avatar : "/service_photos/default_avatar.jpg"} alt="avatar" width="35" height="35" className="inline-block"/>
			</a>
			<p className="text-xl border-y border-neutral-400 break-words">{props.text}</p>
			<p><small className="text-muted">{dateStr}</small></p>
		</div>
	)
}

/*const mapStateToProps = (state) => {
    return {
		fetchGoodsByIdState: (id) => goodsAPI.endpoints.fetchGoodsById.select(id)(state)
    };
}

const mapDispatchToProps = {
    fetchGoodsById: goodsAPI.endpoints.fetchGoodsById.initiate//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);*/

export default ProductWrapper;

/*class SearchGoods extends React.Component {
	constructor(props) {
		super(props);
	}

	goToIndex(event) {
		window.open('/?search=true&query=' + document.getElementById("search").value);
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.goToIndex} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}*/

/*ReactDOM.render(
  <ProductWrapper />,
  document.getElementById('goods-min')
);

ReactDOM.render(
  <SearchGoods />,
  document.getElementById('search-wrapper')
);*/