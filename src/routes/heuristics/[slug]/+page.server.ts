import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';

const posts = import.meta.glob('/src/lib/posts/*.md', { as: 'raw' });

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const filePath = `/src/lib/posts/${slug}.md`;

	if (!posts[filePath]) {
		throw error(404, 'Post not found');
	}

	try {
		const rawContent = await posts[filePath]();
		const { data: metadata, content } = matter(rawContent);
		const htmlContent = marked(content);

		return {
			metadata,
			htmlContent
		};
	} catch (err) {
		console.error(err);
		throw error(500, `Failed to load post: ${err}`);
	}
};
