import React from 'react'
import 'normalize.css'
import 'basscss/css/basscss.min.css'

import { APP_NAME } from '../../../shared/config'
import './app.css'

function App() {
  return (
    <div id="app" className="flex items-center justify-center">
      <h1 className="regular">
        {APP_NAME}
      </h1>
    </div>
  )
}

export default App
