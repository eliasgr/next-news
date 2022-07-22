import { useRouter } from 'next/router';
import React from 'react';

const Toolbar = () => {
	const router = useRouter();

	return (
		<div className='flex items-center justify-center w-full h-16 mb-8  text-blue-500 font-bold'>
			<div
				className='m-[25px] cursor-pointer hover:text-blue-700'
				onClick={() => router.push('/')}
			>
				Home
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-blue-700'
				onClick={() => router.push('/feed/1')}
			>
				Feed
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-blue-700'
				onClick={() => router.push('/eom')}
			>
				EOM
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-blue-700'
				onClick={() => (window.location.href = 'https://github.com/eliasgr')}
			>
				Github
			</div>
		</div>
	);
};

export default Toolbar;
