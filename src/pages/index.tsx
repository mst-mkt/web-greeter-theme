import { ChangeEvent } from 'react'
import { PasswordInput } from '../components/PasswordInput'
import { useInput } from '../hooks/useInput'
import { useGreeterStore } from '../stores/greeterStore'

const Home = () => {
  const [password, setPassword] = useInput('')
  const { selectedUser, selectUser, selectedSession, selectSession } = useGreeterStore()

  const handleUserSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const username = event.target.value
    const user = window.lightdm?.users.find((user) => user.username === username)
    user && selectUser(user)
    window.lightdm?.authenticate(username)
  }

  const handleSessionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const sessionKey = event.target.value
    const session = window.lightdm?.sessions.find((session) => session.key === sessionKey)
    session && selectSession(session)
  }

  const login = () => {
    if (!window.lightdm?.in_authentication) return
    window.lightdm.respond(password)
  }

  return (
    <div>
      <select value={selectedUser?.username} onChange={handleUserSelect}>
        {window.lightdm?.users.map((user) => (
          <option value={user.username}>{user.display_name}</option>
        ))}
      </select>
      <select value={selectedSession?.key} onChange={handleSessionSelect}>
        {window.lightdm?.sessions.map((session) => (
          <option value={session.key}>{session.name}</option>
        ))}
      </select>
      <PasswordInput value={password} onChange={setPassword} onEnter={login} />
      <button onClick={login} type="button">
        Login
      </button>
    </div>
  )
}

export default Home
