import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import Navigation from './AppNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
  const [isAppReady, setAppReady] = React.useState(false);

  React.useEffect(() => {
    // Simulate some initialization or data loading
    setTimeout(() => {
      setAppReady(true);
    }, 3000); // Set an appropriate time

    // You can add any other initialization logic here
  }, []);
  return (
    <NavigationContainer>
    {isAppReady ? <Navigation /> : <SplashScreen />}
  </NavigationContainer>
  );
}

export default AppNavigator;
