import React, { CSSProperties, forwardRef } from 'react'
import { animated } from 'react-spring'

import { BoxProps } from '../Box'

import styles from '../Box/Box.module.scss'

interface BoxSpringProps extends BoxProps {
  springStyle?: CSSProperties
}

const BoxSpring: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BoxSpringProps
> = ({ width = 50, height = 50, color = 'red', springStyle }, ref) => {
  return (
    <animated.div
      ref={ref}
      style={{ width, height, backgroundColor: color, ...springStyle }}
      className={styles.box}
    ></animated.div>
  )
}

export default forwardRef(BoxSpring)
