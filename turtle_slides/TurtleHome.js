import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal, ImageBackground} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import {TouchableOpacity} from 'react-native-gesture-handler';

const turtle = require('../images/turtle_shell.jpg')

export const TurtleHome = () => { 
    return (
        <View style={styles.container}>
            <ImageBackground source={turtle} resizeMode='cover' style={styles.image}>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', flex: 1}}>
                <View>
                    <Text style={{fontSize: 80, fontFamily: 'Jim'}}>Turtle MORPH! Project</Text>
                </View>
                <View>
                    <Text>Students: </Text>
                    <Text>Jarod Taylor</Text>
                    <Text>Elizabeth Bushey</Text>
                    <Text>Beth Weiler</Text>
                </View>
                <View>
                    <Text>MORPH! Project Mentors: </Text>
                    <Text>Brianna Mims</Text>
                    <Text>Natasha Stepanova</Text>
                </View>
                <View>
                    <Text>Questions we wanted to answer:</Text>
                    <Text>How can we inform peopls of...</Text>
                    <Text>What are turtles like underneath their shell?</Text>
                    <Text>Why are the turtles like that underneath their shells?</Text>
                    <Text>What are some differences between different types of turtles?</Text>
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
    }
})