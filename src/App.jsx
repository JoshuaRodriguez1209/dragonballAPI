import { useState } from 'react'
import { Gallery } from './components/Gallery'

function App() {


  return (
    <>
      <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center">
        	<h1 className="text-3xl font-bold text-center mb-4">
              Dragon Ball
          </h1>
          <Gallery/>
      </div>
    </>
  )
}

export default App
