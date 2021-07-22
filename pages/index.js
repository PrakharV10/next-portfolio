import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { About, Blogs, Footer, ProjectOne, ProjectThree, ProjectTwo, Sidebar } from '../Components';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Prakhar Varshney</title>
				<meta name='description' content='Get to know about me!' />
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
