import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './types/StackNavigation';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
