import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
export const getAll = async () => {
  const request = await axios.get(baseUrl)
  return await request.data
}
export const vote = async (id, anecdote) => {
  const voteAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
  const request = await axios.put(`${baseUrl}/${id}`, voteAnecdote)
  return await request.data
}

export const createNew = async anecdote => {
  const getId = () => (100000 * Math.random()).toFixed(0)

  const newAnecdote = { content: anecdote, votes: 0, id: getId() }
  const request = await axios.post(baseUrl, newAnecdote)
  return await request.data
}
