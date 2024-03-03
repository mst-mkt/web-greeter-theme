import { StyleXStyles, create, props } from '@stylexjs/stylex'
import { LucideIcon } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

const styles = create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '100%',
    border: 0,
    borderRadius: 8,
    outline: 0,
    gap: 8,
    padding: 8,
    fontSize: 16,
    fontFamily: "'Lexend Variable', sans-serif",
    color: '#333',
    backgroundColor: {
      default: '#69c2f3',
      ':hover': '#5ab6f6',
      ':focus-visible': '#5ab6f6',
      ':active': '#4ca0f9',
    },
    transitionProperty: 'background-color',
    transitionDuration: '100ms',
    transitionTimingFunction: 'ease-in-out',
    cursor: 'pointer',
  },
  icon: {
    height: '100%',
    aspectRatio: 1,
  },
})

type AdditionalProps = {
  LeftIcon?: LucideIcon
  RightIcon?: LucideIcon
  onClick?: () => void
  style?: StyleXStyles
  size?: number
}

type Props = AdditionalProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AdditionalProps>

export const IconButton = ({
  LeftIcon,
  RightIcon,
  onClick,
  style,
  size = 18,
  ...buttonProps
}: Props) => {
  return (
    <button type="button" onClick={onClick} {...props(styles.button, style)}>
      {LeftIcon && <LeftIcon size={size} color="#333" />}
      {buttonProps.children}
      {RightIcon && <RightIcon size={size} color="#333" />}
    </button>
  )
}
