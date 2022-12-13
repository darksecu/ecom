import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
