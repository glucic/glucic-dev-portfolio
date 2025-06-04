import 'server-only';

const dictionaries = {
    en: () => import('../../messages/en.json').then((mod) => mod.default),
    de: () => import('../../messages/de.json').then((mod) => mod.default),
    hr: () => import('../../messages/hr.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: 'en' | 'de' | 'hr') => {
    return dictionaries[locale]?.() || dictionaries['en']();
};