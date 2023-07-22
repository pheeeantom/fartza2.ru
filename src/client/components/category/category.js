const { useEffect } = require("react");
//import { categories } from "./categories";
import Link from "./link";
import React, { useState } from "react";

function Category(props) {

    const [isActive, setIsActive] = useState(null);
	
    useEffect(() => {
        let active = [];
	    for (let i = 0; i < categories[props.name].length; i++) {
	      active.push(false);
	    }
	    setIsActive(active);
    }, []);

	function getNum() {
	    for (let i = 0; i < Object.keys(categories).length; i++) {
	      if (props.name == Object.keys(categories)[i]) {
	        return i;
	      }
	    }
	}

	function handleClick() {
	    let num = getNum();
	    props.func(num);
  	}

  	function output(num) {
	    let active = [];
	    for (let i = 0; i < categories[props.name].length; i++) {
	      active.push(false);
	    }
	    active[num] = true;
	    setIsActive(active);
	}

    let display = 'none';
    if (props.isActive) {
        display = 'block';
    }
    let rows = [];
    for (let i = 0; i < props.links.length; i++) {
        isActive && rows.push(<Link isActive={isActive[i]} name={props.links[i]} num={i} func={output}/>);
    }
    return (
        <div>
            <button onClick={handleClick} className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={props.isActive}>
                {props.name}
            </button>
            <div style={{display: display}} className="px-2">
                {rows}
            </div>
        </div>
    );
}

export default Category;