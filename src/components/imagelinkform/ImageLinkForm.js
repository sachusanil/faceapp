import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div>
			<h2> Enter Image URL to detect face </h2>
			<div className= 'form center shadow-3 pa4 flex items-center'> 
				<input  type='text' className='w-75 pa3 mr2'/>
				<button className='f6 link ph3 pv2  dib white bg-black w-25 pa3 mr2'> Detect </button>
			</div>	
		</div>
		);
}

export default ImageLinkForm;