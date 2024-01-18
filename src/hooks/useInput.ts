import { ChangeEvent, useState } from 'react'

export const useInput = <T extends string | number = string>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T)
  }

  return [value, onChange] as const
}
