
import React from 'react'

const DOMContainer = (props) => {
	
	const ClassNameExtend = 'container '+ props.className;

	return (
		<div className={ClassNameExtend}> {props.children}</div>
	)
}

export default DOMContainer;
