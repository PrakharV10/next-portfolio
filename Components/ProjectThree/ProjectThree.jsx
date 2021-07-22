import React from 'react';
import { Earth } from '../../Assets/Svg';

function ProjectThree() {
	return (
		<div className='bg-purple-700 flex flex-col justify-between w-100 h-screen p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>Project 3 - Ecommerce Store</div>
			<div className=''></div>
			<div className='flex justify-between items-center font-karla font-light'>
				<span className='text-sm lg:text-base cursor-pointer'>
					Source Code <br />
					Sparrow Store
				</span>
				<span className='opacity-75 cursor-pointer'>
					<Earth />
				</span>
			</div>
		</div>
	);
}

export default ProjectThree;
