import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { TurtleHome } from '../turtle_slides/TurtleHome';
import { TurtleOne } from '../turtle_slides/TurtleOne';


const Stack = createStackNavigator()

const TurtleStack = () => {
    let [fontsLoaded] = useFonts({
        'Eurostile': require('../assets/fonts/EurostileLTStd-Bold.otf'),
        'AG': require('../assets/fonts/AGaramondPro-Regular.otf'),
        'Overlock': require('../assets/fonts/Overlock-Regular.ttf'), 
        'OverlockBold': require('../assets/fonts/Overlock-BoldItalic.ttf'), 
        'Jim': require('../assets/fonts/JimNightshade-Regular.ttf')
      });

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='TurtleHome' component={TurtleHome}/>
            <Stack.Screen name='TurtleOne' component={TurtleOne}/>
        </Stack.Navigator>

    );

}

export default TurtleStack;