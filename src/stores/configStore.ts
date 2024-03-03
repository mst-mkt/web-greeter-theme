import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ImageNumber = '01' | '02' | '03' | '04'

type ConfigStore = {
  backgroundImage: ImageNumber
  skipFirstPage: boolean
}

type ConfigActions = {
  setBackgroundImage: (index: ImageNumber) => void
  setSkipFirstPage: (skip: boolean) => void
}

export const useConfigStore = create<ConfigStore & ConfigActions>()(
  devtools(
    persist(
      (set) => ({
        backgroundImage: '01',
        setBackgroundImage: (index) => set({ backgroundImage: index }),
        skipFirstPage: false,
        setSkipFirstPage: (skip) => set({ skipFirstPage: skip }),
      }),
      { name: 'config-store' },
    ),
  ),
)
