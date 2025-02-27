function RemixOutput({ outputText, isLoading }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Output</h2>
        {outputText && !isLoading && (
          <button
            onClick={copyToClipboard}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors"
          >
            Copy
          </button>
        )}
      </div>
      
      <div className="w-full h-64 p-3 border border-gray-300 rounded-md overflow-auto bg-gray-50">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{outputText}</div>
        )}
      </div>
    </div>
  )
}

export default RemixOutput 