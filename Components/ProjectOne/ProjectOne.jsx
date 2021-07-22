import React from 'react';
import { Earth } from '../../Assets/Svg';
import Image from 'next/image';
import Shots from '../../Assets/Images/ShotMock.png';

function ProjectOne() {
	return (
		<div className='bg-blue-700 flex flex-col justify-between w-100 h-screen max-h-full p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>Project 1 - Social Media Application</div>
			<a
				href='https://sparrow-shots.netlify.app'
				target='_blank'
				rel='noreferrer'
				className='text-center'
			>
				<Image width='480px' height='262px' src={Shots} alt='Mockup of Social Media' />
			</a>
			<div className='flex justify-between items-center font-karla font-light'>
				<a
					href='https://github.com/PrakharV10/sparrow-shots/tree/dev'
					target='_blank'
					rel='noreferrer'
					className='text-sm lg:text-base cursor-pointer'
				>
					Source Code <br />
					Shots Sparrow
				</a>
				<a
					href='https://sparrow-shots.netlify.app'
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

export default ProjectOne;
