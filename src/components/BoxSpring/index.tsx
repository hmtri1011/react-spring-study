import React, { CSSProperties } from 'react'
import { animated } from 'react-spring'

import { BoxProps } from '../Box'

import styles from '../Box/Box.module.scss'

interface BoxSpringProps extends BoxProps {
  springStyle?: CSSProperties
}

const BoxSpring: React.FC<BoxSpringProps> = ({
  width = 50,
  height = 50,
  color = 'red',
  springStyle
}) => {
  return (
    <animated.div
      style={{ width, height, backgroundColor: color, ...springStyle }}
      className={styles.box}
    ></animated.div>
  )
}

export default BoxSpring
