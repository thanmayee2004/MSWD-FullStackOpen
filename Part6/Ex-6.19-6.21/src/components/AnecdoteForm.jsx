import React from 'react'
import { connect } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const formHandler = async e => {
    e.preventDefault()

    const {
      target: { anecdote },
    } = e

    props.createAnecdote(anecdote.value)
    props.setNotification(`You created the anecdote :-> ${anecdote.value}`)
    anecdote.value = ''
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={formHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = { setNotification, createAnecdote }

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default connectedAnecdoteForm
