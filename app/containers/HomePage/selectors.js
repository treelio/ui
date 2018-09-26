import { createSelector } from 'reselect';

const selectData = () => state => state.get('home');

const makeSelectData = () =>
  createSelector(selectData(), dataState => dataState.toJS());

export default makeSelectData;
export { selectData };
