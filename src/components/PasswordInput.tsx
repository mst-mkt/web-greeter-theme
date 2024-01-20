import * as stylex from '@stylexjs/stylex'
import { Eye, EyeOff, KeyRound } from 'lucide-react'
import { useEffect } from 'react'
import { usePassword } from '../hooks/usePassword'

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: () => void
}

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    border: '1px solid #000',
    padding: '8px 12px',
    width: 'fit-content',
  },
  input: {
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
  },
  button: {
    display: 'flex',
    border: 0,
    borderRadius: 4,
    outline: 0,
    padding: 4,
    backgroundColor: {
      default: 'transparent',
      ':hover': '#0002',
      ':focus-visible': '#0002',
      ':active': '#0004',
    },
    transitionProperty: 'background-color',
    transitionDuration: '100ms',
    transitionTimingFunction: 'ease-in-out',
    cursor: 'pointer',
  },
})

export const PasswordInput = ({ value, onChange, onEnter }: Props) => {
  const { showPassword, inputType, toggleShowPassword } = usePassword()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onEnter?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEnter])

  return (
    <div {...stylex.props(styles.container)}>
      <KeyRound size={16} />
      <input
        type={inputType}
        value={value}
        placeholder="Password"
        onChange={onChange}
        // biome-ignore lint/a11y/noAutofocus: It is a component that does not affect a11y much
        autoFocus
        {...stylex.props(styles.input)}
      />
      <button onClick={toggleShowPassword} type="button" {...stylex.props(styles.button)}>
        {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </button>
    </div>
  )
}
