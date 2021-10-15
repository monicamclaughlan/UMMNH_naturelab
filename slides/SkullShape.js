import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const phytosaur = require('../images/dorsalPhytosaur.png')
const gharial = require('../images/dorsalGharial.png');
const caiman = require('../images/dorsalCaiman.png');

export const SkullShape = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.heading}>Gross Skull Shape Comparisons</Text>
            <Text style={[styles.smallText, styles.subtitle]}>Click on the Gharial or Caiman to learn more!</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{alignItems: 'center'}}>
                <Image style={styles.image} source={phytosaur} />
                <Text style={styles.smallText}>Phytosaur</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image style={{height: 460}} source={gharial}/>
                <Text style={styles.smallText}>Gharial</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image source={caiman} />
                <Text style={styles.smallText}>Caiaman</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
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
        color: '#4F330B',
    },
    subtitle: {
        paddingLeft: 70,
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
    image: {
        height: 450, 
        width: 250,
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
    },
})