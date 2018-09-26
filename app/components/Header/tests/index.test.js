import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';
import Header from '../index';

describe('<Header />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(<AppBar />)).toEqual(true);
  });
});
