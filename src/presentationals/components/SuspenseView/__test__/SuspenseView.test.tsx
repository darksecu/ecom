import * as React from 'react';
import {View} from 'react-native';
import {SuspenseView} from '..';
import renderer from 'react-test-renderer';
import {render} from 'react-native-testing-library';

describe('Suspense view component', () => {
  it('SnapShot', async () => {
    const expected = renderer
      .create(<SuspenseView isLoading={true} list={[]} />)
      .toJSON();
    expect(expected).toMatchSnapshot();
  });

  it('Loading in Progress, Should Render Activity Indicator', async () => {
    const {findByTestId} = render(<SuspenseView isLoading={true} list={[]} />);
    const SuspenseViewActivityIndicator = await findByTestId(
      'SuspenseViewActivityIndicator',
    );
    expect(SuspenseViewActivityIndicator).toBeDefined();
  });

  it('Loading in Done', async () => {
    const {findByTestId} = render(
      <SuspenseView isLoading={false} list={[]}>
        <View testID="DoneLoading" />
      </SuspenseView>,
    );
    const DoneLoading = await findByTestId('DoneLoading');
    expect(DoneLoading).toBeDefined();
  });
});
