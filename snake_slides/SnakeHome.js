import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';

const rattlesnake = require('../images/rattlesnake.jpeg');
const kingcobra = require('../images/king_cobra.jpeg')
const grass = require('../images/grass_snake.jpeg')

export const SnakeHome = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()
    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Click on one of the pictures below to learn more about a venomous fang morph!</Text> 
        </View>
        <View>
            <Image source={ rattlesnake } />
            <Image source={kingcobra} />
            <Image source={grass} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Created by: Alan Ching, Julia McCloud, Sarah Milliken, Carrie Veit; EEB 450</Text>
            <Text>Acknowledgements</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fef2cc',
    },
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    titleText: {
        fontSize: 27,
        textAlign: 'center',
        fontFamily: 'Arial',
        paddingBottom: 20,
        color: '#F95724',
    }, 
})