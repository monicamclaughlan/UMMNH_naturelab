import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { assertStatusValuesInBounds } from 'expo-av/build/AV';

const skull = require('../images/skull_bullet.png')
const crocodile = require('../images/snake.jpg')

export const PresentDay = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.heading}>Present-day animals</Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', flex: 1}}>
            <View style={{width: '50%', flex: 1}}>
                <Text style={styles.subHeading}>Gharial</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>River dwellers in South Asia</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.text}><Text style={styles.green}>Narrow snout</Text> and <Text style={styles.green}>super sharp teeth</Text> are important for their habitat and diet of <Text style={styles.green}>fish</Text></Text>
                </View>
                <View>
                    <Image source={crocodile} />
                    <Text>Caiman goes here</Text>
                </View>
            </View>
            <View style={{width: '50%'}}>
                <Text style={styles.subHeading}>Caiman</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>River dwellers in South Asia</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                <Image source={skull} style={styles.skull}/>
                <Text style={styles.text}>Narrow snout and super sharp teeth are important for their habitat and diet of fish</Text>
                </View>
                <View>
                    <Text>Caiman goes here</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <Text style={styles.text}>Because these animals are alive today, we can observe their ecology!</Text>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('HelpTwo')}>
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
})