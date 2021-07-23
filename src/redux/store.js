import { configureStore } from '@reduxjs/toolkit'
import pomodoroReducer from './ducker/pomodoro'

export const store = configureStore({
    reducer: pomodoroReducer,
})