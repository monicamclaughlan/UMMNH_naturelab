import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import { DEVICE_WIDTH } from '../assets/utils';

const venom = require('../images/coral.jpg');

export const ProtTwo = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const navigation = useNavigation()

    const goHome = () => {
        navigation.navigate('SnakeHome')
    }

    const goToProtOne = () => {
        navigation.navigate('ProtOne')
    }

    const goToProtThree = () => {
        navigation.navigate('ProtThree')
    }

    

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Proteroglyphous Fang Morph</Text> 
        </View>
        <View style={styles.imageView}>
            <View style={{width: '60%'}}>
                <Text style={styles.thankText}>Similar to solenoglyphous fangs, proteroglyphous fangs are also hollow.</Text>
                <Text style={styles.thankText}>Due to the inability to fold the fangs, proteroglyphous fangs are significantly shorter than solenoglyphous fangs and are often less curved.</Text>
                <Text style={styles.thankText}>The only snake 
                <TouchableOpacity style={styles.morphView} onPress={() => setModalOneVisible(true)}>
                <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 28, paddingLeft: 5, marginBottom: 22}}>family </Text>
                </TouchableOpacity>
                to have proteroglyphous fangs are Elapids which include snakes such as cobras, mambas, and coral snakes.</Text>
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
            </View>
            <View style={{width: '50%'}}>
                <Image style={styles.image}source={venom} />
                <Text style={{textAlign: 'right', fontStyle: 'italic'}}>Eastern coral snake</Text>
            </View>
        </View>
        <View style={styles.authorView}>
            <Pressable onPress={goToProtOne}>
                <View style={styles.backView}>
                    <AntDesign name="caretleft" size={30} color="black" />
                    <Text style={styles.backText}>Go Back</Text>
                </View>
            </Pressable>
            <Pressable onPress={goHome}><View style={styles.homeView}>
                <Text style={styles.homeText}>Return to Home page</Text>
            </View></Pressable>
            <Pressable onPress={goToProtThree}>
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
        marginTop: 500, 
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