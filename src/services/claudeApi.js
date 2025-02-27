import axios from 'axios'

// Replace with your actual Claude API endpoint and key
const API_URL = import.meta.env.VITE_CLAUDE_API_URL
const API_KEY = import.meta.env.VITE_CLAUDE_API_KEY

export async function remixContent(text, remixType) {
  // Create appropriate prompt based on remix type
  let prompt = ''
  
  switch (remixType) {
    case 'summarize':
      prompt = `Summarize the following text concisely:\n\n${text}`
      break
    case 'professional':
      prompt = `Rewrite the following text in a professional tone:\n\n${text}`
      break
    case 'casual':
      prompt = `Rewrite the following text in a casual, conversational tone:\n\n${text}`
      break
    case 'bullet':
      prompt = `Convert the following text into a well-organized bullet point list:\n\n${text}`
      break
    case 'expand':
      prompt = `Expand on the following text with more details and examples:\n\n${text}`
      break
    default:
      prompt = `Rewrite the following text:\n\n${text}`
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "claude-3-opus-20240229",
        max_tokens: 1024,
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    )

    return response.data.content[0].text
  } catch (error) {
    console.error('API error:', error)
    throw new Error('Failed to get response from Claude API')
  }
} 