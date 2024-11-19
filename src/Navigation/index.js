
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/Home';
import MainScreen from '../Screens/MainScreen';
import AddExpense from '../Screens/AddExpense';
import AddIncome from '../Screens/AddIncome';
import Dashboard from '../Screens/Dashboard';
import Transaction from '../Screens/Transaction';

const Stack= createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
          />
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
          /> 
       <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
          />
           <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{ headerShown: false }}
          />
           <Stack.Screen
          name="AddIncome"
          component={AddIncome}
          options={{ headerShown: false }}
           /> 
           <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
          />
           <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{ headerShown: false }}
          />
       
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;