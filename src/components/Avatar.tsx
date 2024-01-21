import { StyleXStyles, create, props } from '@stylexjs/stylex'
import { LightDMUser } from 'nody-greeter-types'

const styles = create({
  container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    aspectRatio: 1,
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

type Props = {
  user?: LightDMUser
  size?: number
  style?: StyleXStyles
}

export const Avatar = ({ user, size = 128, style }: Props) => {
  return (
    <div {...props(styles.container, style)} style={{ width: size, height: size }}>
      <img {...props(styles.image)} src={user?.image} alt={`${user?.username}'s avatar`} />
    </div>
  )
}
