import { create, keyframes, props } from '@stylexjs/stylex'
import { LoginForm } from '../components/LoginFrom'

const blurAnimation = keyframes({
  from: {
    backdropFilter: 'blur(0)',
  },
  to: {
    backdropFilter: 'blur(12px)',
  },
})

const styles = create({
  container: {
    display: 'grid',
    placeContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff2',
    animationName: blurAnimation,
    animationDuration: '500ms',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'forwards',
  },
})

const Home = () => (
  <div {...props(styles.container)}>
    <LoginForm />
  </div>
)

export default Home
