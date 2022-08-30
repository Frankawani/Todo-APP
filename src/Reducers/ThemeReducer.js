const INITIAL_STATE = {
    isLight: true
}

function ThemeReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE' : {
            return {
                ...state,
                isLight : !state.isLight
            }
        }
        default: return state
    }
}

export default ThemeReducer;