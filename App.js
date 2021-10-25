
import React, {useState, useEffect} from 'react';
import { Button, Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Video } from 'expo-av';
import { TimerContext } from './context/screensaver';
import {DEVICE_WIDTH} from './assets/utils';
import PhytosaurStack from './navigation/PhytosaurStack';
import SnakeStack from './navigation/SnakeStack';
import { Asset } from 'expo-asset';

const crocodile = require('./images/crocodile.jpg')
const snake = require('./images/DSC_9204.png')
const turtle = require('./images/DSC_0079.png')
// const morph = require("./videos/morph.mp4")
const morph = Asset.fromModule("./assets/videos/morph.mp4")

const WelcomeScreen = () => { 

 const navigation = useNavigation()

  const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
  return (
  <View style={styles.container} onTouchStart={() => {
    setCountdownTimer(300)
  }
  }>
    <View style={[styles.textContainer, {marginTop:10, paddingTop: 20}]}>
      <Text style={styles.basetext}>Project: MORPH! </Text> 
    </View>
    <View style={{backgroundColor: '#B4D88B', width: '90%', borderRadius: 10, marginTop: 20}}>
      <Text style={{textAlign: 'center', fontSize: 24, fontFamily: 'Eurostile', paddingTop: 20, paddingBottom: 15 }}>Click On A Video Below To Hear More</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <TouchableOpacity  style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Herpetology')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center'}} source={ crocodile }></Image>
          </TouchableOpacity>
          <Text style={{fontSize: 24, fontFamily: 'AG', textAlign: 'center', marginBottom: 20, width: 300}}>What is Herpetology?</Text>
        </View>
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Science Communication')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, shadowColor: '#000', alignSelf: 'center', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ snake }></Image>
          </TouchableOpacity>
          <Text style={{fontSize: 24, fontFamily: 'AG', textAlign: 'center', marginBottom: 20, width: 300}}>Science Communication</Text>
        </View>
        <View>
        <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Project MORPH!')}>
          <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, shadowColor: '#000', alignSelf: 'center', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={turtle}></Image>
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontFamily: 'AG', textAlign: 'center', marginBottom: 20, width: 300}}>Project MORPH!</Text>
      </View>
      </View>
    </View>
  
    <View style={{backgroundColor: '#B4D88B', width: '90%', borderRadius: 10, marginTop: 20}}>
      <Text style={{textAlign: 'center', fontSize: 24, fontFamily: 'Eurostile', paddingTop: 20, paddingBottom: 15}}>Click On The Images Below To Learn More About Each Project</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Phytosaur')}>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 100 }} source={ crocodile }></Image>
        <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 30}}>Phytosaur</Text>
      </TouchableOpacity> */}
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Phytosaur')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ crocodile }></Image>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, paddingBottom: 20}}>How do we know what extinct reptiles ate?</Text>
        </View>
      {/* <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Snake')}>
        <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ snake }></Image>
        <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, paddingBottom: 20}}>How do snake fangs work?</Text>
      </TouchableOpacity>  */}
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Snake Fangs')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ snake }></Image>
          </TouchableOpacity>  
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, paddingBottom: 20, marginTop: 20}}>How do snake fangs work?</Text>
        </View>
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Turtle Shells')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={turtle}></Image>  
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, marginBottom: 20}}>What do Michigan turtles look like inside their shells?</Text>
        </View>
      </View>
    </View>  
</View>
)}



const Videos = () => {
  const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
  const navigation = useNavigation()
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F6F18', marginLeft: 50, marginRight: 50}} onTouchStart={() => {
      setCountdownTimer(300)
    }
    }>
      <Text style={[styles.subtitle, {width: '90%'}]}>Hear more from the researchers themselves! </Text>
      <Text style={[styles.subtitle, {width: '90%'}]}>Click each button below to hear a short interview about their work.</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('InterviewOne')}>
        <Text style={styles.text}>Interview One</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('InterviewTwo')}>
        <Text style={styles.text}>Interview Two</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('InterviewThree')}>
        <Text style={styles.text}>Interview Three</Text>
      </Pressable>
    </View>
  );
}

const InterviewOne = () => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  return (
  <View style={styles.container}>
  <Video
    ref={video}
    style={styles.video}
    source={{
      uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    }}
    useNativeControls
    resizeMode="cover"
    isLooping
    onPlaybackStatusUpdate={status => setStatus(() => status)}
  />
  <View style={styles.buttons}>
    <Button
      title={status.isPlaying ? 'Pause' : 'Play'}
      onPress={() =>
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
      }
    />
  </View>
</View>
  )}

  const InterviewTwo = () => {
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    return (
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      useNativeControls
      resizeMode="cover"
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={styles.buttons}>
      <Button
        title={status.isPlaying ? 'Pause' : 'Play'}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      />
    </View>
  </View>
    )}

    const InterviewThree = () => {
      const video = React.useRef(null);
      const [status, setStatus] = useState({});
      return (
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
      )}    

const CrocodileScreen = () => {
  const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
  const navigation = useNavigation();
  return (
  <>
    <WebView
      scalesPageToFit={false}
      originWhitelist={['*']}
      source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSgI3ONxGNjkSqJXWmvR7_z6Yds3-3hiN50L77DW5O5uNM1q4qPzc3VHopxkcTRGg/embed?start=true&loop=true&delayms=60000" frameborder="0" width="960" height="660" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'}}  
    /> 
   
</>
)}

const SnakeScreen = () => (
  <WebView
  scalesPageToFit={false}
  originWhitelist={['*']}
  source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSRDsWJJwV3olvZ-XDfk0WdBW0d0NI0Y6MYI1v0f_GWQWQ5LvkVZ4vDNoZBcdiS_A/embed?start=true&loop=true&delayms=60000" frameborder="0" width="1200" height="820" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'}}
  />
)

const TurtleScreen = () => (
  <WebView
  style={{}}
  scalesPageToFit={false}
  originWhitelist={['*']}
  source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSodfDfxO2V3g8c7I2w6rjPp7bwrHPA1XT9DPH8D0d9fTOdQjjbGDK27qYf6nMfPw/embed?start=true&loop=true&delayms=60000" frameborder="0" width="1200" height="840" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>' }}
   />
)

const Stack = createStackNavigator();

export default App => {

  const [countdownTimer, setCountdownTimer] = useState(300);

  const [active, setActive] = useState(false)
  let timer;
  const toggle = () => { 
    console.log("is false")
    setActive(false)
    setCountdownTimer(300)
    clearTimeout(timer);
  }

  const playScreensaverVideo = () => {
    const {width, height} = Dimensions.get('window')
    return (
      <TouchableOpacity onPress={toggle}>
        <View>
          <Video
              source={{
                uri: 'https://ummnh.s3.us-east-2.amazonaws.com/morph_attract_FINAL.mp4',
              }}
              shouldPlay
              isLooping
              resizeMode="contain"
              style={{ width, height }}
            />
        </View>
      </TouchableOpacity>
  )}

 
  useEffect(() => {
    if(countdownTimer > 0){ 
      timer = setTimeout( () => {
        setCountdownTimer(countdownTimer - 1);
        // console.log(countdownTimer);
      }, 1000);
    }else {
      setActive(true);
      clearTimeout(timer);
      // playScreensaverVideo()
    }
    return () => {
      clearTimeout(timer);
    }
  })
  
  let [fontsLoaded] = useFonts({
    'Eurostile': require('./assets/fonts/EurostileLTStd-Bold.otf'),
    'AG': require('./assets/fonts/AGaramondPro-Regular.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if(active) {
    return playScreensaverVideo()
  }
    else {
      return (
    <TimerContext.Provider value={{countdownTimer,setCountdownTimer}}>
      <NavigationContainer>
          <Stack.Navigator
              screenListeners={{
                tabPress: (e)=> {
                  setCountdownTimer(300)
                  clearTimeout(myTimer)
                }
              }}
              screenOptions={{
                headerStyle: {
                  height: 45, // Specify the height of your custom header
                }
              }}
          > 
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Videos"  component={Videos}/>
            {/* <Stack.Screen name="Phytosaur" component={CrocodileScreen}/> */}
            <Stack.Screen name="Phytosaur" component={PhytosaurStack}/>
            {/* <Stack.Screen name="Phytosaur"  component={Phytosaur}/> */}
            <Stack.Screen name="Snake Fangs" component={SnakeStack} />
            {/* <Stack.Screen name="Snake" component={SnakeScreen}/> */}
            <Stack.Screen name="Turtle Shells" component={TurtleScreen}/>
            <Stack.Screen name="Herpetology" component={InterviewOne}/>
            <Stack.Screen name="Science Communication" component={InterviewTwo}/>
            <Stack.Screen name="Project MORPH!" component={InterviewThree}/>
          </Stack.Navigator>
      </NavigationContainer>
    </TimerContext.Provider>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  textContainer: { 
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#4F6F18',
    marginTop: 40,
    width: '90%',
    borderRadius: 10,
  },
  basetext: { 
    fontSize: 30,
    color: 'white', 
    marginBottom: 20, 
    // padding: 10, 
    fontFamily: 'Eurostile', 
    textAlign: 'center',
  }, 
  subtitle: { 
    fontSize: 30, 
    color: 'white',
    marginBottom: 20, 
    padding: 10, 
    textAlign: 'center',
    fontFamily: 'AG',
  },
  images: { 
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#B4D88B',
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
    shadowOffset: {width: 0, height: 2},
    borderRadius: 10,
  },
  video: {
    alignSelf: 'center',
    width: 675,
    height: 400,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#B4D88B',
    width: DEVICE_WIDTH * .50,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  screensaver: { 
    position: "absolute", 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0, 
    alignItems: 'stretch', 
    zIndex: 2, 
  }
});



