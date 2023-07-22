import React from "react";

function Link(props) {

	function handleClick() {
		props.func(props.id);
	}

    let classLink = "category-link";
    if (props.isActive) {
        classLink += " active";
    }
    return ( <div><span className={classLink} href="#" onClick={handleClick}>{props.name}</span></div> );
}

export default Link;