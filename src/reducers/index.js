import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  user: {
    id: '',
    name: '',
    department_id: '',
    role_id: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      
    }
  }
})

export const { setToken, setUser } = authSlice.actions

export const store = configureStore({
  reducer: authSlice.reducer
});