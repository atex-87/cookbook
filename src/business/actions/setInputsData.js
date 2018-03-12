
export const setInputsData = data => (dispatch, getState) => {
    const state = getState();
    console.log(state.filter(self => data.stateName !== self.stateName));
};
//    newState = Object.assign({}, state.form, {
//        visible: !state.form.visible,
//        data: data || null
//   });

