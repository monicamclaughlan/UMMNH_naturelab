import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const binocular = require('../images/Binocular.png')
const skull = require('../images/skull_bullet.png')
const glasses = require('../images/glasses.png')
const magnifier = require('../images/magnifier.png')
const shovel = require('../images/shovel.png')

export const Story = () => { 
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Our story</Text>
            <View style={styles.firstParagraph}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.paragraphText}>We are a team of U of M <Text style={styles.green}>paleontologists</Text> and we have just returned from our dig site out west.  The rock formations at our site are from the <Text style={styles.green}>Triassic Period</Text>, so they are over 200 million years old!</Text>
            </View>
            <View style={styles.secondParagraph}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.paragraphText}>We found this <Text style={styles.green}>fossil skull</Text> in Triassic ages rocks in Texas.  Looking at the overall shape of the skull, its long snout, and pointy teeth, we think it looks a lot like a <Text style={styles.green}>crocodile</Text>, but we need <Text style={styles.bold}>your</Text> help to figure out what this animal is.</Text>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                    <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable></View>
                <Image  source={binocular} style={[styles.binocular, styles.image]}/>
                <Image source={glasses} style={styles.glasses}/>
                <Image source={magnifier} style={[styles.magnifier, styles.image]}/>
                <Image source={shovel} style={[styles.shovel, styles.image]}/>
                <View style={styles.arrowContainer}><Pressable onPress={() => navigation.navigate('Help')}>
                    <AntDesign style={styles.arrow}name="caretright" size={70} color="black" />
                </Pressable></View>
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
        fontFamily: 'Overlock', 
        fontSize: 44, 
        paddingTop: 50, 
        paddingLeft: 50, 
        paddingBottom: 50, 
        color: '#4F330B',
    },
    firstParagraph: {
        flexDirection: 'row', 
        width: '80%', 
        paddingLeft: 30,
    },
    skull: {
        width: 60, 
        height:30,
    },
    paragraphText: {
        fontSize: 28, 
        fontFamily: 'Overlock',
        color: '#4F330B',
    }, 
    green: {
        color: '#404F24',
    },
    bold: {
        fontFamily: 'OverlockBold',
        color: '#4F330B',
    },
    secondParagraph: {
        flexDirection: 'row', 
        width: '80%', 
        paddingLeft: 30, 
        paddingTop: 10,
    },
    imageContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 120, 
    },
    arrowContainer: {
        width: 200, 
        height: 100, 
        backgroundColor: '#D57500', 
        borderWidth: 1, 
        alignSelf: 'flex-end'
    },
    arrow: {
        textAlign: 'center', 
        paddingTop: 20,
    },
    image: {
        alignSelf: 'flex-end'
    },
    binocular: {
        height:200, 
        width: 150,
    },
    glasses: {
        height:220, 
        width: 180,
    },
    magnifier: {
        height:175, 
        width: 140,
    },
    shovel: {
        height:200, 
        width: 160,
    },
})