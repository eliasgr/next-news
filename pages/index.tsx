import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Toolbar from '../components/Toolbar';

const Home: NextPage = () => {
	return (
		<div className='flex h-screen flex-col'>
			<div className='flex flex-1  flex-col items-center'>
				<h1 className='mt-10 text-[32px] text-gray-700 font-bold '>
					Next.js News App
				</h1>
				<h3 className='text-lg'>
					Your one stop shop for the latest news articles
				</h3>
			</div>
		</div>
	);
};

export default Home;
