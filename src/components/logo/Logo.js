import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.png'

const Logo = () => {
	return (
		<div className="pl4">
			<Tilt className="Tilt shadow-3 pa4" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner pa2"> 
 				 <img src={Brain} alt="Logo" />
 			</div>
			</Tilt>
		</div>
		);
}

export default Logo;