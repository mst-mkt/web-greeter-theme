import { NotFoundRoute, RootRoute, Route, Router, createHashHistory } from '@tanstack/react-router'
import Home from './pages'
import Login from './pages/login'
import NotFound from './pages/notFound'
import Settings from './pages/settings'

const rootRoute = new RootRoute({})

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

export const loginRoot = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
})

export const settingsRoot = new Route({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: () => <Settings />,
})

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
})

const hashHistory = createHashHistory()

const router = new Router({
  routeTree: rootRoute.addChildren([indexRoute, loginRoot, settingsRoot]),
  notFoundRoute,
  history: hashHistory,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router }
