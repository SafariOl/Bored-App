import {configureStore,} from '@reduxjs/toolkit'
import BoredReducer from './components/BoredReducer'


const store = configureStore({
    reducer: {
        card: BoredReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;