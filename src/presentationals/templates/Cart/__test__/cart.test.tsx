import * as React from 'react';
import {View} from 'react-native';
import {CartTemplate} from '..';
import renderer from 'react-test-renderer';
import {fireEvent, render} from 'react-native-testing-library';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
  useState: () => mockDispatch,
}));

describe('PDP Template component', () => {
  it('SnapShot', () => {
    const expected = renderer.create(<CartTemplate />).toJSON();
    expect(expected).toMatchSnapshot();
  });

  it('Check is flatlist exist', async () => {
    const {findByTestId} = render(<CartTemplate />);
    const expected = await findByTestId('CartList');
    expect(expected).toBeDefined();
  });

  //   it('Quantity is 0 by default', async () => {
  //     const {findByTestId} = render(<PDPTemplate {...dummyData} />);
  //     const Quantity = await findByTestId('quanityDisplay');
  //     expect(Quantity.children).toEqual(['0']);
  //   });

  //   it('Price Label Validation', async () => {
  //     const {findByTestId} = render(<PDPTemplate {...dummyData} />);
  //     const data = await findByTestId('PDPPrice');
  //     expect(data.children).toEqual([`USD `, String(dummyData.price)]);
  //   });

  //   it('Name Label Validation', async () => {
  //     const {findByTestId} = render(<PDPTemplate {...dummyData} />);
  //     const data = await findByTestId('PDPName');
  //     expect(data.children).toEqual([`${dummyData.name}`]);
  //   });
});
