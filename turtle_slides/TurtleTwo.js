import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet, Image, Modal, ImageBackground} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {TimerContext} from '../context/screensaver';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


const turtle = require('../images/box.jpg')
const CT = require('../images/box_CT.png')
const CT1 = require('../images/box_CT1.png')

export const TurtleTwo = () => { 
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation();
    
    const goBack = () => {
        navigation.goBack();
      };

    return (
        <View style={styles.container} onTouchStart={() => {
            setCountdownTimer(300)
          }}>
                <View style={{backgroundColor: '#212121', flex: 1}}>
                    <View>
                        <Text style={{fontStyle: 'italic', color: 'white', fontSize: 40, marginTop: 30, marginLeft: 50}}>Ever wonder what's under a turtle shell?</Text>
                        <Text style={{color: 'white', fontSize: 28, marginLeft: 50}}>Eastern Box Turtle <Text style={{fontStyle: 'italic'}}>(Terrapene carolina carolina)</Text></Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 40}}> 
                        <View>
                            <Image style={{marginTop: 20, width: 400, height: 200}}source={turtle} />
                            <Text style={{marginBottom: 10, fontSize: 12, color: 'white'}}>Stephen Friedt, CC BY-SA 3.0</Text>
                        </View>
                        <View style={{marginLeft: 80, width: '50%'}}>
                            <Text style={{marginBottom: 10, fontSize: 24, color: 'white', textAlign: 'center'}}>A turtle's back is a part of their shell.  Eastern Box turtles have a tall shell that gives them a spine shaped like a U!</Text>
                            <Image style={{width: 500, height: 250, resizeMode: 'contain'}}source={CT}/>
                        </View>
                    </View>
                    <View style={{marginLeft: 40, flexDirection: 'row'}}>
                        <View style={{width: '40%', flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginRight: 10}}>
                                    <Image style={{width: 300, height: 170}}source={CT1}/>
                                </View>
                            <View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#181aff', width: 20, height: 20, marginRight: 20, marginBottom: 10}}></View>
                                <Text style={{color: 'white', fontSize: 20}}>Spine</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#80d896', width: 20, height: 20, marginRight: 20, marginBottom: 10}}></View>
                                <Text style={{color: 'white', fontSize: 20}}>Hip Joint</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                 <View style={{backgroundColor: '#8961b1', width: 20, height: 20, marginRight: 20, marginBottom: 10}}></View>
                                <Text style={{color: 'white', fontSize: 20}}>Shoulder Blade</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                 <View style={{backgroundColor: '#cdcbcc', width: 20, height: 20, marginRight: 20, marginBottom: 10}}></View>
                                 <Text style={{color: 'white', fontSize: 20}}>Shell Bone</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                   <View style={{marginLeft: 120, width: '40%', alignSelf: 'center'}}>
                        <Text style={{fontSize: 24, color: 'white', textAlign: 'center'}}>Fun Fact:</Text>
                        <Text style={{fontSize: 24, color: 'white', textAlign: 'center'}}>Eastern Box Turtles are named that because they can pull up the bottom of their shell to protect themselves.  It looks just like a box!</Text>
                    </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#212121'}}>
                    <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                        <AntDesign style={styles.arrow}name="caretleft" size={40} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.arrowContainer}>
                        <Pressable onPress={() => navigation.navigate('TurtleThree')}>
                        <AntDesign style={styles.arrow}name="caretright" size={40} color="black" />
                        </Pressable>
                    </View>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
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