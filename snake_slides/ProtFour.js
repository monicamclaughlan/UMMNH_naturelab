import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_WIDTH } from '../assets/utils';

const venom = require('../images/brown_snake.jpg');

export const ProtFour = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToProtThree = () => {
        navigation.navigate('ProtThree')
    }

    const goToProtFive = () => {
        navigation.navigate('ProtFive')
    }

    

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Proteroglyphous: Venom Delivery</Text> 
        </View>
        <View style={styles.imageView}>
            <View style={{width: '60%'}}>
                <Text style={styles.thankText}>Because this fang morph is relatively shorter than the solenoglyphous fangs, snakes with proteroglyphous fangs often hold on to their prey for longer periods of time to ensure sufficient venom transfer.  Some Elapids may also utilize 
                <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                <Text style={{color:'blue', textDecorationLine: 'underline', fontSize: 28, marginTop: 7, paddingLeft: 5, paddingRight: 5}}>constriction</Text> 
                </TouchableOpacity>
                to ensure the death of the prey. </Text>
                <Text style={styles.thankText}>Isn't it interesting how the shape of the fang morphs relate to the way a snake hunts?</Text>
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
                        <Text style={styles.modalText}>A method snakes use to subdue and kill their prey by coiling their bodies around the victim and squeezing.</Text>
                    </View>
                </Modal>
            </View>
            </View>
            <View style={{width: '50%'}}>
                <Image style={styles.image}source={venom} />
                <Text style={{textAlign: 'right', fontStyle: 'italic'}}>Brown Snake</Text>
            </View>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToProtThree}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToProtFive}>
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
        fontSize: 28, 
        marginLeft: 30, 
        marginRight: 30, 
        color: '#666666', 
        paddingBottom: 20,
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
    modalView: {
        backgroundColor: '#ffffff', 
        alignItems: 'center', 
        justifyContent:'center', 
        height: 120, 
        width: 350, 
        marginTop: 480, 
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
})