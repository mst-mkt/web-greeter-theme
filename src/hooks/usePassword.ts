import { useState } from 'react'

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPassword ? 'text' : 'password'

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return { showPassword, inputType, toggleShowPassword }
}
