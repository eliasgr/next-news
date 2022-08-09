export type Source = {
	id: string;
	name: string;
};
export type Article = {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};
export type ApiResponse = {
	status: string;
	totalResults: number;
	articles: Article[];
};
