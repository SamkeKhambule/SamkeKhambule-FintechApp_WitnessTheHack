// FintechApp/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InventoryScreen from './src/screens/InventoryScreen';
import POSScreen from './src/screens/POSScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import firebase from './src/firebaseConfig';
import { Ionicons } from '@expo/vector-icons'; // For icons in navigation

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Create the tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inventory"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inventory') {
              iconName = 'cube-outline';
            } else if (route.name === 'POS') {
              iconName = 'cash-outline';
            } else if (route.name === 'Insights') {
              iconName = 'bar-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFAB00', // FNB Yellow
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inventory" component={InventoryScreen} />
        <Tab.Screen name="POS" component={POSScreen} />
        <Tab.Screen name="Insights" component={InsightsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
