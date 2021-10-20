import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal} from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import {TouchableOpacity} from 'react-native-gesture-handler';

const rattlesnake = require('../images/rattlesnake.jpg');
const kingcobra = require('../images/king_cobra.jpg')
const grass = require('../images/grass_snake.jpg')

export const SnakeHome = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const navigation = useNavigation()

    const goToAcknowledgements = () => {
        navigation.navigate('Acknowledgements')
    }

    const goToSoleno = () => {
        navigation.navigate('SoleOne')
    }

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }} >
        <View style={styles.background}>
                <Text style={styles.titleText}>Click on one of the pictures below to learn more about a venomous fang 
                <TouchableOpacity style={styles.morphView} onPress={() => setModalOneVisible(true)}>
                    <Text style={styles.underline}>morph</Text>
                </TouchableOpacity>!</Text> 
        </View>
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
                        <Text style={styles.modalText}>In biology, the term morph is often used to describe that a particular trait may have different forms</Text>
                    </View>
                </Modal>
            </View>
        <View style={styles.imageView}>
            <TouchableOpacity onPress={goToSoleno}>
                <Image style={styles.image} source={ rattlesnake } />
                <Text style={styles.imageText}>Solenoglyphous</Text>
                <Text style={styles.underText}>Rattlesnake</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={kingcobra} />
                <Text style={styles.imageText}>Proteroglyphous</Text>
                <Text style={styles.underText}>King cobra</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.image} source={grass} />
                <Text style={styles.imageText}>Opisthoglyphous</Text>
                <Text style={styles.underText}>Grass snake</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.authorView}>
            <Text>Created by: Alan Ching, Julia McCloud, Sarah Milliken, Carrie Veit; EEB 450</Text>
            <Pressable onPress={goToAcknowledgements}><Text style={styles.blue}>Acknowledgements</Text></Pressable>
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
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    titleText: {
        fontSize: 44,
        textAlign: 'left',
        fontFamily: 'Arial',
        padding: 20,
        color: '#F95724',
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 1,
    }, 
    morphView: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: -25,
    },
    underline: {
        color: 'blue', 
        textDecorationLine: 'underline',
        fontSize: 44,
        paddingLeft: 30,
        paddingTop: 10,
    },
    imageView: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        flex: 1,
    },
    image: {
        width: 325, 
        height: 225, 
        borderWidth: 1, 
        position: 'relative',
    },
    imageText: {
        position: 'absolute', 
        bottom: 35, 
        left: 90, 
        color: 'white', 
        fontSize: 22,
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 1,
    },
    underText: {
        textAlign: 'center', 
        fontStyle: 'italic',
    },
    modalView: {
        backgroundColor: '#ffffff', 
        alignItems: 'center', 
        justifyContent:'center', 
        height: 150, 
        width: 350, 
        marginTop: 200, 
        marginLeft: 700, 
        borderWidth: 1
    },
    closeIcon: {
        marginLeft: 270, 
        marginBottom: 10, 
        marginTop: -15
    },
    modalText: {
        color: 'black', 
        padding: 10, 
        fontSize: 15, 
        textAlign: 'center',
    },
    authorView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flex: 1, 
        alignItems: 'flex-end', 
        marginBottom: 30, 
        marginLeft: 20, 
        marginRight: 20,
    },
    blue: {
        color: 'blue',
    },
})