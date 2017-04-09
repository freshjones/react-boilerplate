import { APP_CONTAINER_ID, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = title =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <div id="${APP_CONTAINER_ID}"></div>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
  </body>
</html>
`

export default renderApp
