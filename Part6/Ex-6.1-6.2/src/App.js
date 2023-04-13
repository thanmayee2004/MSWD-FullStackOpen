import { useEffect } from 'react'

import { initializeAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </>
  )
}

export default App
