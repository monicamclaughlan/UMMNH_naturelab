import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TimerContext } from '../context/screensaver';

const skull = require('../images/skull_bullet.png')
const phytosaur = require('../images/3DPhytosaur.png')

export const PhytosaurTwo = () => {
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
            <Text style={styles.heading}>Phytosaur</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>Here is a fossil that we have identified as a <Text style={styles.green}>Phytosaur</Text>!</Text>
        </View>
        <View style={{width: 550, height: 250, alignSelf: 'center'}}>
            <Image source={phytosaur} style={{height: 250, width: 450}} />
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>Phytosaurs were <Text style={styles.green}>ancient reptiles</Text> from the Late Triassic.</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>It looks a lot like a <Text style={styles.green}>crocodilian</Text>, right? Let's compare it to two present day animals and see if we can guess its <Text style={styles.green}>ecomorphology</Text>!</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('PresentDay')}>
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