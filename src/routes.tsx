import { RootRoute, Route, Router } from '@tanstack/react-router'
import Home from './pages'

const rootRoute = new RootRoute({})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

const router = new Router({
  routeTree: rootRoute.addChildren([indexRoute]),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export { router }
