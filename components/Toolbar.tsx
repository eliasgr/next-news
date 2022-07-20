import { useRouter } from 'next/router';
import React from 'react';

const Toolbar = () => {
	const router = useRouter();

	return (
		<div className='flex justify-center w-full h-12 m-6'>
			<div
				className='m-[25px] cursor-pointer hover:text-gray-400'
				onClick={() => router.push('/')}
			>
				Home
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-gray-400'
				onClick={() => router.push('/feed')}
			>
				Feed
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-gray-400'
				onClick={() => router.push('/eom')}
			>
				EOM
			</div>
			<div
				className='m-[25px] cursor-pointer hover:text-gray-400'
				onClick={() => (window.location.href = 'https://github.com/eliasgr')}
			>
				Github
			</div>
		</div>
	);
};

export default Toolbar;
