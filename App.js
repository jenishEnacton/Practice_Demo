import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/reduxScreens/Redux/store';
import BootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
