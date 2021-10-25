import React, {useState} from 'react'
import {View, Text, Image, Pressable, StyleSheet, Modal} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TimerContext } from '../context/screensaver';

const phytosaur = require('../images/dorsalPhytosaur.png')
const gharial = require('../images/dorsalGharial.png');
const caiman = require('../images/dorsalCaiman.png');

export const SkullShape = () => {
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
            <Text style={styles.heading}>Gross Skull Shape Comparisons</Text>
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
                    <View style={{backgroundColor: '#404F24', alignItems: 'center', justifyContent:'center', height: 200, width: 350, marginTop: 250, marginLeft: 300}}>
                    <Pressable onPress={() => setModalOneVisible(!modalOneVisible)}>
                        <AntDesign style={{marginRight: 270, marginBottom: 10, marginTop: -30}} name="closecircle" size={30} color="white" />
                    </Pressable>
                        <Text style={{color: 'white', padding: 10, fontSize: 18, textAlign: 'center'}}>The Gharial's skull is long and skinny.  This allows it to close it very fast and eat a diet of mostly <Text style={{fontStyle: 'italic'}}>fish.</Text></Text>
                    </View>
                </Modal>
            </View>
            <View style={{alignItems: 'center'}}>
                <Pressable onPress={() => setModalTwoVisible(true)}><Image style={{height: 475}} source={caiman} /></Pressable>
                <Text style={styles.smallText}>Caiman</Text>
            </View>
            <View style={styles.modalView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalTwoVisible}
                    onRequestClose={() => setModalTwoVisible(!modalTwoVisible)}
                >
                    <View style={{backgroundColor: '#404F24', alignItems: 'center', justifyContent:'center', height: 200, width: 400, marginTop: 250, marginLeft: 620}}>
                    <Pressable onPress={() => setModalTwoVisible(!modalTwoVisible)}>
                        <AntDesign style={{marginRight: 270, marginBottom: 10, marginTop: -30}} name="closecircle" size={30} color="white" />
                    </Pressable>
                        <Text style={{color: 'white', padding: 10, fontSize: 18, textAlign: 'center'}}>The Caiman's skull is short and wide. This allows it to have a very strong bite, and eat a diet composed of <Text style={{fontStyle: 'italic'}}>birds, mammals, and turtles.</Text></Text>
                    </View>
                </Modal>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('Orbit')}>
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
        marginLeft: 40, 
        marginRight: 40, 
        marginTop: 20,
    },
    gharialView: {
        alignItems: 'center', 
        marginTop: 20,
    },
    gharialImage: {
        height: 460,
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
        height: 430, 
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