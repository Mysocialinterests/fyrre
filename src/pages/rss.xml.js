import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { getSiteDescription, getSiteTitle } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: getSiteTitle('fr'),
		description: getSiteDescription('fr'),
		site: context.site,
		items: posts.map((post) => {
			const [lang, ...slugParts] = post.id.split('/');
			return {
				...post.data,
				link: `/${lang}/blog/${slugParts.join('/')}/`,
			};
		}),
	});
}
