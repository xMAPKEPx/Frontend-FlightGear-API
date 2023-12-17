import { createSlice } from '@reduxjs/toolkit'

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: []
  },
  reducers: {
    setData(state, action) {
      state.data.push(action.payload);
    },
    delData(state, action) {
      state.data.splice(action.payload, 1);
    },
  },
})

export const { setData, delData } = chartSlice.actions
export default chartSlice.reducer