import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const skull = require('../images/skull_bullet.png')

export const HelpTwo = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.heading}>We need <Text style={styles.green}>you</Text> to help us!</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>We can actually learn a lot about an animal's behavior and habitat by looking at its body.  We call this relationship between body type and behavior/ecology: <Text style={styles.green}>"ecomorphology"</Text>.</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>Many animals that do or eat similar things look alike, so we can compare this extinct animal to a living animal that looks like it to learn about how it lived.</Text>
        </View>
        <View style={{flexDirection: 'row', width: '80%', flex: 1}}>
            <Image source={skull} style={styles.skull}/>
            <Text style={styles.text}>With this presentation, we will walk you through this process so you can see what it's like to be a paleontologist discovering a new species.  We also want to show you that we can learn a lot even when we can't see the animal's whole body.</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('PhytosaurTwo')}>
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