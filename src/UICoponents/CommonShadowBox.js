import React from 'react';
import './CommonShadowBox.scss';

export default function CommonShadowBox(props) {
    const ClassNameExtend = 'shadow-box ' + props.className;

    return (
        <>
            <div className={ClassNameExtend}> {props.children}</div>
        </>
    )
}
