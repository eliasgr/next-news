const News = ({ article }: any) => {
	return (
		<>
			<h1
				className='text-blue-600 hover:text-blue-800 font-semibold text-lg cursor-pointer '
				onClick={() => (window.location.href = article.url)}
			>
				{article.title}
			</h1>
			<h1>{article.source.name}</h1>
			<p className='text-sm text-gray-600 mt-2'>{article.description}</p>
			{!!article.urlToImage && (
				<img className='w-full' src={article.urlToImage} />
			)}
		</>
	);
};
export default News;
