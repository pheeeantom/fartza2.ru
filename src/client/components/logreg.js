import React from "react";

class FormBar extends React.Component {
	constructor(props) {
		super(props);
		const queryParams = new URLSearchParams(window.location.search);
		const num = queryParams.get("num");
        let active;
		if (num == 0 || num == undefined) {
	    	active = [true, false];
	    }
	    else if (num == 1) {
	    	active = [false, true];
	    }
		this.state = { isActive: active, /*error: null, isLoaded: false, image: null*/ };
		this.check = this.check.bind(this);
	}
	/*componentDidMount() {
		fetch("/getCaptcha")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						image: result.image
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}*/
	check = num => {
        let active;
	    if (num == 0) {
	    	active = [true, false];
	    }
	    else if (num == 1) {
	    	active = [false, true];
	    }
	    this.setState({ isActive : active});
	}
	render() {
		let classLink = "btn shadow-none";
		//const error = this.state.error;
		//const isLoaded = this.state.isLoaded;
		//const image = this.state.image;
		/*if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {*/
			return (
				<div>
                    <div className="ps-5 py-4 mb-5 text-light h4" style={{backgroundColor: 'rgb(63, 63, 70)'}}>FARTZA</div>
                    <div className="row">
                        <div class="col-sm-1 col-md-3 col-lg-4"></div>
                        <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4" id="logreg-form">
                            <div className="text-center">
                                <input type="checkbox" className="btn-check" id="btn-check-login" onClick={this.check.bind(this, 0)}/>
                                <label className={this.state.isActive[0] ? classLink + " checked" : classLink} htmlFor="btn-check-login">Войти</label>
                                <pre className="d-inline"> | </pre>
                                <input type="checkbox" className="btn-check" id="btn-check-registration" onClick={this.check.bind(this, 1)}/>
                                <label className={this.state.isActive[1] ? classLink + " checked" : classLink} htmlFor="btn-check-registration">Зарегистрироваться</label>
                            </div>
                            <Login isActive={this.state.isActive[0]}/* base64Captcha={image}*//>
                            <Registration isActive={this.state.isActive[1]}/* base64Captcha={image}*//>
                        </div>
                    </div>
        		</div>
			);
		//}
	}
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {first: true, disabled: true};
		this.showTips = this.showTips.bind(this);
		this.manipulteSubmit = this.manipulteSubmit.bind(this);
		this.email = React.createRef();
		this.password = React.createRef();
		//this.captcha = React.createRef();
	}
	showTips() {
		if (this.state.first) {
			this.setState({first: false});
			this.email.current.showTip();
			this.password.current.showTip();
			//this.captcha.current.showTip();
		}
	}
	manipulteSubmit() {
		if (this.email.current.state.isPassed && this.password.current.state.isPassed/* && this.captcha.current.state.isPassed*/) {
			this.setState({disabled: false});
		}
		else {
			this.setState({disabled: true});
		}
	}
	render() {
		let visible;
		if (!this.props.isActive) {
			visible = "d-none";
		}
		else {
			visible = null;
		}
		const queryParams = new URLSearchParams(window.location.search);
		const isInvalid = queryParams.get("invalid");
		//const isCaptchaInvalid = queryParams.get("captcha");
		let classSmall = "mes text-center pt-3 pb-3 mt-3 mb-4";
		if (!isInvalid) {
			classSmall += " d-none";
		}
		/*let classSmallCaptcha = "mes text-center pt-3 pb-3 mt-3 mb-4";
		if (!isCaptchaInvalid) {
			classSmallCaptcha += " d-none";
		}
        
        <div className={classSmallCaptcha}>
            <small className="form-text text-danger">Неверная капча</small>
        </div>
        
        <Captcha ref={this.captcha} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} base64Captcha={this.props.base64Captcha}/>*/
		return(
			<form className={visible + " log pb-4"} action="login" method="post" autoComplete="off">
				<div className={classSmall}>
					<small className="form-text text-danger">Неверное имя пользователя либо пароль</small>
				</div>
				<Email ref={this.email} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} emailId="email-log" />
				<Password ref={this.password} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} passId="pass-log" />
				<div className="text-center">
                	<button type="submit" className="btn" disabled={this.state.disabled}>Войти</button>
                </div>
			</form>
		);
	}
}

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {first: true, disabled: true};
		this.showTips = this.showTips.bind(this);
		this.manipulteSubmit = this.manipulteSubmit.bind(this);
		this.checkPassIdentity = this.checkPassIdentity.bind(this);
		this.nickname = React.createRef();
		this.email = React.createRef();
		this.password = React.createRef();
		this.password2 = React.createRef();
		//this.captcha = React.createRef();
	}
	showTips() {
		if (this.state.first) {
			this.setState({first: false});
			this.nickname.current.showTip();
			this.email.current.showTip();
			this.password.current.showTip();
			//this.password2.current.showTip();
			//this.captcha.current.showTip();
		}
	}
	manipulteSubmit() {
		if (this.nickname.current.state.isPassed && this.email.current.state.isPassed
			&& this.password.current.state.isPassed && this.password2.current.state.isPassed
			/*&& this.captcha.current.state.isPassed*/) {
			this.setState({disabled: false});
		}
		else {
			this.setState({disabled: true});
		}
	}
	checkPassIdentity() {
		this.password2.current.checkPassIdentity();
	}
	render() {
		let visible;
		if (!this.props.isActive) {
			visible = "d-none";
		}
		else {
			visible = null;
		}
		const queryParams = new URLSearchParams(window.location.search);
		const isNicknameBusy = queryParams.get("nicknameBusy");
		const isEmailBusy = queryParams.get("emailBusy");
		//const isCaptchaInvalid = queryParams.get("captcha");
		let classEmail = "form-text text-danger";
        let classNickname = "form-text text-danger";
		let classSmall = "mes text-center pt-3 pb-3 mt-3 mb-4";
		//let classSmallCaptcha = "mes text-center pt-3 pb-3 mt-3 mb-4";
		if (!isNicknameBusy) {
			classNickname += " d-none";
		}
		if (!isEmailBusy) {
			classEmail += " d-none";
		}
		if (!isNicknameBusy && !isEmailBusy) {
			classSmall += " d-none";
		}
		/*if (!isCaptchaInvalid) {
			classSmallCaptcha += " d-none";
		}
        
        <div className={classSmallCaptcha}>
            <small className="form-text text-danger">Неверная капча</small>
        </div>
        
        <Captcha ref={this.captcha} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} base64Captcha={this.props.base64Captcha}/>*/
		return(
			<form className={visible + " reg pb-4"} action="registrate" method="post">
				<div className={classSmall}>
					<small className={classNickname}>Ник {isNicknameBusy} - занят</small>
					<small className={classEmail}>Емейл {isEmailBusy} - занят</small>
				</div>
				<Nickname ref={this.nickname} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} />
				<Email ref={this.email} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} emailId="email-reg" />
				<Password ref={this.password} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} passId="pass-first" checkPassIdentity={this.checkPassIdentity} />
				<Password2 ref={this.password2} showTips={this.showTips} manipulteSubmit={this.manipulteSubmit} passId="pass-second" passIdBind="pass-first" />
				<div className="text-center">
                	<button type="submit" className="btn" disabled={this.state.disabled}>Зарегистрироваться</button>
                </div>
			</form>
		);
	}
}

class Email extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isPassed: true};
		this.handleInput = this.handleInput.bind(this);
		this.showTip = this.showTip.bind(this);
	}
	showTip() {
		this.setState({isPassed: false});
	}
	handleInput(event) {
		this.props.showTips();
		if (event.target.value.match(/^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/)) {
			this.setState({isPassed: true}, () => this.props.manipulteSubmit());
		}
		else {
			this.setState({isPassed: false}, () => this.props.manipulteSubmit());
		}
	}
	render() {
		let classLink = "form-text text-danger";
		return (
			<div className="form-group">
                <label htmlFor={this.props.emailId}>Email</label>
                <input onInput={this.handleInput} type="text" id={this.props.emailId} className="form-control" placeholder="Введите email" aria-describedby="emailError-log" name="email" />
                <small className={this.state.isPassed ? classLink + " d-none" : classLink}>Email должен быть в таком формате: ivanov@domain.domain</small>
            </div>
		);
	}
}

/*
this.handleFocus = this.handleFocus.bind(this);
handleFocus(event) {
	event.target.removeAttribute('readonly');
}
onFocus={this.handleFocus} readOnly autoComplete="off"
*/

class Nickname extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isPassed: true};
		this.handleInput = this.handleInput.bind(this);
		this.showTip = this.showTip.bind(this);
	}
	showTip() {
		this.setState({isPassed: false});
	}
	handleInput(event) {
		this.props.showTips();
		if (event.target.value.match(/^.{2,8}$/)) {
			//setState - асинхронная функция поэтому чтобы использовать результат ее выполнения нужно
			//запускать функцию после нее в аргументах
			this.setState({isPassed: true}, () => this.props.manipulteSubmit());
		}
		else {
			this.setState({isPassed: false}, () => this.props.manipulteSubmit());
		}
	}
	render() {
		let classLink = "form-text text-danger";
		return (
			<div className="form-group">
				<label htmlFor="nickname">Ник</label>
				<input onInput={this.handleInput} type="text" id="nickname" className="form-control" placeholder="Введите ник" aria-describedby="nicknameError-reg" name="nickname" />
				<small className={this.state.isPassed ? classLink + " d-none" : classLink}>Ник должен состоять минимум из двух символов</small>
			</div>
		);
	}
}

class Password extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isPassed: true, passVisible: false};
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.showTip = this.showTip.bind(this);
	}
	showTip() {
		this.setState({isPassed: false});
	}
	handleInput(event) {
		this.props.showTips();
		if (this.props.passId.includes("first"))
			this.props.checkPassIdentity();
		if (event.target.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/)) {
			this.setState({isPassed: true}, () => this.props.manipulteSubmit());
		}
		else {
			this.setState({isPassed: false}, () => this.props.manipulteSubmit());
		}
	}
	handleClick(event) {
		if (event.target.className.includes("open")) {
			this.setState({passVisible: false});
			event.target.parentNode.getElementsByClassName("password")[0].type = "password";
		}
		else {
			this.setState({passVisible: true});
			event.target.parentNode.getElementsByClassName("password")[0].type = "text";
		}
	}
	render() {
		let classLink = "form-text text-danger";
		let visible;
		if (this.state.passVisible) {
			visible = [null, "d-none"];
		}
		else {
			visible = ["d-none", null];
		}
		return (
			<div className={this.props.passId.includes("log") ? "form-group pb-4" : "form-group"}>
				<label htmlFor={this.props.passId}>Пароль</label>
				<div style={{display: "flex"}}>
				    <input id={this.props.passId} onInput={this.handleInput} type="password" className="form-control password" placeholder="Пароль" aria-describedby="passwordError-log" name="password" /><img onClick={this.handleClick} className={"open " + visible[0]} src="/service_photos/eye.svg"/><img onClick={this.handleClick} src="/service_photos/eye-close.svg" className={"close " + visible[1]}/>
				</div>
				<small className={this.state.isPassed ? classLink + " d-none" : classLink}>Пароль должен состоять из минимум 8 символов, должен содержать латинские большие и маленькие буквы, цифры и специальные символы: !, @, #, $, %, ^, &, *</small>
			</div>
		);
	}
}

class Password2 extends Password {
	constructor(props) {
		super(props);
		this.checkPassIdentity = this.checkPassIdentity.bind(this);
	}
	handleInput(event) {
		this.props.showTips();
		if (event.target.value === document.getElementById(this.props.passIdBind).value) {
			this.setState({isPassed: true}, () => this.props.manipulteSubmit());
		}
		else {
			this.setState({isPassed: false}, () => this.props.manipulteSubmit());
		}
	}
	checkPassIdentity() {
		if (document.getElementById(this.props.passId).value === document.getElementById(this.props.passIdBind).value) {
			this.setState({isPassed: true});
		}
		else {
			this.setState({isPassed: false});
		}
		//this.props.manipulteSubmit();
	}
	render() {
		let classLink = "form-text text-danger";
		let visible;
		if (this.state.passVisible) {
			visible = [null, "d-none"];
		}
		else {
			visible = ["d-none", null];
		}
		return (
			<div className="form-group pb-4">
				<label htmlFor={this.props.passId}>Подтвердить пароль</label>
				<div style={{display: "flex"}}>
				    <input id={this.props.passId} onInput={this.handleInput} type="password" className="form-control password" placeholder="Пароль" aria-describedby="passwordError-log" name="password" /><img onClick={this.handleClick} className={"open " + visible[0]} src="/service_photos/eye.svg"/><img onClick={this.handleClick} src="/service_photos/eye-close.svg" className={"close " + visible[1]}/>
				</div>
				<small className={this.state.isPassed ? classLink + " d-none" : classLink}>Пароли должны совпадать!</small>
			</div>
		);
	}
}

/*class Captcha extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isPassed: true};
		this.handleInput = this.handleInput.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.showTip = this.showTip.bind(this);
	}
	showTip() {
		this.setState({isPassed: false});
	}
	handleFocus(event) {
		event.target.removeAttribute('readonly');
	}
	handleInput(event) {
		this.props.showTips();
		if (event.target.value.match(/^[a-zA-Z0-9]{6}$/)) {
			this.setState({isPassed: true}, () => this.props.manipulteSubmit());
		}
		else {
			this.setState({isPassed: false}, () => this.props.manipulteSubmit());
		}
	}
	render() {
		let classLink = "form-text text-danger";
		return (
			<div>
        		<img id="captcha-img" src={this.props.base64Captcha}/>
        		<input onInput={this.handleInput} id="captcha" className="form-control" placeholder="Капча" name="captcha" onFocus={this.handleFocus}/>
				<small className={this.state.isPassed ? classLink + " d-none" : classLink}>Капча должна состоять из 6 букв и цифр</small>
			</div>
		);
	}
}*/

/*ReactDOM.render(
  <FormBar />,
  document.getElementById('root')
);*/

export default FormBar;