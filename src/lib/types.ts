export type Heuristic = {
	name: string;
	slug: string;
	description: string;
	encountered: boolean;
};

export type Post = {
	title: string;
	slug: string;
	hook: string;
	body: string;
	image: string;
	encounteredAt: Date;
};

export type frontMatter = {
	title: string;
	date: string;
	[key: string]: unknown;
};
