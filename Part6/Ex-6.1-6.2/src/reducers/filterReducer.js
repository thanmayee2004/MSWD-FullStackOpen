import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterState(state, action) {
      const query = action.payload
      return query
    },
  },
})

export const { filterState } = filterSlice.actions

export default filterSlice.reducer
