import { useRouter } from 'next/router';
import React from 'react';

type PageProps = {
	pageNumber: number;
};

const Paginator = ({ pageNumber }: PageProps) => {
	const router = useRouter();
	return (
		<>
			<div className='w-full flex justify-center'>
				<input
					type='button'
					value='Previous'
					disabled={pageNumber === 1}
					className='m-6  bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 py-2 rounded'
					onClick={() => {
						if (pageNumber > 1) {
							router.push(`/feed/${pageNumber - 1}`);
						}
					}}
				/>

				<div className='m-6'>#{pageNumber}</div>

				<input
					type='button'
					value='Next Page'
					disabled={pageNumber === 5}
					className='m-6  bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 py-2 rounded'
					onClick={() => {
						if (pageNumber < 5) {
							router.push(`/feed/${pageNumber + 1}`);
						}
					}}
				/>
			</div>
		</>
	);
};

export default Paginator;
