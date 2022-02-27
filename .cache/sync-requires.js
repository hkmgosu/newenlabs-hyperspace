
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/usuario/Documentos/work/newenlabs-hyperspace/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/usuario/Documentos/work/newenlabs-hyperspace/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/usuario/Documentos/work/newenlabs-hyperspace/src/pages/about.js")),
  "component---src-pages-elements-js": preferDefault(require("/home/usuario/Documentos/work/newenlabs-hyperspace/src/pages/elements.js")),
  "component---src-pages-index-js": preferDefault(require("/home/usuario/Documentos/work/newenlabs-hyperspace/src/pages/index.js"))
}

