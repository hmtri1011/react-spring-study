import React, { createRef, useCallback, useEffect, useState } from 'react'

import { Box } from 'components'

import styles from './BoxMoving.module.scss'

const BoxMoving: React.FC = () => {
  const boxContainerRef = createRef<HTMLDivElement>()
  const boxRef = createRef<HTMLDivElement>()

  const [speed, setSpeed] = useState(0.5)

  const getMousePosition = useCallback(
    (e: MouseEvent): void => {
      if (boxRef.current) {
        boxRef.current.style.top = e.offsetY + 'px'
        boxRef.current.style.left = e.offsetX + 'px'

        // uncomment below if you want the cursor is in the center of the box
        // const { width, height } = boxRef.current.getBoundingClientRect()
        // boxRef.current.style.top = e.offsetY - width / 2 + 'px'
        // boxRef.current.style.left = e.offsetX - height / 2 + 'px'
      }
    },
    [boxRef]
  )

  useEffect(() => {
    const ref = boxContainerRef.current
    ref?.addEventListener('click', getMousePosition)

    return () => ref?.removeEventListener('click', getMousePosition)
  }, [boxContainerRef, getMousePosition])

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.top = '0px'
      boxRef.current.style.left = '0px'
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(+e.target.value)
  }

  return (
    <section className={styles.container}>
      <div className={styles.inputWrapper}>
        <label htmlFor='speed'>Moving speed in second: </label>
        <input
          type='number'
          placeholder='Set your speed'
          onChange={onChange}
          defaultValue={speed}
          id='speed'
        />
      </div>

      <div className={styles.boxContainer} ref={boxContainerRef}>
        <Box ref={boxRef} transition={speed} />
      </div>
    </section>
  )
}

export default BoxMoving
