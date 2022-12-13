import * as React from 'react';
import {View} from 'react-native';
import {SuspenseView} from '..';
import {fireEvent, render} from 'react-native-testing-library';

describe('Suspense view component', () => {
  it('Loading in Progress, Should Render Activity Indicator', () => {
    const tree = render(<SuspenseView isLoading={true} list={[]} />);

    expect(tree.findByTestId('SuspenseViewActivityIndicator')).toBeDefined();
  });

  it('Loading Done, Should Render Child', () => {
    const tree = render(
      <SuspenseView isLoading={true} list={[]}>
        <View />
      </SuspenseView>,
    );

    expect(tree).toMatchSnapshot();
  });
});
