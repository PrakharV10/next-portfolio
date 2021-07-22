import Head from 'next/head';
import Image from 'next/image';
import About from '../Components/About/About';
import ProjectOne from '../Components/ProjectOne/ProjectOne';
import ProjectThree from '../Components/ProjectThree/ProjectThree';
import ProjectTwo from '../Components/ProjectTwo/ProjectTwo';
import Sidebar from '../Components/Sidebar/Sidebar';
import styles from '../styles/Home.module.css';

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
				</div>
			</main>
		</div>
	);
}
