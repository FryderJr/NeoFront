import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit'

const authState = {
  token: '',
  showAuth: false,
  user: {
    username: '',
    password: ''
  }
}

const dataState = {
  pupils: [],
  logs: []
}

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setShowAuth: (state, action) => {
      state.showAuth = action.payload
    }
  }
})

const dataSlice = createSlice({
  name: 'data',
  initialState: dataState,
  reducers: {
    setPupils: (state, action) => {
      state.pupils = action.payload
    },
    setLogs: (state, action) => {
      state.logs = action.payload
    }
  }
})

const reducer = combineReducers({
  auth: authSlice.reducer,
  data: dataSlice.reducer
})

export const { setToken, setUser, setShowAuth } = authSlice.actions
export const { setPupils, setLogs } = dataSlice.actions

export const store = configureStore({
  reducer: reducer
})