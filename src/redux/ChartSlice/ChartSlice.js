import { createSlice } from '@reduxjs/toolkit'

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: [],
    nameChart: ''
  },
  reducers: {
    setData(state, action) {
     state.data = action.payload
    },
    setName(state, action) {
        state.nameChart = action.payload
    }
  },
})

export const { setData, setName } = chartSlice.actions
export default chartSlice.reducer