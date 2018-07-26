import React from 'react'

import { Navbar } from './components'
import Routes from './routes'
import { colors } from './color-palette'

const App = () => {
  return (
    <div style={{ backgroundColor: colors.main }}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
