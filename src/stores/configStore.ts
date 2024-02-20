import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ConfigStore = {
  backgroundImage: string
}

type ConfigActions = {
  setBackgroundImage: (index: string) => void
}

export const useConfigStore = create<ConfigStore & ConfigActions>()(
  devtools(
    persist(
      (set) => ({
        backgroundImage: '01',
        setBackgroundImage: (index) => set({ backgroundImage: index }),
      }),
      { name: 'config-store' },
    ),
  ),
)
