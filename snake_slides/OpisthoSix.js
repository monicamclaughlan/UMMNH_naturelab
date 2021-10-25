import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_WIDTH } from '../assets/utils';

const venom = require('../images/fang_diagram.png');

export const OpisthoSix = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToOpFive = () => {
        navigation.navigate('OpisthoFive')
    }

    const goToOpSeven = () => {
        navigation.navigate('OpisthoSeven')
    }

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Opisthoglyphous: Venom Type and Functions</Text> 
        </View>
        <View style={styles.imageView}>
            <View>
                <Text style={styles.thankText}>There are debates whether secretions produced by the Duvernoy's gland are considered venom because they are so different from the venoms produced by vipers and elapids.  However, the effects caused by colubrid toxins seem to commonly mimic symptoms caused by hemotoxins, which are commonly used by vipers.</Text>
                <Text style={styles.thankText}>Most toxins produced by colubrids are not dangerous to humans and are often less potent than those produced by elapids and viperids.  Many snake experts suspect that these toxins are meant to further immobilize prey after it has already been caught, reducing the opportunity for prey to escape and/or retaliate against the snake.</Text>
            </View>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToOpFive}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToOpSeven}>
            <View style={styles.backView}>
                <Text style={styles.backText}>Next Page</Text>
                <AntDesign name="caretright" size={30} color="black" />   
            </View>
            </Pressable>
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
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 30,
    }, 
    titleText: {
        fontSize: 44,
        textAlign: 'left',
        fontFamily: 'Arial',
        padding: 20,
        color: '#F95724',
    }, 
    imageView: {
        // flex: 1,
        marginTop: -40,
        flexDirection: 'row',
        // width: DEVICE_WIDTH * 0.9,
    },
    thankText: {
        fontSize: 30, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666', 
        marginBottom: 10
    },
    underline: {
        color: 'blue', 
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width: 500, 
        height: 350, 
        alignSelf: 'center', 
        position: 'relative', 
        marginLeft: 20
    },
    imageText: {
        fontStyle: 'italic', 
        color: 'white', 
        position: 'absolute', 
        top: 390, 
        right: 370
    },
    authorView: {
        flexDirection: 'row', 
        flex: 1, 
        justifyContent: 'space-between',
        alignItems: 'flex-end', 
        marginBottom: 30, 
        marginLeft: 20, 
        marginRight: 20,
    },
    backView: {
        backgroundColor: '#C9DAF8', 
        padding: 15, 
        borderWidth: 1, 
        flexDirection: 'row'
    },
    backText: {
        fontSize: 20, 
        alignSelf: 'center'
    },
    homeView: {
        backgroundColor: '#C9DAF8', 
        // marginLeft: 415, 
        padding: 15, 
        borderWidth: 1,
    },
    homeText: {
        fontSize: 20
    },
})