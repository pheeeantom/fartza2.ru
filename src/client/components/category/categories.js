import React, { useEffect, useState } from "react";

import { useFetchAllCategoriesQuery } from "../../store/services/categories_service";

import Link from "./link";

import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCategoryName } from "../../store/reducers/categories_slice";
import { setLastArgs } from "../../store/reducers/goods_slice";

/*export const categories = {
	"Статьи": [
		"Новинки","Тренды","Коллаборации"
	],
	"Одежда": [
		"Б/У","Российское","ХендМейд","Обувь","Верх","Низ", "Головные уборы"
	]
};*/

function CategoriesBar(props) {

	//const [isActive, setIsActive] = useState(null);

	//ИМЯ РЕДЬЮСЕРА ЗАДАЕТСЯ В STORE.JS В CONFIGUREREDUCER А НЕ В САМОМ РЕДЬЮСЕРЕ В СТРОКЕ
	const isActive = useSelector((state) => state.categoriesReducer.activeCategory)
	const lastArgs = useSelector((state) => state.goodsReducer.lastArgs)
	console.log(isActive)
    const dispatch = useDispatch()

	const {data, error, isLoading} = useFetchAllCategoriesQuery();

	/*useEffect(() => {
		if (data) {
			let searchParams = new URLSearchParams(location.search);
			if (searchParams.get('category')) {
				dispatch(setCategory(Number.parseInt(searchParams.get('category'))));
				dispatch(setCategoryName(data.categories[0][0].find(cat => cat.id === Number.parseInt(searchParams.get('category'))).type));
			}
		}
	}, [data]);*/

	function clear() {
		dispatch(setCategory(null));
		dispatch(setCategoryName(null));
		dispatch(setLastArgs({...lastArgs, category: undefined}));
		/*let searchParams = new URLSearchParams(location.search);
		searchParams.delete('category');
		window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
	}

	function output(num) {
		dispatch(setCategory(num));
		dispatch(setCategoryName(data.categories[0][0].find(cat => cat.id === num).type));
		dispatch(setLastArgs({...lastArgs, category: num, since: 0}));
		/*let searchParams = new URLSearchParams(location.search);
		searchParams.set('category', num.toString());
		window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);*/
	}

	let rows = [];
	if (data)
		for (let i = 0; i < data.categories[0][0].length; i++) {
			rows.push(<Link id={data.categories[0][0][i].id} isActive={isActive === data.categories[0][0][i].id} name={data.categories[0][0][i].type} func={output}/>);
		}
	

	return (
		/*<div className="xs:w-full sm:w-full md:w-1/3 lg:w-1/4 mt-3">
			<div className="flex p-3 bg-light">
				<aside id="categories">
					<div className="dropdown">
						{rows}
					</div>
				</aside>
			</div>
		</div>*/
		<span className="text-lg">
			{rows}
			<div>-----</div>
			<button onClick={clear}>Очистить</button>
		</span>
	);
}

export default CategoriesBar;