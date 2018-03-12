/* eslint-disable */
import * as types from '../actionTypes';

export const DataHasErrored = bool => {
    return {
        type: types.DATA_HAS_ERRORED,
        hasErrored: bool,
    };
}

export const DataIsLoading = bool => {
    return {
        type: types.DATA_IS_LOADING,
        isLoading: bool,
    };
}

export const FetchDataSuccess = data => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        data,
    }
}

export const itemsFetchData = url => dispatch => {
        dispatch(DataIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then( data => {
                dispatch(FetchDataSuccess(data));
                dispatch(DataIsLoading(false));
            })
	};