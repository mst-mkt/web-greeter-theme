import { NotFoundRoute, RootRoute, Route, Router } from '@tanstack/react-router'
import Home from './pages'
import NotFound from './pages/notFound'

const rootRoute = new RootRoute({})

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound,
})

const router = new Router({
  routeTree: rootRoute.addChildren([indexRoute]),
  notFoundRoute,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router }
