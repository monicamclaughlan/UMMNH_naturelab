import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useFonts} from 'expo-font';
import {SnakeHome} from '../snake_slides/SnakeHome';
import {Acknowledgements} from '../snake_slides/Acknowledgements';
import {SoleOne} from '../snake_slides/SoleOne';
import {SoleThree} from '../snake_slides/SoleThree';
import {SoleTwo} from '../snake_slides/SoleTwo';
import { SoleFour } from '../snake_slides/SoleFour';
import { SoleFive } from '../snake_slides/SoleFive';
import { SoleSix } from '../snake_slides/SoleSix';
import { SoleSeven } from '../snake_slides/SoleSeven';
import { SoleEight } from '../snake_slides/SoleEight';
import { SoleNine } from '../snake_slides/SoleNine';
import { ProtOne } from '../snake_slides/ProtOne';
import { ProtTwo } from '../snake_slides/ProtTwo';
import { ProtThree } from '../snake_slides/ProtThree';
import { ProtFour } from '../snake_slides/ProtFour';
import { ProtFive } from '../snake_slides/ProtFive';
import { ProtSix } from '../snake_slides/ProtSix';
import { ProtSeven } from '../snake_slides/ProtSeven';
import { OpisthoOne } from '../snake_slides/OpisthoOne';
import { OpisthoTwo } from '../snake_slides/OpisthoTwo';
import { OpisthoThree } from '../snake_slides/OpisthoThree';
import { OpisthoFour } from '../snake_slides/OpisthoFour';
import { OpisthoFive } from '../snake_slides/OpisthoFive';
import { OpisthoSix } from '../snake_slides/OpisthoSix';
import { OpisthoSeven } from '../snake_slides/OpisthoSeven';
import { OpisthoEight } from '../snake_slides/OpisthoEight';
import { OpisthoNine } from '../snake_slides/OpisthoNine';

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
            <Stack.Screen name='SoleFive' component={SoleFive} />
            <Stack.Screen name='SoleSix' component={SoleSix} />
            <Stack.Screen name='SoleSeven' component={SoleSeven} />
            <Stack.Screen name='SoleEight' component={SoleEight} />
            <Stack.Screen name='SoleNine' component={SoleNine} />
            <Stack.Screen name='ProtOne' component={ProtOne} />
            <Stack.Screen name='ProtTwo' component={ProtTwo} />
            <Stack.Screen name='ProtThree' component={ProtThree} />
            <Stack.Screen name='ProtFour' component={ProtFour} />
            <Stack.Screen name='ProtFive' component={ProtFive} />
            <Stack.Screen name='ProtSix' component={ProtSix} />
            <Stack.Screen name='ProtSeven' component={ProtSeven} />
            <Stack.Screen name='OpisthoOne' component={OpisthoOne} />
            <Stack.Screen name='OpisthoTwo' component={OpisthoTwo} />
            <Stack.Screen name='OpisthoThree' component={OpisthoThree} />
            <Stack.Screen name='OpisthoFour' component={OpisthoFour} />
            <Stack.Screen name='OpisthoFive' component={OpisthoFive} />
            <Stack.Screen name='OpisthoSix' component={OpisthoSix} />
            <Stack.Screen name='OpisthoSeven' component={OpisthoSeven} />
            <Stack.Screen name='OpisthoEight' component={OpisthoEight} />
            <Stack.Screen name='OpisthoNine' component={OpisthoNine} />
        </Stack.Navigator>
    )
}

export default SnakeStack;