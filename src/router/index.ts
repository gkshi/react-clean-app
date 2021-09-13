import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

// middlewares and plugins
import session from './middlewares/session'
import accessor from './middlewares/accessor'

// routes
import routes from './routes'

export function configureRouter () {
  const router = createRouter(routes, {
    allowNotFound: true,
    caseSensitive: false,
    autoCleanUp: true
  })

  router.usePlugin(browserPlugin())

  // middleware
  router.useMiddleware(session, accessor)

  return router
}

export default { configureRouter }
