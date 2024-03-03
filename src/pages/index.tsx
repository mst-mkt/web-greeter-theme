import { create, props } from '@stylexjs/stylex'
import { Link, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Clock } from '../components/Clock'
import { useConfigStore } from '../stores/configStore'

const styles = create({
  container: {
    display: 'grid',
    placeContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
})

const Home = () => {
  const navigate = useNavigate({ from: '/' })
  const { skipFirstPage } = useConfigStore()

  useEffect(() => {
    if (skipFirstPage) {
      navigate({ to: '/login' })
    }
  }, [navigate, skipFirstPage])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        navigate({ to: '/login' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  return (
    <div {...props(styles.container)}>
      <Link to="/login" {...props(styles.link)}>
        <Clock />
      </Link>
    </div>
  )
}
export default Home
