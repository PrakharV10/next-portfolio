import React from 'react';
import { BlogSite, Github, Linkedin, Twitter } from '../../Assets/Svg';

function Sidebar() {
	return (
		<div className='bg-gray-900 flex-none h-screen w-screen p-7 flex flex-col justify-between md:w-2/5 lg:p-11 text-white'>
			<div className='font-satisfy'>Prakhar</div>
			<div className='lg:w-11/12'>
				<div className='font-kanit text-3xl lg:text-4xl'>Hello, I’m Prakhar Varshney</div>
				<div className='font-poppins mt-5 mb-6 font-light lg:text-lg '>
					A Web Developer passionate about publishing new and useful products, enhancing
					the internet experience for the users.
				</div>
				<a
					href='mailto:prakhar.10.varshney@gmail.com'
					className='px-5 py-3 font-poppins text-sm rounded-sm bg-blue-600'
				>
					Contact Me
				</a>
			</div>
			<div className='font-satisfy'>
				Social Handles :
				<div className='flex justify-between w-36 mt-2'>
					<a href='https://twitter.com/Prakhar10V' target='_blank' rel='noreferrer'>
						<Twitter />
					</a>
					<a href='https://github.com/PrakharV10' target='_blank' rel='noreferrer'>
						<Github />
					</a>
					<a
						href='https://www.linkedin.com/in/prakhar-varshney-6b3a92181/'
						target='_blank'
						rel='noreferrer'
					>
						<Linkedin />
					</a>
					<a
						href='https://prakharvarshney.hashnode.dev/'
						target='_blank'
						rel='noreferrer'
					>
						<BlogSite />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
