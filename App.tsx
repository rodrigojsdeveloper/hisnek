import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/home';
import { ProductDetailsScreen } from './src/screens/productDetails';
import { Providers } from './src/context';

const Stack = createStackNavigator();

function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}

export default App;
