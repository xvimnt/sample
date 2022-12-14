import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    confirmUser: (state) => {
        state.userInfo.email_verified = true
    },
    loadingUser: (state) => {
        state.loading = true
    },
    doneLoadingUser: (state) => {
        state.loading = false
    },
    loginUser: (state, action) => {
        state.userInfo = action.payload
    },
    logoutUser: (state) => {
        state.userInfo = {}
    },
  },
  extraReducers: {},
})

export default userSlice