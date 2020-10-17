import React, { forwardRef } from 'react'

import styles from './Box.module.scss'

export interface BoxProps {
  width?: number
  height?: number
  color?: string
  transition?: number
}

const Box: React.ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  { width = 50, height = 50, color = 'green', transition = 0.5 },
  ref
) => {
  return (
    <div
      ref={ref}
      style={{
        width,
        height,
        backgroundColor: color,
        transition: transition + 's'
      }}
      className={styles.box}
    />
  )
}

export default forwardRef(Box)
