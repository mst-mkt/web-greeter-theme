import { ChangeEvent } from 'react'
import { useGreeterStore } from '../stores/greeterStore'

export const UserSelect = () => {
  const { selectUser, selectedUser } = useGreeterStore()

  const handleUserSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const username = event.target.value
    const user = window.lightdm?.users.find((user) => user.username === username)
    user && selectUser(user)
    window.lightdm?.authenticate(username)
  }

  return (
    <select value={selectedUser?.username} onChange={handleUserSelect}>
      {window.lightdm?.users.map((user) => (
        <option value={user.username} key={user.username}>
          {user.display_name}
        </option>
      ))}
    </select>
  )
}
