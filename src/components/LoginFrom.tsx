import { create, props } from '@stylexjs/stylex'
import { LogInIcon } from 'lucide-react'
import { useInput } from '../hooks/useInput'
import { useGreeterStore } from '../stores/greeterStore'
import { Avatar } from './Avatar'
import { IconButton } from './IconButton'
import { PasswordInput } from './PasswordInput'

const styles = create({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 36px',
    gridTemplateRows: '128px 1fr 36px',
    justifyItems: 'center',
    width: 'min(384px, 92svw)',
    margin: '0 auto',
    rowGap: 36,
    columnGap: 8,
  },
  avatar: {
    gridColumn: '1 / 3',
  },
  name: {
    gridColumn: '1 / 3',
    fontSize: 24,
    fontWeight: 'bold',
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

  return (
    <div {...props(styles.container)}>
      <Avatar user={selectedUser ?? undefined} style={styles.avatar} />
      <p {...props(styles.name)}>{selectedUser?.display_name ?? selectedUser?.username}</p>
      <PasswordInput value={password} onChange={setPassword} onEnter={login} />
      <IconButton Icon={LogInIcon} onClick={login} />
    </div>
  )
}
