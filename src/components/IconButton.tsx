import { StyleXStyles, create, props } from '@stylexjs/stylex'
import { LucideIcon } from 'lucide-react'

const styles = create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: 8,
    outline: 0,
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

type Props = {
  Icon: LucideIcon
  onClick?: () => void
  style?: StyleXStyles
  size?: number
}

export const IconButton = ({ Icon, onClick, style, size = 18 }: Props) => {
  return (
    <button type="button" onClick={onClick} {...props(styles.button, style)}>
      <Icon size={size} color="#333" />
    </button>
  )
}
