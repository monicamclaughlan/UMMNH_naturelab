import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useFonts} from 'expo-font';
import {SnakeHome} from '../snake_slides/SnakeHome';
import {Acknowledgements} from '../snake_slides/Acknowledgements';
import {SoleOne} from '../snake_slides/SoleOne';
import {SoleThree} from '../snake_slides/SoleThree';
import {SoleTwo} from '../snake_slides/SoleTwo';
import { SoleFour } from '../snake_slides/SoleFour';

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
            <Stack.Screen name='SnakeHome' component={SnakeHome} />
            <Stack.Screen name='Acknowledgements' component={Acknowledgements} />
            <Stack.Screen name='SoleOne' component={SoleOne} />
            <Stack.Screen name='SoleThree' component={SoleThree} />
            <Stack.Screen name='SoleTwo' component={SoleTwo} />
            <Stack.Screen name='SoleFour' component={SoleFour} />
        </Stack.Navigator>
    )
}

export default SnakeStack;