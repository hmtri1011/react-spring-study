import React, { createRef, useCallback, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'

import { BoxSpring } from 'components'

import styles from '../BoxMoving/BoxMoving.module.scss'

const BoxMovingWithSpring: React.FC = () => {
  const boxContainerRef = createRef<HTMLDivElement>()
  const boxRef = createRef<HTMLDivElement>()

  const [speed, setSpeed] = useState(0.5)
  const [springStyle, set] = useSpring(() => ({
    top: '0px',
    left: '0px',
    config: {
      duration: speed * 1000
    }
  }))

  const getMousePosition = useCallback(
    (e: MouseEvent): void => {
      if (boxRef.current) {
        set({
          top: e.offsetY + 'px',
          left: e.offsetX + 'px',
          config: {
            duration: speed * 1000
          }
        })

        // uncomment below if you want the cursor is in the center of the box
        // const { width, height } = boxRef.current.getBoundingClientRect()
        // set({
        //   top: e.offsetY - width / 2 + 'px',
        //   left: e.offsetX - height / 2 + 'px',
        //   config: {
        //     duration: speed * 1000
        //   }
        // })
      }
    },
    [boxRef, set, speed]
  )

  useEffect(() => {
    const ref = boxContainerRef.current
    ref?.addEventListener('click', getMousePosition)

    return () => ref?.removeEventListener('click', getMousePosition)
  }, [boxContainerRef, getMousePosition])

  useEffect(() => {
    set({
      top: '0px',
      left: '0px'
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [set, speed])

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
        <BoxSpring ref={boxRef} springStyle={springStyle} />
      </div>
    </section>
  )
}

export default BoxMovingWithSpring
