import * as stylex from '@stylexjs/stylex'
import { useConfigStore } from '../stores/configStore'

const getBgImage = (name: string) => {
  return new URL(`../assets/images/background/${name}.png`, import.meta.url).href
}

const styles = stylex.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  backgroundImage: (bg: string) => ({
    backgroundImage: `url(${getBgImage(bg)})`,
  }),
})

export const Background = () => {
  const { backgroundImage } = useConfigStore()
  return <div {...stylex.props(styles.background, styles.backgroundImage(backgroundImage))} />
}
