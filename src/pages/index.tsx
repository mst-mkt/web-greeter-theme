import { create, props } from '@stylexjs/stylex'
import { LoginForm } from '../components/LoginFrom'

const styles = create({
  container: {
    display: 'grid',
    placeContent: 'center',
    width: '100svw',
    height: '100svh',
    backdropFilter: 'blur(12px)',
    backgroundColor: '#fff2',
  },
})

const Home = () => (
  <div {...props(styles.container)}>
    <LoginForm />
  </div>
)

export default Home
