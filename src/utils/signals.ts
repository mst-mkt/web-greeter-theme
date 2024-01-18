import { useGreeterStore } from '../stores/greeterStore'

export const connectSignals = () => {
  if (window.lightdm === undefined) return

  const greeterStore = useGreeterStore.getState()
  greeterStore.selectUser(window.lightdm.users[0])
  greeterStore.selectSession(window.lightdm.sessions[0])
  window.lightdm.authenticate(window.lightdm.users[0].username)

  window.lightdm.show_prompt.connect(() => {
    // TODO
  })

  window.lightdm.show_message.connect(() => {
    // TODO
  })

  window.lightdm.authentication_complete.connect(() => {
    if (window.lightdm === undefined) return
    const greeterStore = useGreeterStore.getState()

    if (!window.lightdm.is_authenticated) {
      const selectedUser = greeterStore.selectedUser
      selectedUser && window.lightdm.authenticate(selectedUser.username)
    } else {
      const selectedSession = greeterStore.selectedSession
      selectedSession && window.lightdm.start_session(selectedSession.key)
    }
  })
}
