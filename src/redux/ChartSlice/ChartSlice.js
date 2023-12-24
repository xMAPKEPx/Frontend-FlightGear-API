import { createSlice } from '@reduxjs/toolkit'

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: [],
    isReloading: 0
  },
  reducers: {
    setData(state, action) {
      state.data.push(action.payload);
    },
    delData(state, action) {
      state.data.splice(action.payload, 1);
    },
    setReload(state, action) {
      state.isReloading=action.payload;
    }
  },
})

export const { setData, delData, setReload } = chartSlice.actions
export default chartSlice.reducer