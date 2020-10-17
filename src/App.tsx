import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoxMoving, BoxMovingWithSpring } from 'containers'

function App() {
  return (
    <>
      <BoxMoving />
      {/* Below container use react-spring instead of pure css transition */}
      {/* <BoxMovingWithSpring /> */}
    </>
  )
}

export default App
