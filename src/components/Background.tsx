import * as stylex from '@stylexjs/stylex'

// TODO: 設定から選択できるようにする
const bgImage = '01'

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
})

export const Background = () => {
  return (
    <div
      {...stylex.props(styles.background, {
        backgroundImage: `url(${getBgImage(bgImage)})`,
      } as stylex.StyleXStyles)}
    />
  )
}
