import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { Phytosaur } from '../slides/Phytosaur';
import { Story } from '../slides/Story';
import {Help} from '../slides/Help';
import {HelpTwo} from '../slides/HelpTwo';
import {PhytosaurTwo} from '../slides/PhytosaurTwo';
import { PresentDay } from '../slides/PresentDay';
import {SkullShape} from '../slides/SkullShape';
import {Orbit} from '../slides/Orbit';
import { Dentition } from '../slides/Dentition';
import { Hypothesis } from '../slides/Hypothesis';
import { Agree } from '../slides/Agree';

const Stack = createStackNavigator()

const PhytosaurStack = () => { 

    let [fontsLoaded] = useFonts({
        'Eurostile': require('../assets/fonts/EurostileLTStd-Bold.otf'),
        'AG': require('../assets/fonts/AGaramondPro-Regular.otf'),
        'Overlock': require('../assets/fonts/Overlock-Regular.ttf'), 
        'OverlockBold': require('../assets/fonts/Overlock-BoldItalic.ttf')
      });

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Phytosaur'} component={Phytosaur}/>
            <Stack.Screen name={'Story'} component={Story}/>
            <Stack.Screen name={'Help'} component={Help}/>
            <Stack.Screen name={'HelpTwo'} component={HelpTwo}/>
            <Stack.Screen name={'PhytosaurTwo'} component={PhytosaurTwo}/>
            <Stack.Screen name={'PresentDay'} component={PresentDay} />
            <Stack.Screen name={'SkullShape'} component={SkullShape} />
            <Stack.Screen name={'Orbit'} component={Orbit} />
            <Stack.Screen name={'Dentition'} component={Dentition} />
            <Stack.Screen name={'Hypothesis'} component={Hypothesis} />
            <Stack.Screen name={'Agree'} component={Agree} />
        </Stack.Navigator>
    )
}

export default PhytosaurStack;