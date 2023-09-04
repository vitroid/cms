// import { addMessages, locale } from 'svelte-i18n';

// import { cn } from './locales/cn.js';
// import { en } from './locales/en.js';
// import { ja } from './locales/ja.js';
// addMessages('ja', ja);
// addMessages('en', en);
// addMessages('cn', cn);

// locale.set("ja")

// src/lib/i18n/index.ts
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'ja'

register('ja', () => import('./locales/ja.json'))
register('en', () => import('./locales/en.json'))
register('cn', () => import('./locales/cn.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})