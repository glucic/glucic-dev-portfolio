import 'server-only';

const dictionaries = {
    en: () => import('../../messages/en.json').then((mod) => mod.default),
    de: () => import('../../messages/de.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: 'en' | 'de') => {
    return dictionaries[locale]?.() || dictionaries['en']();
};