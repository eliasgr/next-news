import Head from 'next/head';
import { useRouter } from 'next/router';
import News from '../../components/News';
import Paginator from '../../components/Paginator';
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
			<Toolbar />
			<div className='flex flex-col h-fit  '>
				<div className='flex flex-col items-center '>
					{articles.map((article, index) => (
						<div
							key={index}
							className='md:w-1/2  rounded-md drop-shadow-md mb-4 p-6 border-solid border-b bg-blue-200 '
						>
							<News article={article} />
						</div>
					))}
				</div>
				<Paginator pageNumber={pageNumber} />
			</div>
		</>
	);
};

export const getServerSideProps = async (pageContext: any) => {
	const pageNumber = pageContext.query.id;
	const apiUrl = 'http://localhost:3000/data.json';
	//'https://newsapi.org/v2/top-headlines?country=us&apiKey=f457198180e54861baa60e0a511d0d19'; //(process.env.API_URL);
	console.log(apiUrl);

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
