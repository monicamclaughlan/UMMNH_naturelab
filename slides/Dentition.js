import React, {useState} from 'react'
import {View, Text, Image, Pressable, StyleSheet, Modal} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TimerContext } from '../context/screensaver';

const phytosaur = require('../images/dentitionPhytosaur.png')
const gharial = require('../images/dentitionGharial.png');
const caiman = require('../images/dentitionCaiman.png');

export const Dentition = () => {
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }}>
        <View>
            <Text style={styles.heading}>Dentition Comparisons</Text>
            <Text style={[styles.smallText, styles.subtitle]}>Click on the Gharial or Caiman to learn more!</Text>
        </View>
        <View style={styles.imageContainer}>
            <View style={styles.phytosaurView}>
                <Image style={styles.image} source={phytosaur} />
                <Text style={styles.smallText}>Phytosaur</Text>
            </View>
            <View style={styles.gharialView}>
                <Pressable onPress={() => setModalOneVisible(true)}><Image style={styles.gharialImage} source={gharial}/></Pressable>
                <Text style={styles.smallText}>Gharial</Text>
            </View>
            <View style={styles.modalOneView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOneVisible}
                    onRequestClose={() => setModalOneVisible(!modalOneVisible)}
                >
                    <View style={{backgroundColor: '#404F24', alignItems: 'center', justifyContent:'center', height: 200, width: 350, marginTop: 460, marginLeft: 350}}>
                    <Pressable onPress={() => setModalOneVisible(!modalOneVisible)}>
                        <AntDesign style={{marginRight: 270, marginBottom: 10, marginTop: -30}} name="closecircle" size={30} color="white" />
                    </Pressable>
                        <Text style={{color: 'white', padding: 10, fontSize: 18, textAlign: 'center'}}>The sharp hooked teeth to allow the Gharial to catch and hold on to slippery  <Text style={{fontStyle: 'italic'}}>fish.</Text></Text>
                    </View>
                </Modal>
            </View>
            <View style={{alignItems: 'center', marginTop: 70}}>
                <Pressable onPress={() => setModalTwoVisible(true)}><Image style={{height: 115, marginTop: 70}}source={caiman} /></Pressable>
                <Text style={styles.smallText}>Caiman</Text>
            </View>
            <View style={styles.modalView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalTwoVisible}
                    onRequestClose={() => setModalTwoVisible(!modalTwoVisible)}
                >
                    <View style={{backgroundColor: '#404F24', alignItems: 'center', justifyContent:'center', height: 200, width: 400, marginTop: 460, marginLeft: 680}}>
                    <Pressable onPress={() => setModalTwoVisible(!modalTwoVisible)}>
                        <AntDesign style={{marginRight: 270, marginBottom: 10, marginTop: -30}} name="closecircle" size={30} color="white" />
                    </Pressable>
                        <Text style={{color: 'white', padding: 10, fontSize: 18, textAlign: 'center'}}>The short round teeth of the Caiman allow it to crush through shells and eat <Text style={{fontStyle: 'italic'}}>snails and turtles.</Text></Text>
                    </View>
                </Modal>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 85}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('Hypothesis')}>
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
    imageContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
    },
    phytosaurView: {
        alignItems: 'center', 
        marginLeft: 20, 
        marginRight: 10, 
        marginTop: 70,
    },
    gharialView: {
        alignItems: 'center', 
        marginTop: 120,
    },
    gharialImage: {
        height: 170,
    },
    modalOneView: {
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center'
    },
    modalView: {
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center',
    },
    text: {
        fontSize: 28, 
        fontFamily: 'Overlock',
        color: '#4F330B',
    },
    image: {
        height: 280, 
        width: 280,
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
        marginTop: 30
    },
})