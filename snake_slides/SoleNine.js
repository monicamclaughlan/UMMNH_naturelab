import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../assets/utils';

const needle = require('../images/bushmaster.jpg');

export const SoleNine = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToSoleEight = () => {
        navigation.navigate('SoleEight')
    }

   

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Solenoglyphous Model</Text> 
        </View>
        <View style={styles.imageView}>
            <Text style={styles.thankText}>Look at the 3D-printed Bushmaster <Text style={{fontStyle: 'italic'}}>(Lachesis muta)</Text> fang in the display case; see if you can identify the features that make this fang different from the others (shape, size).</Text>
            <Image style={styles.image}source={needle} />
            <Text style={{fontStyle: 'italic', textAlign: 'center'}}>Bushmaster</Text>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToSoleEight}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
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
    }, 
    titleText: {
        fontSize: 44,
        textAlign: 'left',
        fontFamily: 'Arial',
        padding: 10,
        color: '#F95724',
    }, 
    imageView: {
        flex: 1,
        marginTop: -40,
    },
    thankText: {
        fontSize: 38, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666', 
        // marginBottom: 0,
    },
    underline: {
        color: 'blue', 
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width: 350, 
        height: 250, 
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
        // justifyContent: 'space-between',
        alignItems: 'flex-end', 
        marginBottom: 20, 
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
        marginLeft: 250, 
        padding: 15, 
        borderWidth: 1,
    },
    homeText: {
        fontSize: 20
    },
})