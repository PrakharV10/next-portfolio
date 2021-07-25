import Head from 'next/head';
import { About, Blogs, Footer, ProjectOne, ProjectThree, ProjectTwo, Sidebar } from '../Components';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Prakhar Varshney</title>
				<meta
					name='description'
					content='A Web Developer passionate about publishing new and useful products, enhancing the internet experience for the users.'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content='Prakhar Varshney' />
				<meta
					property='og:description'
					content='A Web Developer passionate about publishing new and useful products, enhancing the internet experience for the users.'
				/>
				<meta property='og:url' content='https://prakharvarshney.tech/' />
				<meta property='og:type' content='website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-screen h-screen md:flex'>
				<Sidebar />
				<div className='flex-1 max-h-screen md:overflow-scroll'>
					<About />
					<ProjectOne />
					<ProjectTwo />
					<ProjectThree />
					<Blogs />
					<Footer />
				</div>
			</main>
		</div>
	);
}
