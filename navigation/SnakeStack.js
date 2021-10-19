import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';

const Stack = createStackNavigator()

const SnakeStack = () => {
    let [fontsLoaded] = useFonts({
        'Eurostile': require('../assets/fonts/EurostileLTStd-Bold.otf'),
        'AG': require('../assets/fonts/AGaramondPro-Regular.otf'),
        'Overlock': require('../assets/fonts/Overlock-Regular.ttf'), 
        'OverlockBold': require('../assets/fonts/Overlock-BoldItalic.ttf')
      });

      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        </Stack.Navigator>
    )
}

export default SnakeStack;