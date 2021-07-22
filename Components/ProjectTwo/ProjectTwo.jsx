import React from 'react';
import { Earth } from '../../Assets/Svg';
import Image from 'next/image';
import Dove from '../../Assets/Images/DoveMock.png';

function ProjectTwo() {
	return (
		<div className='bg-green-700 flex flex-col justify-between w-100 h-screen p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>Project 2 - Video Library</div>
			<a
				href='https://sparrow-visuals.netlify.app'
				target='_blank'
				rel='noreferrer'
				className='text-center'
			>
				<Image width='480px' height='262px' src={Dove} alt='Mockup of Video Library' />
			</a>
			<div className='flex justify-between items-center font-karla font-light'>
				<a
					href='https://github.com/PrakharV10/sparrow-visuals/tree/Development'
					target='_blank'
					rel='noreferrer'
					className='text-sm lg:text-base cursor-pointer'
				>
					Source Code <br />
					Shots Visuals
				</a>
				<a
					href='https://sparrow-visuals.netlify.app'
					target='_blank'
					rel='noreferrer'
					className='opacity-75 cursor-pointer'
				>
					<Earth />
				</a>
			</div>
		</div>
	);
}

export default ProjectTwo;
