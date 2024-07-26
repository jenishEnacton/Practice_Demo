import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './types/StackNavigation';
import {ActivityIndicator} from 'react-native';

export default function AppNavigator() {
  const linking = {
    prefixes: ['https://test.jenish.im', 'jenish://'],
  };
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <StackNavigation />
    </NavigationContainer>
  );
}
