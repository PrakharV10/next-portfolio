import React from 'react';
import { BlogSite, Github, Linkedin, Twitter } from '../../Assets/Svg';

function Sidebar() {
	return (
		<div className='bg-gray-900 flex-none h-screen w-screen p-7 flex flex-col justify-between md:w-2/5 lg:p-11 text-white'>
			<div className='font-satisfy'>Prakhar</div>
			<div className='lg:w-11/12'>
				<div className='font-kanit text-3xl lg:text-4xl'>Hello, I’m Prakhar Varshney</div>
				<div className='font-poppins mt-5 font-light lg:text-lg '>
					A Web Developer passionate about publishing new and useful products, enhancing
					the internet experience for the users.
				</div>
				<button className='px-5 py-3 mt-5 font-poppins text-sm rounded-sm bg-blue-600'>
					Contact Me
				</button>
			</div>
			<div className='font-satisfy'>
				Social Handles :
				<div className='flex justify-between w-36 cursor-pointer mt-2'>
					<Twitter />
					<Github />
					<Linkedin />
					<BlogSite />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
