import { config, fields, collection, singleton } from '@keystatic/core';

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
		researchTitle: fields.text({
			label: 'Encadré recherche — Titre de l\'étude',
			description: 'Laisser vide pour ne pas afficher l\'encadré',
			validation: { isRequired: false },
		}),
		researchNote: fields.text({
			label: 'Encadré recherche — Résumé de la méthodologie',
			multiline: true,
			validation: { isRequired: false },
		}),
		researchCitation: fields.text({
			label: 'Encadré recherche — Référence (auteurs, éditeur, année)',
			validation: { isRequired: false },
		}),
		researchUrl: fields.url({
			label: 'Encadré recherche — Lien vers l\'étude',
			validation: { isRequired: false },
		}),
		content: fields.markdoc({
			label: 'Contenu',
			extension: 'md',
		}),
	};
}

function homeSchema() {
	return {
		heroTitle: fields.text({ label: 'Titre principal' }),
		introDescription: fields.text({
			label: 'Texte d\'introduction',
			multiline: true,
		}),
		heroImage: fields.image({
			label: 'Photo de la bannière',
			directory: 'src/assets/home',
			publicPath: '../../assets/home/',
			validation: { isRequired: false },
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
	singletons: {
		homeFr: singleton({
			label: 'Page d\'accueil (Français)',
			path: 'src/content/home/fr',
			schema: homeSchema(),
		}),
		homeEn: singleton({
			label: 'Page d\'accueil (English)',
			path: 'src/content/home/en',
			schema: homeSchema(),
		}),
	},
});
