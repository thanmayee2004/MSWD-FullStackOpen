import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    displayContent(state, action) {
      return action.payload
    },
    hideContent(state, action) {
      return null
    },
  },
})

export const { displayContent, hideContent } = notificationSlice.actions

export const setNotification = (message, time = 5) => {
  return async dispatch => {
    let myTimeout
    if (myTimeout) {
      clearTimeout(myTimeout)
    }
    dispatch(displayContent(message))

    myTimeout = setTimeout(() => {
      dispatch(hideContent())
    }, time * 1000)
  }
}

export default notificationSlice.reducer
