import { create, keyframes, props } from '@stylexjs/stylex'
import { LogInIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useInput } from '../hooks/useInput'
import { useGreeterStore } from '../stores/greeterStore'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'
import { PasswordInput } from './PasswordInput'

const opacityAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const styles = create({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 36px',
    gridTemplateRows: '128px 1fr 36px',
    justifyItems: 'center',
    width: 'min(384px, 92svw)',
    margin: '0 auto',
    rowGap: 32,
    columnGap: 8,
    animationName: opacityAnimation,
    animationDuration: '500ms',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'forwards',
  },
  avatar: {
    gridColumn: '1 / 3',
  },
  name: {
    gridColumn: '1 / 3',
    fontSize: 24,
    margin: 0,
  },
})

export const LoginForm = () => {
  const [password, setPassword] = useInput('')
  const { selectedUser } = useGreeterStore()

  const login = () => {
    if (!window.lightdm?.in_authentication) return
    window.lightdm.respond(password)
  }

  const name = useMemo(() => {
    const existName = selectedUser?.display_name !== undefined && selectedUser?.display_name !== ''
    return existName ? selectedUser?.display_name : selectedUser?.username
  }, [selectedUser])

  return (
    <div {...props(styles.container)}>
      <Avatar user={selectedUser ?? undefined} style={styles.avatar} />
      <p {...props(styles.name)}>{name}</p>
      <PasswordInput value={password} onChange={setPassword} onEnter={login} />
      <IconButton Icon={LogInIcon} onClick={login} />
    </div>
  )
}
