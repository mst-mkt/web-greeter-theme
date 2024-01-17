import { LightDMSession, LightDMUser } from 'nody-greeter-types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type GreeterState = {
  selectedUser: LightDMUser | null
  selectedSession: LightDMSession | null
}

type GreeterActions = {
  selectUser: (user: LightDMUser) => void
  selectSession: (session: LightDMSession) => void
}

export const useGreeterStore = create<GreeterState & GreeterActions>()(
  devtools((set) => ({
    selectedUser: null,
    selectedSession: null,
    selectUser: (user) => set({ selectedUser: user }),
    selectSession: (session) => set({ selectedSession: session }),
  })),
)
