import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';

const Stack = createStackNavigator()

const TurtleStack = () => {
    let [fontsLoaded] = useFonts({
        'Eurostile': require('../assets/fonts/EurostileLTStd-Bold.otf'),
        'AG': require('../assets/fonts/AGaramondPro-Regular.otf'),
        'Overlock': require('../assets/fonts/Overlock-Regular.ttf'), 
        'OverlockBold': require('../assets/fonts/Overlock-BoldItalic.ttf')
      });

    return (
        <Stack.Navigator>
            
        </Stack.Navigator>

    );

}

export default TurtleStack;