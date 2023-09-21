import React, { useEffect, useState } from "react";

import Nav from './nav';
import LogReg from "./logreg";
import { links } from "./links";

//import '../../styles/output.css';

function NavBar(props){
  /*constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    let active = [true];
    for (let i = 1; i < links.length; i++) {
      active.push(false);
    }
    this.state = {isActive: active};
  }*/

  const [isActive, setIsActive] = useState([true].concat(Array(links.length - 1).fill(false)))

  /*componentDidMount() {
    const searchParams = new URLSearchParams(location.search);
    let sort = searchParams.get('sort');
    if (sort == 'popular') {
        let active = [];
        for (let i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        this.setState({isActive: active});
    }
  }*/

  /*useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let sort = searchParams.get('sort');
    if (sort == 'popular') {
        let active = [];
        for (let i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        setIsActive(active);
    }
  }, [])*/

  function output(num) {
    let active = [];
    for (let i = 0; i < links.length; i++) {
      active.push(false);
    }
    active[num] = true;
    setIsActive(active);
  }
    
  let rows = [];
  for (let i = 0; i < links.length; i++) {
    rows.push(<Nav isActive={isActive[i]} name={links[i]} func={output} updateGoods={props.updateGoods} getGoodsFromAPI={props.getGoodsFromAPI} />);
  }
  let tiles;
  if (!props.disableTiles) {
    tiles = (<div className="block md:flex-1">
              <nav className="h-full">
                <ul className="text-center lg:text-right">
  
                  <span>
                    {!props.without && rows}
                    <LogReg/>
                  </span>
  
                </ul>
              </nav>
            </div>);
  }
  return (
    <header className="md:flex sticky px-12 py-6 bg-zinc-700 w-full md:relative">
      <a href="/" className="block pb-2 md:pb-0 md:flex-none no-underline text-center md:text-left md:absolute md:top-1/3">
        <span className="text-2xl text-white font-sans">FARTZA</span>
      </a>
  
      {tiles}
    </header>
  );
}

export default NavBar;