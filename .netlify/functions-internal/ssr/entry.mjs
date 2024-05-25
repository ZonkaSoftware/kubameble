import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DXyR6VP-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DwpfILg1.mjs');
const _page1 = () => import('./chunks/keystatic-api_rIFL--yw.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_BKkcCFfr.mjs');
const _page3 = () => import('./chunks/cookies_DEczOGNU.mjs');
const _page4 = () => import('./chunks/how-we-work_NJ6OospO.mjs');
const _page5 = () => import('./chunks/privacy_CDFF7qxn.mjs');
const _page6 = () => import('./chunks/_slug__C62lU1nT.mjs');
const _page7 = () => import('./chunks/realizations_CurUCQsE.mjs');
const _page8 = () => import('./chunks/index_CT0Y1Byo.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/cookies.astro", _page3],
    ["src/pages/how-we-work.astro", _page4],
    ["src/pages/privacy.astro", _page5],
    ["src/pages/realizations/[slug].astro", _page6],
    ["src/pages/realizations.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ac38fe69-57d9-4a24-b968-96b32b1b47bf"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
