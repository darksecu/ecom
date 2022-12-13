import * as React from 'react';
import {View} from 'react-native';
import {PLPTemplate} from '..';
import renderer from 'react-test-renderer';
import {fireEvent, render} from 'react-native-testing-library';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({})),
  };
});

describe('PLP Template component', () => {
  it('SnapShot', () => {
    const expected = renderer
      .create(<PLPTemplate isLoading={true} list={[]} />)
      .toJSON();
    expect(expected).toMatchSnapshot();
  });

  it('Check if flatlist is rendered', async () => {
    const {findByTestId} = render(<PLPTemplate isLoading={false} list={[]} />);
    const expected = await findByTestId('PLPFlatList');
    expect(expected).toBeDefined();
  });
});
