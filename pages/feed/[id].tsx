import Head from 'next/head';
import { useRouter } from 'next/router';
import Toolbar from '../../components/Toolbar';
type Source = {
	id: string;
	name: string;
};
type Article = {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};
type ApiResponse = {
	status: string;
	totalResults: number;
	articles: Article[];
};

type PageProps = {
	articles: Article[];
	pageNumber: number;
};

export const Feed = ({ articles, pageNumber }: PageProps) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta property='og:image' content={articles[0]?.urlToImage} />
				<meta property='og:description' content={articles[0]?.description} />
				<meta
					property='og:title'
					content={articles[0]?.title + ' and more!'}
				></meta>
			</Head>
			<div className='flex flex-col h-screen'>
				<Toolbar />
				<div className='flex flex-col items-center mt-12'>
					{articles.map((article, index) => (
						<div
							key={index}
							className='w-[500px] mb-6 pb-6 border-solid border-gray-700 border-b '
						>
							<h1
								className='text-blue-600 hover:text-blue-800 font-semibold text-lg cursor-pointer '
								onClick={() => (window.location.href = article.url)}
							>
								{article.title}
							</h1>
							<h1>{article.source.name}</h1>
							<p className='text-sm text-gray-600 mt-2'>
								{article.description}
							</p>
							{!!article.urlToImage && (
								<img className='w-full' src={article.urlToImage} />
							)}
						</div>
					))}
				</div>
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
			</div>
		</>
	);
};

export const getServerSideProps = async (pageContext: any) => {
	const pageNumber = pageContext.query.id;
	const apiUrl = 'http://localhost:3000/data.json'; //`${process.env.API_URL}${pageNumber}`;

	const apiResponse: ApiResponse = await fetch(apiUrl).then((res) =>
		res.json()
	);
	const { articles } = apiResponse;
	return {
		props: {
			articles: articles,
			pageNumber: Number.parseInt(pageNumber),
		},
	};
};

export default Feed;
