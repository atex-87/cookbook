/* eslint-disable */
import * as types from '../actionTypes';

export const goTooTab = tab => {
    return {
        type: types.NAVIGATE_TO_LIST,
        tab,
    };
}
export const setStateData = data => {
    return {
        type: 'SET DATA',
        data,
    };
}
export const changeCurrentTab = (tab, data) => (dispatch, getState) => {
	debugger;
    const state = getState();
    const setData ={
        stateName: state.navigation,
        stateValue : data,
	}
	debugger;
	dispatch(setStateData(setData));
    dispatch(goTooTab(tab));
};
