import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import AlertScreen from './screens/AlertScreen';
import EmergencyKitScreen from './screens/EmergencyKitScreen';
import RouteScreen from './screens/RouteScreen';
import ContactsScreen from './screens/ContactsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AlertStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Alertas" component={AlertScreen} />
    </Stack.Navigator>
  );
}

function EmergencyKitStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Kit de Emergência" component={EmergencyKitScreen} />
    </Stack.Navigator>
  );
}

function RouteStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Rota" component={RouteScreen} />
    </Stack.Navigator>
  );
}

function ContactsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Contatos" component={ContactsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#FFF',
            height: 80,
            paddingBottom: 5,
            paddingTop: 8,
            borderTopWidth: 1,
            borderTopColor: '#E0E0E0',
          },
        }}
      >
        <Tab.Screen
          name="AlertasTab"
          component={AlertStack}
          options={{
            title: 'Alertas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="KitTab"
          component={EmergencyKitStack}
          options={{
            title: 'Kit',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="medical-bag" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RotaTab"
          component={RouteStack}
          options={{
            title: 'Rota',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="route" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ContatosTab"
          component={ContactsStack}
          options={{
            title: 'Contatos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}