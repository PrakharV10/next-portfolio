import React from 'react';
import { Earth } from '../../Assets/Svg';
import Image from 'next/image';
import Phoenix from '../../Assets/Images/PhoenixMock.png';

function ProjectThree() {
	return (
		<div className='bg-purple-700 flex flex-col justify-between w-100 h-screen p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>Project 3 - Ecommerce Store</div>
			<a
				href='https://sparrow-store.netlify.app/'
				target='_blank'
				rel='noreferrer'
				className='text-center'
			>
				<Image width='480px' height='262px' src={Phoenix} alt='Mockup of Ecommerce Store' />
			</a>
			<div className='flex justify-between items-center font-karla font-light'>
				<a
					href='https://github.com/PrakharV10/sparrow-store/tree/Development'
					target='_blank'
					rel='noreferrer'
					className='text-sm lg:text-base cursor-pointer'
				>
					Source Code <br />
					Sparrow Store
				</a>
				<a
					href='https://sparrow-store.netlify.app/'
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

export default ProjectThree;
