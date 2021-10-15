import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TimerContext } from '../context/screensaver';

const skull = require('../images/skull_bullet.png')

export const Hypothesis = () => {
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }}>
        <View>
            <Text style={styles.heading}>Time to formulate your own hypothesis!</Text>
            <Text style={styles.subtitle}>Use the following questions to make your hypothesis about the Phytosaur's ecomorphology</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>Which <Text style={styles.green}>modern species</Text> does the <Text style={styles.green}>Phytosaur</Text> resemble?</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>What kind of <Text style={styles.green}>habitat</Text> did it have?</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>What did it <Text style={styles.green}>eat</Text>?</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>What part of the <Text style={styles.green}>anatomy</Text> did you use to make your hypothesis?</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('Agree')}>
                <AntDesign style={styles.arrow}name="caretright" size={70} color="black" />
                </Pressable>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#668096',
    },
    heading: {
        fontSize: 44, 
        fontFamily: 'Overlock', 
        paddingTop: 50, 
        paddingLeft: 50, 
        paddingBottom: 10, 
        color: '#4F330B',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Overlock',  
        paddingLeft: 50, 
        paddingBottom: 50, 
        color: '#4F330B',
    },
    green: { 
        color: '#404F24',
    },
    skull: {
        width: 60, 
        height: 30,
    },
    text: {
        fontSize: 28, 
        fontFamily: 'Overlock',
        color: '#4F330B',
    },
    arrowContainer: {
        width: 200, 
        height: 100, 
        backgroundColor: '#D57500', 
        borderWidth: 1, 
        alignSelf: 'flex-end', 
    },
    arrow: {
        textAlign: 'center', 
        paddingTop: 20,
    },
})