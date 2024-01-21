import { ChangeEvent } from 'react'
import { useGreeterStore } from '../stores/greeterStore'

export const SessionSelect = () => {
  const { selectedSession, selectSession } = useGreeterStore()

  const handleSessionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const sessionKey = event.target.value
    const session = window.lightdm?.sessions.find((session) => session.key === sessionKey)
    session && selectSession(session)
  }

  return (
    <select value={selectedSession?.key} onChange={handleSessionSelect}>
      {window.lightdm?.sessions.map((session) => (
        <option value={session.key} key={session.key}>
          {session.name}
        </option>
      ))}
    </select>
  )
}
