const SITE_TITLES = {
  fr: 'MES INTÉRÊTS SOCIAUX',
  en: 'MY SOCIAL INTERESTS',
};

const SITE_DESCRIPTIONS = {
  fr: 'Passer du bruit à la nuance : faire de la rigueur scientifique un outil du quotidien.',
  en: 'From noise to nuance: making scientific rigor an everyday tool.',
};

export function getSiteTitle(locale: string) {
  return SITE_TITLES[locale] ?? SITE_TITLES.fr;
}

export function getSiteDescription(locale: string) {
  return SITE_DESCRIPTIONS[locale] ?? SITE_DESCRIPTIONS.fr;
}

const MENU = {
  fr: [
    { url: '/blog', title: 'Articles' },
    { url: '/podcast', title: 'Podcast' },
    { url: '/authors', title: 'À propos' },
  ],
  en: [
    { url: '/blog', title: 'Articles' },
    { url: '/podcast', title: 'Podcast' },
    { url: '/authors', title: 'About' },
  ],
};

export function getMenu(locale: string) {
  return MENU[locale] ?? MENU.fr;
}
