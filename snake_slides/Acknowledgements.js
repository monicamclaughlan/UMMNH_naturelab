import React from 'react'
import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

const rattlesnake = require('../images/rattlesnake.jpg');
const kingcobra = require('../images/king_cobra.jpg')
const grass = require('../images/grass_snake.jpg')

export const Acknowledgements = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }
    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Acknowledgements</Text> 
        </View>
        <View style={styles.imageView}>
            <Text style={{fontSize: 30, marginLeft: 30, marginRight: 30, color: '#666666'}}>We'd like to thank Dr. Matthew Holding for mentoring us on this project, and Dr. Alison Davis-Rabosky and Hayley Crowell for providing us this opportunity as part of the MORPH project assignment for the EEB 450: Amphibians and Reptiles class.  We'd also like to thank the University of Michigan Natural History Museum for allowing us to present this project as part of a real exhibit.</Text>
        </View>
        <View style={styles.authorView}>
            <View style={{backgroundColor: '#C9DAF8', padding: 15, borderWidth: 1}}>
                <Text style={{fontSize: 20}}>Go Back</Text>
            </View>
            <Pressable onPress={goHome}><View style={{backgroundColor: '#C9DAF8', marginLeft: 330, padding: 15, borderWidth: 1}}>
                <Text style={{fontSize: 20}}>Return to Home page</Text>
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
        padding: 20,
        color: '#F95724',
    }, 
    imageView: {
        flex: 1,
    },
    authorView: {
        flexDirection: 'row', 
        // justifyContent: 'space-between', 
        flex: 1, 
        alignItems: 'flex-end', 
        marginBottom: 30, 
        marginLeft: 20, 
        marginRight: 20,
    },
})