import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { TouchableOpacity } from 'react-native-gesture-handler';

const pit = require('../images/pit_viper.jpg');
const cottonmouth = require('../images/cottonmouth.jpg');
const puff = require('../images/puff.jpg');

export const SoleTwo = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToSoleOne = () => {
        navigation.navigate('SoleOne')
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
            <Text style={styles.thankText}>The Main 
            <TouchableOpacity style={styles.morphView} onPress={() => setModalOneVisible(true)}>
                <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 40, paddingLeft: 10, paddingRight: 10, marginBottom: 22}}>family</Text>
            </TouchableOpacity> 
                that possess the solenoglyphous fang morph is the family Viperidae.  This family is divided into two subfamilies: Viperinae, the true Vipers and Crotalinae, the pit vipers. </Text>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOneVisible}
                    onRequestClose={() => setModalOneVisible(!modalOneVisible)}
                >
                    <View style={styles.modalView}>
                    <Pressable onPress={() => setModalOneVisible(!modalOneVisible)}>
                        <AntDesign style={styles.closeIcon} name="closecircle" size={25} color="red" />
                    </Pressable>
                        <Text style={styles.modalText}>In biology, the term family is used to group organisms that possess similar characteristics and traits!</Text>
                    </View>
                </Modal>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20}}>
                <View>
                    <Image style={styles.image} source={pit} />
                    <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Vogel's Pit Viper</Text>
                </View>
                <View>
                    <Image style={styles.image} source={cottonmouth} />
                    <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Cottonmouth</Text>
                </View>
                <View>
                    <Image style={styles.image} source={puff} />
                    <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Puffadder</Text>
                </View>
            </View>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToSoleOne}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToSoleThree}>
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
        marginTop: -70,
    },
    thankText: {
        fontSize: 38, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666'
    },
    underline: {
        color: 'blue', 
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: 'bold'
    },
    morphView: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: -25,
    },
    modalView: {
        backgroundColor: '#ffffff', 
        alignItems: 'center', 
        justifyContent:'center', 
        height: 120, 
        width: 350, 
        marginTop: 300, 
        marginLeft: 300, 
        borderWidth: 1
    },
    closeIcon: {
        marginLeft: 270,  
        marginTop: 20,
    },
    modalText: {
        color: 'black', 
        padding: 10, 
        fontSize: 15, 
        textAlign: 'center',
    },
    image: {
        width: 340, 
        height: 210, 
        // alignSelf: 'center', 
        // position: 'relative'
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