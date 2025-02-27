import { useState } from 'react'
import { remixContent } from '../services/claudeApi'

function RemixForm({ setOutputText, setIsLoading }) {
  const [inputText, setInputText] = useState('')
  const [remixType, setRemixType] = useState('summarize')

  const remixOptions = [
    { value: 'summarize', label: 'Summarize' },
    { value: 'professional', label: 'Make Professional' },
    { value: 'casual', label: 'Make Casual' },
    { value: 'bullet', label: 'Convert to Bullet Points' },
    { value: 'expand', label: 'Expand Content' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    setIsLoading(true)
    try {
      const result = await remixContent(inputText, remixType)
      setOutputText(result)
    } catch (error) {
      console.error('Error remixing content:', error)
      setOutputText('Error: Could not remix content. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Input Text</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Remix Style:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={remixType}
            onChange={(e) => setRemixType(e.target.value)}
          >
            {remixOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Remix Content
        </button>
      </form>
    </div>
  )
}

export default RemixForm 