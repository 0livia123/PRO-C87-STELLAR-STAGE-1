import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import 'react-native-gesture-handler' ;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;

import HomeScreen from " ./screens/Home";
import StartMapScreen from " . /screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from " . /screens/SpaceCraft";


/*export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}*/

const Stack = createStackNavigator () ;

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{
       headerShown: false
     }}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="StarMap" component={StartMapScreen} />
       <Stack.Screen name="DailyPic" component={DailyPicScreen} />
       <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
       </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

