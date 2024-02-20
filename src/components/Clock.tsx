import { create, props } from '@stylexjs/stylex'
import { useClock } from '../hooks/useClock'

const styles = create({
  clock: {
    fontSize: 64,
    color: '#fff',
    textShadow: '0 0 8px #0008',
    fontVariantNumeric: 'tabular-nums',
    userSelect: 'none',
  },
})

export const Clock = () => {
  const currentTime = useClock()

  return <time {...props(styles.clock)}>{currentTime.toLocaleTimeString()}</time>
}
