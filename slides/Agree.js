import React from 'react'
import {View, Text, Image, Pressable, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TimerContext } from '../context/screensaver';

const skull = require('../images/skull_bullet.png')
const tree = require('../images/Tree.png')

export const Agree = () => {
    const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
      };

    return (
    <View style={styles.container} onTouchStart={() => {
        setCountdownTimer(300)
      }}>
        <View>
            <Text style={styles.heading}>Do we agree?</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <View style={{width: '57%'}}>
                <View style={{flexDirection: 'row', width: '90%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>This phytosaur has a <Text style={styles.green}>long, narrow snout</Text> and <Text style={styles.green}>pointy, uniform teeth</Text>- it looks much more like the <Text style={styles.green}>gharial</Text> than like the caiman!</Text>
                </View>
                <View style={{flexDirection: 'row', width: '90%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>Based on this, we think the phytosaur likely specialized in eating <Text style={styles.green}>fish</Text>.</Text>
                </View>
                <View style={{flexDirection: 'row', width: '90%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>We can get a wealth of information just from looking at a <Text style={styles.green}>single body part</Text>, like a skull or teeth; but there is a lot we can't know without seeing the <Text style={styles.green}>entire animal</Text>.</Text>
                </View>
                <View style={{flexDirection: 'row', width: '90%'}}>
                    <Image source={skull} style={styles.skull}/>
                    <Text style={styles.text}>Whether your hypothesis was supported or not, you contributed to the <Text style={styles.green}>scientific process</Text>! This is exactly what scientists do every day.</Text>
                </View>
            </View>
            <View style={{marginLeft: 15}}>
                <Image style={{width: 450}}source={tree} />
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 75}}>
            <View style={styles.arrowContainer}><Pressable onPress={goBack}>
                <AntDesign style={styles.arrow}name="caretleft" size={70} color="black" />
                </Pressable>
            </View>
            <View style={styles.arrowContainer}>
                <Pressable onPress={() => navigation.navigate('HelpTwo')}>
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
        paddingBottom: 50, 
        color: '#4F330B',
    },
    green: { 
        color: '#404F24',
    },
    skull: {
        width: 60, 
        height: 30,
    },
    text: {
        fontSize: 28, 
        fontFamily: 'Overlock',
        color: '#4F330B',
        flexWrap: 'wrap'
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
})