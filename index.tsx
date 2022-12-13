import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {store} from './src/store';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
