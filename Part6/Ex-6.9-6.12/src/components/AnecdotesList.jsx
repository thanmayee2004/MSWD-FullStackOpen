import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const query = useSelector(state => state.query)
  const dispatch = useDispatch()

  const voteHandler = anecdote => {
    dispatch(addVote(anecdote))
    dispatch(setNotification(`You voted for${anecdote.content}`))
  }
  let sortedAnecdotes = [...anecdotes]

  const sortArray = (a, b) => {
    if (a.votes > b.votes) {
      return -1
    }
    if (a.votes < b.votes) {
      return 1
    } else {
      return 0
    }
  }
  sortedAnecdotes.sort(sortArray)

  let filteredArray = sortedAnecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(query)
  )

  return (
    <>
      {filteredArray.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteHandler(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdotesList
