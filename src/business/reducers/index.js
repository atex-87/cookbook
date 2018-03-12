import { combineReducers } from 'redux';
import { dataItems } from './uidata';
import { navigation, setdata } from './navigation';

const reducers = combineReducers({
    dataItems,
    navigation,
    setdata,
});
export default reducers;
