import { configureStore } from '@reduxjs/toolkit'

import anecdotesReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import filterReducer from './filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    query: filterReducer,
  },
})
export default store
