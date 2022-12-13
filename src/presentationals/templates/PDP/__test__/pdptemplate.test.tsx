import * as React from 'react';
import {View} from 'react-native';
import {PDPTemplate} from '..';
import renderer from 'react-test-renderer';
import {fireEvent, render} from 'react-native-testing-library';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const dummyData = {
  id: 1,
  colour: 'Black',
  name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
  price: 10,
  img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
};

describe('PDP Template component', () => {
  it('SnapShot', async () => {
    const expected = renderer.create(<PDPTemplate {...dummyData} />).toJSON();
    expect(expected).toMatchSnapshot();
  });

  it('Remove button is disabled by default', async () => {
    const {findByTestId} = render(<PDPTemplate {...dummyData} />);
    const removeButton = await findByTestId('removeButton');
    expect(removeButton.props.accessibilityState.disabled).toBeTruthy();
  });

  it('Quantity is 0 by default', async () => {
    const {findByTestId} = render(<PDPTemplate {...dummyData} />);
    const Quantity = await findByTestId('quanityDisplay');
    expect(Quantity.children).toEqual(['0']);
  });

  it('Price Label Validation', async () => {
    const {findByTestId} = render(<PDPTemplate {...dummyData} />);
    const data = await findByTestId('PDPPrice');
    expect(data.children).toEqual([`USD `, String(dummyData.price)]);
  });

  it('Name Label Validation', async () => {
    const {findByTestId} = render(<PDPTemplate {...dummyData} />);
    const data = await findByTestId('PDPName');
    expect(data.children).toEqual([`${dummyData.name}`]);
  });
});
