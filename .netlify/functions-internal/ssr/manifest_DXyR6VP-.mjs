import 'cookie';
import 'kleur/colors';
import './chunks/astro_CSbl_0Q4.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"cookies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cookies","isIndex":false,"type":"page","pattern":"^\\/cookies\\/?$","segments":[[{"content":"cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookies.astro","pathname":"/cookies","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"how-we-work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/how-we-work","isIndex":false,"type":"page","pattern":"^\\/how-we-work\\/?$","segments":[[{"content":"how-we-work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/how-we-work.astro","pathname":"/how-we-work","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"realizations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/realizations","isIndex":false,"type":"page","pattern":"^\\/realizations\\/?$","segments":[[{"content":"realizations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/realizations.astro","pathname":"/realizations","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DTKFI_3Q.css"}],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/kikson/Desktop/kubameble/src/pages/cookies.astro",{"propagation":"none","containsHead":true}],["C:/Users/kikson/Desktop/kubameble/src/pages/how-we-work.astro",{"propagation":"none","containsHead":true}],["C:/Users/kikson/Desktop/kubameble/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/kikson/Desktop/kubameble/src/pages/realizations.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/kikson/Desktop/kubameble/src/pages/realizations/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/realizations@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/realizations/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/banners/1.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/banners/1.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/realizations/ggg.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/realizations/ggg.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/realizations/testtest.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/Users/kikson/Desktop/kubameble/src/content/realizations/testtest.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/@keystatic/astro/internal/keystatic-api.js":"chunks/pages/keystatic-api_BoaYZF9o.mjs","/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro":"chunks/pages/keystatic-astro-page_DXnyHqgz.mjs","\u0000@astrojs-manifest":"manifest_DXyR6VP-.mjs","C:/Users/kikson/Desktop/kubameble/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DwpfILg1.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"chunks/keystatic-api_rIFL--yw.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"chunks/keystatic-astro-page_BKkcCFfr.mjs","\u0000@astro-page:src/pages/cookies@_@astro":"chunks/cookies_DEczOGNU.mjs","\u0000@astro-page:src/pages/how-we-work@_@astro":"chunks/how-we-work_NJ6OospO.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_CDFF7qxn.mjs","\u0000@astro-page:src/pages/realizations/[slug]@_@astro":"chunks/_slug__C62lU1nT.mjs","\u0000@astro-page:src/pages/realizations@_@astro":"chunks/realizations_CurUCQsE.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CT0Y1Byo.mjs","C:/Users/kikson/Desktop/kubameble/src/content/banners/1.mdoc?astroContentCollectionEntry=true":"chunks/1_Vb3xLVrI.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/ggg.mdoc?astroContentCollectionEntry=true":"chunks/ggg_vZDVZggg.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/testtest.mdoc?astroContentCollectionEntry=true":"chunks/testtest_CWDvM1Ax.mjs","C:/Users/kikson/Desktop/kubameble/src/content/banners/1.mdoc?astroPropagatedAssets":"chunks/1_q6i5hxns.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/ggg.mdoc?astroPropagatedAssets":"chunks/ggg_AOIp4p8M.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/testtest.mdoc?astroPropagatedAssets":"chunks/testtest_DE_2VqYg.mjs","C:/Users/kikson/Desktop/kubameble/src/content/banners/1.mdoc":"chunks/1_D0xhWTkT.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/ggg.mdoc":"chunks/ggg_D_iQVwTS.mjs","C:/Users/kikson/Desktop/kubameble/src/content/realizations/testtest.mdoc":"chunks/testtest_CtuoQYMH.mjs","C:/Users/kikson/Desktop/kubameble/src/components/SwipeCarousel":"_astro/SwipeCarousel.oX47N_0u.js","@astrojs/react/client.js":"_astro/client.BIBgQUEh.js","C:/Users/kikson/Desktop/kubameble/src/components/Opinions":"_astro/Opinions.Bi08VVR8.js","/astro/hoisted.js?q=0":"_astro/hoisted.CrapKPnw.js","C:/Users/kikson/Desktop/kubameble/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.C_eBHuXs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/project.DVUoBWVI.svg","/_astro/money.DWFK04zL.svg","/_astro/measurement.BzNf7Gko.svg","/_astro/check.Bx2rxcWj.svg","/_astro/contact.C1mBiX_x.svg","/_astro/hamer.CvKs-4Qp.svg","/_astro/line1.VoYgaxwW.svg","/_astro/line2.A3B7stP9.svg","/_astro/wave.DUOgLGi7.svg","/_astro/logo.DBvgEwtS.svg","/_astro/mail.-9KH9LfE.svg","/_astro/location.9tIxQmVp.svg","/_astro/phone.glBuMoIU.svg","/_astro/Poppins-Medium.Cxde2ZoM.ttf","/_astro/nip.joScL31a.svg","/_astro/question.BIWtHSZz.svg","/_astro/Poppins-Black.yHqY0KRU.ttf","/_astro/Poppins-SemiBold.B_fPDAUb.ttf","/_astro/Poppins-Bold.qTAUjFF7.ttf","/_astro/logo2.DW7GFVU3.svg","/_astro/keystatic-astro-page.DTKFI_3Q.css","/favicon.svg","/fonts/OFL.txt","/fonts/Poppins-Black.ttf","/fonts/Poppins-Bold.ttf","/fonts/Poppins-Medium.ttf","/fonts/Poppins-SemiBold.ttf","/_astro/client.BIBgQUEh.js","/_astro/hoisted.CrapKPnw.js","/_astro/index.Bb25hmWI.js","/_astro/index.PKDgv4WG.js","/_astro/jsx-runtime.7SIkoU6q.js","/_astro/keystatic-page.C_eBHuXs.js","/_astro/motion.DSh1Aebo.js","/_astro/Opinions.Bi08VVR8.js","/_astro/SwipeCarousel.oX47N_0u.js","/_astro/_commonjsHelpers.BosuxZz1.js","/images/banners/1/bannerImage.jpg","/images/realizations/ggg/mainImage.jpg","/images/realizations/testtest/mainImage.jpg","/images/realizations/ggg/images/0.jpg","/images/realizations/ggg/images/1.jpg","/cookies/index.html","/how-we-work/index.html","/privacy/index.html","/realizations/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
