const SET_POMODORO_DURATION = 'SET_POMODORO_DURATION';
const SET_SHORT_DURATION = 'SET_SHORT_DURATION';
const SET_LONG_DURATION = 'SET_LONG_DURATION';

export const POMODORO_TIMER = 'POMODORO_TIMER';
export const SHORT_TIMER = 'SHORT_TIMER';
export const LONG_TIMER = 'LONG_TIMER';
export const SET_PLAYING = 'SET_PLAYING';
export const RESET = 'RESET';
export const INCREMENT_STEP = 'INCREMENT_STEP';
export const RESET_STEP = 'RESET_STEP';

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

export const setPlaying = (isPlaying) => {
    return {
        type: SET_PLAYING,
        payload: isPlaying
    }
}

export const setActiveTimer = (activeTimer, restart) => {
    return (dispatch) => {
        console.log(activeTimer);
        dispatch(shortTimer(activeTimer));
        dispatch(setPlaying(false));
        dispatch(reset(restart));
    }
}

const reset = (restart) => {
    return {
        type: RESET,
        payload: restart
    }
}

export const incrementStep = () => {
    return {
        type: INCREMENT_STEP
    }
}
export const resetStep = () => {
    return {
        type: RESET_STEP
    }
}

export const resetTimer = (restart) => {
    return (dispatch) => {
        dispatch(setPlaying(false));
        dispatch(reset(restart));
    }
}


const initialState = {
    activeTimer: 'pomodoro',
    pomodoroDuration: .1,
    shortDuration: .1,
    longDuration: .1,
    isPlaying: false,
    reset: false,
    currentStep: 1,
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
        case SET_PLAYING:
            return {
                ...state,
                isPlaying: action.payload
            }
        case RESET:
            return {
                ...state,
                reset: action.payload
            }
        case INCREMENT_STEP: {
            return {
                ...state,
                currentStep: state.currentStep + 1,
            }
        }
        case RESET_STEP: {
            return {
                ...state,
                currentStep: 1,
            }
        }

        default:
            return state;
    }
}

export default pomodoroReducer;