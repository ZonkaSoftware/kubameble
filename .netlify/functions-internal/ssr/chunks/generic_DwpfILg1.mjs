export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_Bw-WgAym.mjs').then(n => n.g);

export { page };
