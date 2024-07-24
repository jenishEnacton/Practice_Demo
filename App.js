import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/reduxScreens/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
