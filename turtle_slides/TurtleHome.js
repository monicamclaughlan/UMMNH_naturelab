import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal, ImageBackground} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


const turtle = require('../images/turtle_shell.jpg')

export const TurtleHome = () => { 
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
        <View style={styles.container}>
            <ImageBackground source={turtle} resizeMode='cover' style={styles.image}>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', flex: 1}}>
                <View>
                    <Text style={{fontSize: 80, fontFamily: 'Jim', marginTop: 50, marginLeft: 50}}>Turtle MORPH! Project</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 40}}> 
                    <View>
                        <Text style={{textDecorationLine: 'underline', marginBottom: 10, fontSize: 24}}>Students: </Text>
                        <Text style={{marginBottom: 10, fontSize: 24}}>Jarod Taylor</Text>
                        <Text style={{marginBottom: 10, fontSize: 24}}>Elizabeth Bushey</Text>
                        <Text style={{marginBottom: 10, fontSize: 24}}>Beth Weiler</Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <Text style={{textDecorationLine: 'underline', marginBottom: 10, fontSize: 24}}>MORPH! Project Mentors: </Text>
                        <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 24}}>Brianna Mims</Text>
                        <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 24}}>Natasha Stepanova</Text>
                    </View>
                </View>
                <View style={{marginLeft: 40}}>
                    <Text style={{textDecorationLine: 'underline', fontSize: 34, marginBottom: 20}}>Questions we wanted to answer:</Text>
                    <Text style={{fontSize: 34}}>How can we inform people of...</Text>
                    <Text style={{fontSize: 34}}>{'\u2022' + ' '} What are turtles like underneath their shell?</Text>
                    <Text style={{fontSize: 34}}>{'\u2022' + ' ' } Why are the turtles like that underneath their shells?</Text>
                    <Text style={{fontSize: 34}}>{'\u2022' + ' '} What are some differences between different types of turtles?</Text>
                </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                    <AntDesign style={styles.arrow}name="caretleft" size={40} color="black" />
                    </Pressable>
                </View>
                <View style={styles.arrowContainer}>
                    <Pressable onPress={() => navigation.navigate('TurtleOne')}>
                    <AntDesign style={styles.arrow}name="caretright" size={40} color="black" />
                    </Pressable>
                </View>
        </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    image: {
        flex: 1, 
        justifyContent: 'center',
    },
    arrowContainer: {
        width: 100, 
        height: 70, 
        backgroundColor: '#cdcbcc', 
        borderWidth: 1, 
        alignSelf: 'flex-end', 
    },
    arrow: {
        textAlign: 'center', 
        paddingTop: 20,
    },
})