import { createSelector } from 'reselect';

const selectData = () => state => state.get('donations');

const makeSelectData = () =>
  createSelector(selectData(), dataState => dataState.toJS());

export default makeSelectData;
export { selectData };
