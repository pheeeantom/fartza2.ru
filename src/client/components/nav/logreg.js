import React, { useState } from "react";

function LogReg(props) {

    const [logout, setLogout] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [nick, setNick] = useState(null);

    //this.state = {logout: false, confirm: null, nick: null};

    //componentDidMount() {
        /*fetch('/api', {
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
          });*/
    //}
        //console.log(this.state);
    //if (!logout) {
      return (
        <>
          <br className="lg:hidden"/>
          <li className="inline-block align-middle mt-1 md:mt-3 lg:mt-0 py-1 px-2 lg:ml-20 w-auto bg-white hover:bg-neutral-200"><button className="text-black text-lg">Вход/Регистрация</button></li>
        </>
      );
    //}
    /*else {
      return (
        <div className="dropdown d-block d-sm-block d-md-inline-block px-3">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {nick} {confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
            {confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
            <li><a className="dropdown-item" href="#">Настройки</a></li>
            <li><a className="dropdown-item" href="/logout">Выйти</a></li>
          </ul>
        </div>
      );*
    }*/
  }

  export default LogReg;