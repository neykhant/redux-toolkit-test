import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'
import postReducer from '../features/posts/postSlice'

// const configureStore = require('@reduxjs/toolkit').configureStore
// const cakeReducer = require('../features/cake/cakeSlice')
// const icecreamReducer = require('../features/icecream/icecreamSlice')
// const userReducer = require('../features/user/userSlice')

// const  reduxLogger = require('redux-logger')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
        post: postReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export default store