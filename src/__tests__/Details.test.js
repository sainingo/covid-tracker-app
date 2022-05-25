import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Home/Home';

describe('Testing Home component', () => {});
it('should render correctly Details component', () => {
  const tree = render(
    <Provider store={store}>
      <Details />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
