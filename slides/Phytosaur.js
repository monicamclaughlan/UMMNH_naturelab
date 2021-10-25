import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { TimerContext } from '../context/screensaver';

export const PhytosaurOne = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()
    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.colorColumn}>
            <View style={styles.green}></View>
            <View style={styles.brown}></View>
        </View>
        <View style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>How do scientists know how extinct animals lived?</Text>
                <Text style={styles.subtitleText}>A Presentation By:</Text>
                <Text style={styles.subtitleText}>Vanessa Kiefer, Megan Kujawa, Jacob Orhan, and Taylor Walker</Text>
            </View>
            <View style={styles.iconContainer}>
                <Pressable onPress={() => navigation.navigate('Story')}>
                    <Text style={{textAlign: 'center', fontFamily: 'AG'}}>(Next Slide)</Text>
                    <AntDesign style={{textAlign: 'center'}}name="caretright" size={70} color="black" />
                </Pressable>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    colorColumn: {
        flexDirection: 'column', 
        flex: 1,
    },
    green: {
        backgroundColor: '#404F24', 
        width: '100%', 
        height: '70%',
    },
    brown: {
        backgroundColor: '#4F330B', 
        width: '100%', 
        height: '30%'
    },
    background: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#668096',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    textContainer: {
        paddingTop: 210, 
        width: '90%',
    },
    titleText: {
        fontSize: 80,
        textAlign: 'center',
        fontFamily: 'AG',
        paddingBottom: 20,
        color: '#4F330B',
    }, 
    subtitleText: {
        fontSize: 30,
        fontFamily: 'AG',
        textAlign: 'center',
        paddingBottom: 40,
        color: '#4F330B',
    },
    iconContainer: {
        backgroundColor: '#D57500', 
        alignSelf:'flex-end', 
        width: 200, 
        height: 120,
        borderWidth: 1,
    },
})