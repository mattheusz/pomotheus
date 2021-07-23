/*
const SET_POMODORO_DURATION = 'SET_POMODORO_DURATION';
const SET_SHORT_DURATION = 'SET_SHORT_DURATION';
const SET_LONG_DURATION = 'SET_LONG_DURATION';
*/
export const POMODORO_TIMER = 'POMODORO_TIMER';
export const SHORT_TIMER = 'SHORT_TIMER';
export const LONG_TIMER = 'LONG_TIMER';
const SET_STEP = 'SET_STEP';

/*
export const setPomodoroDuration = (duration) => {
    return {
        type: SET_POMODORO_DURATION,
        payload: duration
    }
}
export const setShortDuration = (duration) => {
    return {
        type: SET_SHORT_DURATION,
        payload: duration
    }
}
export const setLongDuration = (duration) => {
    return {
        type: SET_LONG_DURATION,
        payload: duration
    }
}
*/

const pomodoroTimer = (short) => {
    return {
        type: POMODORO_TIMER,
        payload: short
    }
}
const shortTimer = (short) => {
    return {
        type: SHORT_TIMER,
        payload: short
    }
}

export const setActiveTimer = (activeTimer) => {
    return (dispatch) => {
        console.log(activeTimer)
        dispatch(shortTimer(activeTimer))

    }
}

const initialState = {
    activeTimer: 'pomodoro'
}

const pomodoroReducer = (state = initialState, action) => {
    console.log('action payload', action.payload);
    switch (action.type) {

        case POMODORO_TIMER:
            return {
                ...state,
                activeTimer: action.payload
            }
        case SHORT_TIMER:
            return {
                ...state,
                activeTimer: action.payload
            }
        case LONG_TIMER:
            return {
                ...state,
                activeTimer: action.payload
            }

        default:
            return state;
    }
}

export default pomodoroReducer;