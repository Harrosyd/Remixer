import { useState } from 'react'
import Header from './components/Header'
import RemixForm from './components/RemixForm'
import RemixOutput from './components/RemixOutput'

function App() {
  const [outputText, setOutputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <RemixForm 
            setOutputText={setOutputText} 
            setIsLoading={setIsLoading} 
          />
          <RemixOutput 
            outputText={outputText} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </div>
  )
}

export default App 