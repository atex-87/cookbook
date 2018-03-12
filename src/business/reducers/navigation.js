/* eslint-disable */
export const NAVIGATE_TO_LIST = 'NAVIGATE TO LIST';
export const SET_DATA = 'SET DATA';

export const navigation = (state = 'description', action) => {
    switch (action.type) {
        case NAVIGATE_TO_LIST:
            return action.tab;
            break;
        default:
            return state;
            break;
    }
}

export const setdata = (state = [], action) => {
	debugger;
    switch (action.type) {
		case SET_DATA:
        let newState;
        const reset = state.filter((s)=>s.stateName == action.data.stateName);
        if (reset.length>0)
            newState = state.map((s)=>s.stateName == action.data.stateName ? action.data : s);
        else
            newState = state.concat(action.data);
            return newState;
            break;
        default:
            return state;
            break;
    }
}
