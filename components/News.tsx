/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../utils/types';

const News = (article: Article) => {
	return (
		<>
			<Link href={article.url}>
				<a>
					<h1
						className=' text-blue-600 hover:text-blue-800 font-bold text-xl cursor-pointer p-2 '
						onClick={() => (window.location.href = article.url)}
					>
						{article.title}
					</h1>
					<h1>{article.source.name}</h1>
					<p className='text-sm text-gray-600 mt-2'>{article.description}</p>
					{!!article.urlToImage && (
						<img
							alt={article.title}
							className='w-full'
							src={article.urlToImage}
						/>
					)}
				</a>
			</Link>
		</>
	);
};
export default News;
