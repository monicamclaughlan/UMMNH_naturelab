import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { TouchableOpacity } from 'react-native-gesture-handler';

const fangs = require('../images/hollow_fangs.jpg');

export const SoleOne = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToSoleTwo = () => {
        navigation.navigate('SoleTwo')
    }

    const goToSoleThree = () => { 
        navigation.navigate('SoleThree')
    }
    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Solenoglyphous Morph</Text> 
        </View>
        <View style={styles.imageView}>
            <Text style={styles.thankText}>Fangs that are long, hollow, and can <TouchableOpacity onPress={goToSoleThree}>
                <Text style={styles.underline}>fold against the roof </Text>
                </TouchableOpacity> 
                of the mouth when the jaw is closed are called <Text style={styles.bold}>solenoglyphous.</Text></Text>
            <Image style={styles.image}source={fangs} />
            <Text style={styles.imageText}>Russell's viper</Text>
        </View>
        <View style={styles.authorView}>
            {/* <View style={styles.backView}>
                <AntDesign name="caretleft" size={30} color="black" />
                <Text style={styles.backText}>Go Back</Text>
            </View> */}
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToSoleTwo}>
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
        // marginTop: -40,
    }, 
    titleText: {
        fontSize: 44,
        textAlign: 'left',
        fontFamily: 'Arial',
        paddingLeft: 20,
        color: '#F95724',
    }, 
    imageView: {
        flex: 1,
        marginTop: -40,
    },
    thankText: {
        fontSize: 40, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666', 
        marginBottom: 10,
    },
    underline: {
        color: 'blue', 
        textDecorationLine: 'underline', 
        fontSize: 40,
    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width: 350, 
        height: 250, 
        alignSelf: 'center', 
        position: 'relative'
    },
    imageText: {
        fontStyle: 'italic', 
        color: 'white', 
        position: 'absolute', 
        top: 390, 
        right: 360
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
        marginLeft: 380, 
        padding: 15, 
        borderWidth: 1,
    },
    homeText: {
        fontSize: 20
    },
})