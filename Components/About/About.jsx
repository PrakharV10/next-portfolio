import React from 'react';
import Image from 'next/image';
import Logo from '../../Assets/Images/PVLogo.jpeg';

function About() {
	return (
		<div className='bg-gray-700 flex flex-col justify-between h-screen w-100 p-7 lg:p-11 text-white'>
			<div className='font-satisfy'>About - My Journey</div>
			<div className='w-40 h-40 m-auto mt-4 rounded-full bg-gray-600 lg:w-60 lg:h-60 overflow-hidden'>
				<Image src={Logo} alt='My Brand Logo' />
			</div>
			<div className='font-karla mt-6 lg:mt-12 lg:text-lg font-light'>
				I started my web development journey in November, 2020. Since then I have learnt new
				technologies and acquired Skills like{' '}
				<span className='font-medium'>
					Javascript, ReactJS, MongoDB, Express, Node, GraphQL, Hasura, PostgreSQL,
					NextJS, Typescript and Jest.
				</span>
				<br />
				<br />I learnt web development at <span className='font-medium'>Neog Camp</span>, A
				Cohort Based Course run by Tanay Pratap, where I was assigned the role of{' '}
				<span className='font-medium'>Teacher’s Assisstant</span>. My role was to lead a
				team of 19 people, where I organized meetings, had discussion, solved doubts and
				took part in peer reviews as a team activity.
				<br /> <br />I love to create new website designs on Figma, keeping in mind the{' '}
				<span className='font-medium'>UI and UX Guidelines</span>.
				<br />
				<br />I believe in showing a proof of my work, rather than listing my skills on a
				shiny piece of paper. Some of my works are shown below.
			</div>
		</div>
	);
}

export default About;
