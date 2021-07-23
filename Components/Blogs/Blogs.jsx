import React from 'react';
import blogs from '../../Data/blogs';

function Blogs() {
	return (
		<div className='bg-purple-100 flex flex-col justify-between w-100 min-h-screen h-content p-7 lg:p-11'>
			<div className='font-satisfy mb-6'>Blogs</div>

			<div>
				{blogs.map((blog, index) => {
					return (
						<div key={index} className='mb-8'>
							<div className='uppercase font-karla text-xs font-bold opacity-70'>
								{blog.date}
							</div>
							<div className='font-poppins text-xl'>{blog.topic}</div>
							<div className='font-karla mt-2 font-regular opacity-95 leading-5'>
								{blog.desc}
							</div>
							<a
								className='font-karla mt-1 font-bold text-red-600 cursor-pointer'
								href={blog.link}
								target='_blank'
								rel='noreferrer'
							>
								Read the full article
							</a>
						</div>
					);
				})}
			</div>

			<a
				className='text-blue-600 flex justify-end font-bold'
				href='https://prakharvarshney.hashnode.dev/'
				target='_blank'
				rel='noreferrer'
			>
				See More
			</a>
		</div>
	);
}

export default Blogs;
