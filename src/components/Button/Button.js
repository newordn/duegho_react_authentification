import React from 'react';
import './Button.css';

const Button = ({ content, length, onClick}) => (
	<button className={`btn ${length}`} onClick={onClick}>
		{content}
	</button>
);

export default Button;