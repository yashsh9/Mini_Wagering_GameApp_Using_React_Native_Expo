import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Pedometer from './app/screens/Pedometer';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();



function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Challenge Time' component={List} />
      <InsideStack.Screen name='Details' component={Details} />
      <Stack.Screen name="Pedometer" component={Pedometer} />
    </InsideStack.Navigator>
  );


}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}

      </Stack.Navigator>
    </NavigationContainer>

  );
}
