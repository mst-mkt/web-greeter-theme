import { create, props } from '@stylexjs/stylex'
import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

const styles = create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    userSelect: 'none',
    cursor: 'pointer',
  },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  input: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    width: 40,
    height: 20,
    margin: 0,
    borderRadius: 10,
    backgroundColor: '#ccc',
    transition: 'background-color ease-in-out 150ms',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
      transition: 'left 150ms',
    },
  },
  inputChecked: {
    backgroundColor: '#69c2f3',
    '::before': {
      left: 'calc(100% - 20px)',
    },
  },
})

type Props = {
  label?: string
  checked: boolean
  onChange: ((checked: boolean) => void) | Dispatch<SetStateAction<boolean>>
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

export const Toggle = ({ label, checked, onChange, ...inputProps }: Props) => {
  return (
    <label {...props(styles.container)}>
      {label && <span {...props(styles.label)}>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...props(styles.input, checked && styles.inputChecked)}
        {...inputProps}
      />
    </label>
  )
}
