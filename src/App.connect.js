import { connect } from 'react-redux';
import App from './App';
import { itemsFetchData } from './business/actions/getUiData';
import { changeCurrentTab } from './business/actions/tabsNavigation';
import { setInputsData } from './business/actions/setInputsData';

export default connect(
    state => ({
        getData: state.dataItems,
        activeTab: state.navigation,
        saveData: state.setdata,
    }),
    dispatch => ({
        fetchData: url => dispatch(itemsFetchData(url)),
        changeCurrentTab: (tab, data) => dispatch(changeCurrentTab(tab, data)),
        setInputsData: data => dispatch(setInputsData(data)),
    }),
)(App);
