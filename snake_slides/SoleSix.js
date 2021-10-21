import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_WIDTH } from '../assets/utils';

const venom = require('../images/fang_diagram.png');

export const SoleSix = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToSoleFive = () => {
        navigation.navigate('SoleFive')
    }

    const goToSoleSeven = () => { 
        navigation.navigate('SoleSeven')
    }

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Solenoglyphous: Venom Delivery</Text> 
        </View>
        <View style={styles.imageView}>
            <View style={{width: '50%'}}>
                <Image style={styles.image}source={venom} />
                <Text style={{position: 'absolute', top: 25, left: 30, fontSize: 20}}>Venom gland</Text>
                <Text style={{position: 'absolute', top: 130, left: 5, fontSize: 20}}>Muscle</Text>
                <Text style={{position: 'absolute', top: 220, right: 30, fontSize: 20}}>Fang</Text>
                <Text style={{textAlign: 'left', fontStyle: 'italic', marginLeft: 10, marginTop: 20}}>Gaboon Viper</Text>
            </View>
            <View style={{width: '60%'}}>
                <Text style={styles.thankText}>Venom is stored in the venom glands that are located in the upper jaw.  If the fang itself is the needle, the venom glands are the barrels that contain the liquid! </Text>
                <Text style={styles.thankText}>The venom glands of snakes with solenoglyphous fangs are often very well developed in comparison to the venom glands of snakes with other fang morphs. </Text>
                <Text style={styles.thankText}>Muscles surrounding the venom glands push the venom towards the fang which is then injected.  These muscles act similarly to a plunger of a needle!</Text>
            </View>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToSoleFive}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToSoleSeven}>
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
        fontSize: 24, 
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