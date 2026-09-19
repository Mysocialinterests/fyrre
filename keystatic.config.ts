import { config, fields, collection } from '@keystatic/core';

function postSchema(label: string) {
	return {
		title: fields.slug({ name: { label: 'Titre' } }),
		description: fields.text({
			label: 'Description',
			multiline: true,
		}),
		pubDate: fields.date({ label: 'Date de publication' }),
		updatedDate: fields.date({
			label: 'Date de mise à jour',
			validation: { isRequired: false },
		}),
		heroImage: fields.image({
			label: 'Image principale',
			directory: 'src/assets/blog',
			publicPath: '../../../assets/blog/',
			validation: { isRequired: false },
		}),
		content: fields.markdoc({
			label: 'Contenu',
			extension: 'md',
		}),
	};
}

export default config({
	storage: {
		kind: 'github',
		repo: 'Mysocialinterests/fyrre',
	},
	collections: {
		postsFr: collection({
			label: 'Articles de blog (Français)',
			slugField: 'title',
			path: 'src/content/blog/fr/*',
			format: { contentField: 'content' },
			schema: postSchema('Français'),
		}),
		postsEn: collection({
			label: 'Articles de blog (English)',
			slugField: 'title',
			path: 'src/content/blog/en/*',
			format: { contentField: 'content' },
			schema: postSchema('English'),
		}),
	},
});
