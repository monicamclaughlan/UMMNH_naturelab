
import React, {useState, useEffect} from 'react';
import { Button, Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Video } from 'expo-av';
import { TimerContext } from './context/screensaver';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './assets/utils';
import PhytosaurStack from './navigation/PhytosaurStack';
import SnakeStack from './navigation/SnakeStack';
import TurtleStack from './navigation/TurtleStack';
import { AntDesign } from '@expo/vector-icons';


const crocodile = require('./images/crocodile.jpg')
const snake = require('./images/DSC_9204.png')
const turtle = require('./images/DSC_0079.png')


const WelcomeScreen = () => { 

 const navigation = useNavigation()

  const {countdownTimer, setCountdownTimer} = React.useContext(TimerContext);
  return (
  <View style={styles.container} onTouchStart={() => {
    setCountdownTimer(300)
  }
  }>
    <View style={[styles.textContainer, {marginTop:40, paddingTop: 20}]}>
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
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Phytosaur')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ crocodile }></Image>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300}}>How do we know </Text>
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, paddingBottom: 20}}>what extinct reptiles ate?</Text>
        </View>
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Snake Fangs')}>
            <Image style={{width:150, height: 150, marginTop: 42, marginBottom: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={ snake }></Image>
          </TouchableOpacity>  
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, paddingBottom: 20, marginBottom: 45}}>How do snake fangs work?</Text>
        </View>
        <View>
          <TouchableOpacity style={{shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Turtle')}>
            <Image style={{width:150, height: 150, margin: 20, borderRadius: 100, alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: 0, height: 2}}} source={turtle}></Image>  
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontFamily: 'AG', color: 'black', fontSize: 24, width: 300, marginBottom: 20}}>What do Michigan turtles look like inside their shells?</Text>
        </View>
      </View>
    </View>  
</View>
)}

const InterviewOne = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  return (
  <View>
    <Video
      ref={video}
      style={{ width, height: 730 }}
      source={require('./assets/videos/morph.mp4')}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={[styles.buttons, {paddingBottom: 10}]}>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, marginRight:20, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => 
        navigation.navigate('Welcome')
        }>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>Home</Text>
      </Pressable>
    </View>
  </View>
)}

  const InterviewTwo = () => {
    const navigation = useNavigation()
    const {width} = Dimensions.get('window')
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    return (
    <View>
    <Video
      ref={video}
      style={{ width, height: 730 }}
      source={require('./assets/videos/morph.mp4')}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={[styles.buttons, {paddingBottom: 10}]}>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, marginRight:20, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Welcome')}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>Home</Text>
      </Pressable>
    </View>
  </View>
    )}

    const InterviewThree = () => {
      const navigation = useNavigation()
      const {width} = Dimensions.get('window')
      const video = React.useRef(null);
      const [status, setStatus] = useState({});
      return (
      <View>
      <Video
        ref={video}
        style={{ width, height: 730 }}
        source={require('./assets/videos/morph.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={[styles.buttons, {paddingBottom: 10}]}>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, marginRight:20, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
      <Pressable style={{backgroundColor: 'green', width: 100, height: 30, marginTop: 2, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, shadowOffset: {width: 0, height: 2}}} onPress={() => navigation.navigate('Welcome')}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>Home</Text>
      </Pressable>
      </View>
    </View>
      )}    

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
    const {width} = Dimensions.get('window')
    return (
      <TouchableOpacity onPress={toggle}>
        <View>
          <Video
              source={require('./assets/videos/morph.mp4')}
              shouldPlay
              isLooping
              resizeMode="contain"
              style={{ width, height: 800 }}
            />
        </View>
      </TouchableOpacity>
  )}


  useEffect(() => {
    if(countdownTimer > 0){ 
      timer = setTimeout( () => {
        setCountdownTimer(countdownTimer - 1);
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
    'AG': require('./assets/fonts/AGaramondPro-Regular.otf'), 
    'Jim': require('./assets/fonts/JimNightshade-Regular.ttf')
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
                  height: 45,
                  backgroundColor: 'transparent', 
                },
                headerBackTitleVisible: false,
                headerBackImage: () => <AntDesign style={{marginLeft: 20}} name="caretleft" size={20} color={'black'}/>
              }}
          > 
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{header: () => null}}/>
            <Stack.Screen name="Phytosaur" component={PhytosaurStack} />
            <Stack.Screen name="Snake Fangs" component={SnakeStack} />
            <Stack.Screen name="Turtle Shells" component={TurtleScreen}/>
            <Stack.Screen name="Turtle" component={TurtleStack} />
            <Stack.Screen name="Herpetology" component={InterviewOne} options={{header: () => null}}/>
            <Stack.Screen name="Science Communication" component={InterviewTwo} options={{header: () => null}}/>
            <Stack.Screen name="Project MORPH!" component={InterviewThree} options={{header: () => null}}/>
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
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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



