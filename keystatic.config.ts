import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'github',
		repo: 'Mysocialinterests/fyrre',
	},
	collections: {
		posts: collection({
			label: 'Articles de blog',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
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
					publicPath: '../../assets/blog/',
					validation: { isRequired: false },
				}),
				content: fields.markdoc({
					label: 'Contenu',
					extension: 'md',
				}),
			},
		}),
	},
});
