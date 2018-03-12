/* eslint-disable */
export const DATA_HAS_ERRORED = 'DATA HAS ERRORED';

export const DATA_IS_LOADING = 'DATA IS LOADING';

export const FETCH_DATA_SUCCESS = 'FETCH DATA SUCCESS';

const initialState = {
	loading: true,
	hasErrored: false,
	data: null,
  };
export function dataItems(state = initialState, action) {
    switch (action.type) {

        case DATA_HAS_ERRORED:
            return Object.assign({}, state, { hasErrored: action.hasErrored });
            break;

        case DATA_IS_LOADING:
            return Object.assign({}, state, { loading: action.isLoading });
            break;

        case FETCH_DATA_SUCCESS:
            return Object.assign({}, state, { data: action.data });;
            break;

        default:
            return state;
            break;
    }
}