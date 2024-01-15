import { Link } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Top</Link>
    </div>
  )
}

export default NotFound
