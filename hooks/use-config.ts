import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Config = {
  style: 'new-york-v4'
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun'
  installationType: 'cli' | 'manual'
}

type ConfigStore = {
  config: Config
  setConfig: (newConfig: Partial<Config>) => void
}

export const useConfig = create<ConfigStore>()(
  persist(
    (set) => ({
      config: {
        style: 'new-york-v4',
        packageManager: 'pnpm',
        installationType: 'cli',
      },
      setConfig: (newConfig) =>
        set((state) => ({
          config: {
            ...state.config,
            ...newConfig,
          },
        })),
    }),
    {
      name: 'config', // <-- nama key di localStorage
    }
  )
)
