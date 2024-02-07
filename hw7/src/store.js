import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './components/postsSlice.jsx'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
