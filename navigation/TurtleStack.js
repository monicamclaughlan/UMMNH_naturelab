import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { TurtleHome } from '../turtle_slides/TurtleHome';
import { TurtleOne } from '../turtle_slides/TurtleOne';
import { TurtleTwo } from '../turtle_slides/TurtleTwo';
import { TurtleThree } from '../turtle_slides/TurtleThree';
import { TurtleFour } from '../turtle_slides/TurtleFour';
import { TurtleFive } from '../turtle_slides/TurtleFive';


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
            <Stack.Screen name='TurtleTwo' component={TurtleTwo}/>
            <Stack.Screen name='TurtleThree' component={TurtleThree}/>
            <Stack.Screen name='TurtleFour' component={TurtleFour}/>
            <Stack.Screen name='TurtleFive' component={TurtleFive}/>
        </Stack.Navigator>

    );

}

export default TurtleStack;