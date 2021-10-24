import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_WIDTH } from '../assets/utils';

const venom = require('../images/vine.jpg');

export const OpisthoFive = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToOpFour = () => {
        navigation.navigate('OpisthoFour')
    }

    const goToOpSix = () => { 
        navigation.navigate('OpisthoSix')
    }

    

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Opisthoglyphous: Venom Delivery</Text> 
        </View>
        <View style={styles.imageView}>
            <View style={{width: '60%'}}>
                <Text style={styles.thankText}>Chewing allows for secretions to be released as the jaw muscles essentially act as a means to pressurize the gland.  Imagine how saliva is released in our own mouths.  As we chew, more and more saliva is released to help break down the food.</Text>
                <Text style={styles.thankText}>This is similar to how colubrid snakes secretes and injects its venom into prey.  This means in order to inject food with toxic secretions, the snake must have already captured the prey. </Text>
            </View>
            <View style={{width: '50%'}}>
                <Image style={styles.image}source={venom} />
                <Text style={{textAlign: 'right', fontStyle: 'italic'}}>Vine snake</Text>
            </View>
        </View>
        <View style={styles.authorView}>
        <Pressable onPress={goToOpFour}>
            <View style={styles.backView}>
                <AntDesign name="caretleft" size={30} color="black" />  
                <Text style={styles.backText}>Go Back</Text> 
            </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToOpSix}>
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
        width: DEVICE_WIDTH * 0.9,
    },
    thankText: {
        fontSize: 28, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666', 
        marginBottom: 20,
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