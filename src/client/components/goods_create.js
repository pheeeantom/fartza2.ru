import CurrencyInput from 'react-currency-input-field';
import React from 'react';
import { categoriesAPI } from '../store/services/categories_service';
import { connect } from 'react-redux';
import SelectSearch from 'react-select-search';

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
];

class GoodsCreateForm extends React.Component {
	constructor(props) {
		super(props);
		this.updateImageDisplay = this.updateImageDisplay.bind(this);
		this.validFileType = this.validFileType.bind(this);
		this.validFileSize = this.validFileSize.bind(this);
		this.returnFileSize = this.returnFileSize.bind(this);
		this.load = this.load.bind(this);
		this.inputName = this.inputName.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.showPosition = this.showPosition.bind(this);
		this.state = {first: true, errorName: false, errorImages: true}
	}
	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition);
		} else { 
			alert("Разрешите геолокацию чтобы видеть ближайшие товары...");
		}
	}	
	showPosition(position) {
		document.getElementById("latitude").value = position.coords.latitude;
		document.getElementById("longitude").value = position.coords.longitude;
	}
	componentDidMount() {
		this.getLocation();
		this.props.fetchAllCategories();
	}
	validFileSize(file) {
		console.log(file);
		if(file.size <= 1024 * 1024) {
			return true;
		}

	  	return false;
	}
	validFileType(file) {
		for(var i = 0; i < fileTypes.length; i++) {
		  if(file.type === fileTypes[i]) {
			return true;
		  }
		}
  
		return false;
	  }
	returnFileSize(number) {
	  if(number < 1024) {
	    return number + 'bytes';
	  } else if(number > 1024 && number < 1048576) {
	    return (number/1024).toFixed(1) + 'KB';
	  } else if(number > 1048576) {
	    return (number/1048576).toFixed(1) + 'MB';
	  }
	}
	load(img) {
		//console.log(img);
		img.nextSibling.textContent += ', ширина и высота: ' + img.width + 'x' + img.height;
	}
	updateImageDisplay(event) {
		console.log("upd");

		var input = document.querySelector('#images');
		var preview = document.querySelector('.preview');

		while(preview.firstChild) {
		    preview.removeChild(preview.firstChild);
		}

		var curFiles = input.files;
		if(curFiles.length === 0) {
			var para = document.createElement('p');
			para.textContent = '';
			preview.appendChild(para);
			console.log(0);
			this.setState({errorImages: true});
		} else if (curFiles.length > 3) {
			input.value = '';
			var para = document.createElement('small');
			para.classList.add("form-text");
			para.classList.add("text-danger");
			para.textContent = 'Слишком много файлов!';
			preview.appendChild(para);
			console.log(1);
			this.setState({errorImages: true});
		} else {
			var list = document.createElement('ol');
			preview.appendChild(list);
			var para = [null, null, null];
			var image = [null, null, null];
			var listItem = [null, null, null];
			console.log(2);
			let err = false;
			for(var i = 0; i < curFiles.length; i++) {
				listItem[i] = document.createElement('li');
				para[i] = document.createElement('p');
				para[i].style.display = 'inline-block';
				para[i].style.width = "80%";
				console.log(curFiles[i]);
				console.log(!this.validFileType(curFiles[i]));
				if (!this.validFileType(curFiles[i])) {
					para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Неверный формат файла, выберите файлы заново';
					listItem[i].appendChild(para[i]);
					console.log("hey");
					err = true;
				} else if (!this.validFileSize(curFiles[i])) {
					para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Фай слишком большой, выберите файлы заново';
					listItem[i].appendChild(para[i]);
					console.log("hey");
					err = true;
				} else {
					//console.log(curFiles[i]);
					image[i] = document.createElement('img');
					image[i].style.display = 'inline-block';
					image[i].style.width = "20%";
					image[i].src = window.URL.createObjectURL(curFiles[i]);

					listItem[i].appendChild(image[i]);
					para[i].textContent = 'Имя файла: ' + curFiles[i].name + ', размер файла: ' + this.returnFileSize(curFiles[i].size);
					image[i].onload = (event) => this.load(event.target);
					listItem[i].appendChild(para[i]);
				}

				list.appendChild(listItem[i]);
			}
			if (err) { input.value = ''; this.setState({errorImages: true}); } else { this.setState({errorImages: false}); }
		}
	}
	inputName(event) {
		if (event.target.value.length > 127 || event.target.value.length < 3) {
			this.setState({errorName: true});
		}
		else {
			this.setState({errorName: false});
		}
		this.setState({first: false});
	}
	render() {
		console.log(this.props.fetchAllCategoriesState().data);
		let className = "form-text text-danger";
		if (!this.state.errorName) {
			className += " d-none";
		}
		return (
			<div>
				<div className="col-md-3 col-lg-4" style={{float: 'left'}}>&nbsp;</div>
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{float: 'left'}}>
					<h2 style={{textAlign: 'center'}}>Создать товар</h2>
					<form action="/api/goods/create" method="post" autoComplete="off" enctype="multipart/form-data">
						<div className="mb-3">
						  <label for="name" className="form-label">Название</label>
						  <textarea className="form-control" id="name" name="name" rows="2" onInput={this.inputName}></textarea>
						  <small className={className}>Слишком короткое или слишком длинное название!</small>
						</div>
						<div className="mb-3">
						  <label for="description" className="form-label">Более подробное описание</label>
						  <textarea className="form-control" id="description" rows="3" name="description"></textarea>
						</div>
						<div className="mb-3">
						  <label for="images" className="form-label">Загрузить изображения...</label>
						  <input title="" className="form-control" type="file" id="images" name="images" onChange={this.updateImageDisplay} accept=".jpg, .jpeg, .png" multiple/>
						</div>
						<div className="preview">
							<p></p>
						</div>
						<div className="mb-3">
						  <label for="price" class="form-label">Цена в рублях</label>
						  <CurrencyInput
						    id="price"
						    name="price"
						    decimalsLimit={2}
						  />
						</div>
						<div className="mb-3">
							<label for="cat" className="form-label">Категория</label>
							<select name="cat" id="cat" className="form-control">
								{this.props.fetchAllCategoriesState().data?.categories[0][0].map(cat => <option value={cat.id}>{cat.type}</option>)}
							</select>
						</div>
						<input type="hidden" id="latitude" name="latitude"/>
						<input type="hidden" id="longitude" name="longitude"/>
						<div>
							<button type="submit" className="btn" disabled={this.state.errorImages || this.state.first || this.state.errorName}>Отправить</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

/*const mapDispatchToProps =  (dispatch) => {
  return {
    getGoodsAll: (word, since, sort) => dispatch(getGoodsFromAPI(word, since, sort))
  }
}*/

const mapStateToProps = (state) => {
    return {
		fetchAllCategoriesState: () => categoriesAPI.endpoints.fetchAllCategories.select()(state),
    };
}

const mapDispatchToProps = {
    fetchAllCategories: categoriesAPI.endpoints.fetchAllCategories.initiate,//(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsCreateForm);

/*ReactDOM.render(
  <GoodsCreateForm />,
  document.getElementById('goods-create')
);
onValueChange={(value, name) => console.log(value, name)}
placeholder="Цена товара..."
defaultValue={1000}
<SelectSearch options={this.props.fetchAllCategoriesState().data?.categories[0][0].map(cat => {return {name: cat.type
	, value: cat.id}})} search={true}
	filterOptions={[(options, query) => {
		// Do no filtering, just return all options
		//return options.find(option => option.name.includes(filter));
		//console.log(query)
		return options.filter(option => option.name.toLowerCase().includes(query.toLowerCase()));
	}]} name={"cat"}/>*/