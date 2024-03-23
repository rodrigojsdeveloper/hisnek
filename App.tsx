import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/home';
import { ProductDetailsScreen } from './src/screens/productDetails';
import { Providers } from './src/context';
import { CartScreen } from './src/screens/cart';

const Stack = createStackNavigator();

function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}

export default App;
