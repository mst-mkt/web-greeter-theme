import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ImageNumber = '01' | '02' | '03' | '04'

type ConfigStore = {
  backgroundImage: ImageNumber
}

type ConfigActions = {
  setBackgroundImage: (index: ImageNumber) => void
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
