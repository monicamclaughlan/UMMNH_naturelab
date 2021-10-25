import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import WebView from 'react-native-webview';
import { TimerContext } from '../context/screensaver';

const skull = require('../images/skull_bullet.png')
// const crocodile = require('../images/snake.jpg')

export const PresentDay = () => {
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
            <Text style={styles.heading}>Present-day animals</Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', flex: 1}}>
            <View style={{width: '45%', marginLeft: 40, marginRight: 50}}>
                <Text style={styles.subHeading}>Gharial</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>River dwellers in South Asia</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%', marginBottom: 50}}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.text}><Text style={styles.green}>Narrow snout</Text> and <Text style={styles.green}>super sharp teeth</Text> are important for their habitat and diet of <Text style={styles.green}>fish</Text></Text>
                </View>
                    <WebView
                        scalesPageToFit={false}
                        originWhitelist={['*']}
                        source={{ html: '<iframe title="Tomistoma schlegelii" frameborder="0" width="450" height="235" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cb9b397837d845bda2cfdbfe8ac945d2/embed"> </iframe>'}}  
                    /> 
                    <Text style={styles.smallText}>UMMZ Herps 174416</Text>
            </View>
            <View style={{width: '40%'}}>
                <Text style={styles.subHeading}>Caiman</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>River and lake dwellers in the Mexico, Central and South America</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.text}>Eat a <Text style={styles.green}>varied diet</Text>, but their <Text style={styles.green}>wide jaw</Text> specializes them in crushing snail and turtle shells</Text>
                </View>
                <WebView
                        scalesPageToFit={false}
                        originWhitelist={['*']}
                        source={{ html: '<iframe title="Caiman crocodilus" frameborder="0" width="400" height="260" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a581c4aaaf2d4972a3495d60ec5ecb64/embed"> </iframe>'}}  
                    /> 
                    <Text style={styles.smallText}>UMMZ Herps 155282</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View>
                <Text style={styles.mediumText}>Because these animals are alive today, we can observe their ecology!</Text>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('SkullShape')}>
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
        paddingBottom: 20, 
        color: '#4F330B',
    },
    subHeading: {
        fontSize: 30, 
        fontFamily: 'Overlock',
        textAlign: 'center',
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
    smallText: {
        fontSize: 18,
        fontFamily: 'Overlock',
        color: '#4F330B',
        textAlign: 'center',
    },
    mediumText: {
        fontSize: 20,
        fontFamily: 'Overlock',
        color: '#4F330B',
        paddingTop: 30,
    },
})