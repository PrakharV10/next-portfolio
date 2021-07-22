import React from 'react';
import { Earth } from '../../Assets/Svg';

function ProjectTwo() {
	return (
		<div className='bg-green-700 flex flex-col justify-between w-100 h-screen p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>Project 2 - Video Library</div>
			<div className=''></div>
			<div className='flex justify-between items-center font-karla font-light'>
				<span className='text-sm lg:text-base cursor-pointer'>
					Source Code <br />
					Shots Visuals
				</span>
				<span className='opacity-75 cursor-pointer'>
					<Earth />
				</span>
			</div>
		</div>
	);
}

export default ProjectTwo;
