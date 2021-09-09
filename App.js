import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Video, AVPlaybackStatus } from 'expo-av';

const crocodile = require('./images/crocodile.jpg')
const snake = require('./images/snake.jpg')
const turtle = require('./images/turtle.jpg')

// async function changeScreenOrientation() {  
// await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
// }

const WelcomeScreen = () => { 

  const navigation = useNavigation()

  return ( 
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.basetext}>Welcome to the interactive nature lab! </Text>
      <Text style={styles.subtitle}>Click below to learn more about each animal</Text>
      {/* <Button title="Hear from Researchers" color='black' onPress={() => navigation.navigate('Videos')}></Button> */}
    </View>
    <View>
    <Pressable style={styles.button} onPress={() => navigation.navigate('Videos')}>
      <Text style={styles.text}>Hear from Researchers</Text>
    </Pressable>
    </View>
    {/* <StatusBar style="auto" /> */}

    <View style={styles.images}>
      <TouchableOpacity onPress={() => navigation.navigate('Crocodile')}>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10 }} source={ crocodile }></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Snake')}>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={ snake }></Image>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => navigation.navigate('Turtle')}>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={turtle}></Image>
      </TouchableOpacity>
    </View>  
</View>
)}

const Videos = () => {
  const navigation = useNavigation()
  return (
    <View>
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
  const [status, setStatus] = React.useState({});
  return (
  <View style={styles.container}>
  <Video
    ref={video}
    style={styles.video}
    source={{
      uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    }}
    useNativeControls
    resizeMode="contain"
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
    const [status, setStatus] = React.useState({});
    return (
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      useNativeControls
      resizeMode="contain"
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
      const [status, setStatus] = React.useState({});
      return (
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
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

const CrocodileScreen = () => (
  <View>
    <Text>Crocodile</Text>
  </View>
)

const SnakeScreen = () => (
  <WebView
  scalesPageToFit={false}
  originWhitelist={['*']}
  source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSRDsWJJwV3olvZ-XDfk0WdBW0d0NI0Y6MYI1v0f_GWQWQ5LvkVZ4vDNoZBcdiS_A/embed?start=true&loop=true&delayms=10000" frameborder="0" width="960" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'}}
  />
)

const TurtleScreen = () => (
  <WebView
  style={{}}
  scalesPageToFit={false}
  originWhitelist={['*']}
  source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSodfDfxO2V3g8c7I2w6rjPp7bwrHPA1XT9DPH8D0d9fTOdQjjbGDK27qYf6nMfPw/embed?start=true&loop=true&delayms=10000" frameborder="0" width="1181" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>' }}
   />
)

const Stack = createStackNavigator();

export default props => {
  let [fontsLoaded] = useFonts({
    'Eurostile': require('./assets/fonts/EurostileLTStd-Bold.otf'),
    'AG': require('./assets/fonts/AGaramondPro-Regular.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Videos"  component={Videos}/>
          <Stack.Screen name="Crocodile" component={CrocodileScreen}/>
          <Stack.Screen name="Snake" component={SnakeScreen}/>
          <Stack.Screen name="Turtle" component={TurtleScreen}/>
          <Stack.Screen name="InterviewOne" component={InterviewOne}/>
          <Stack.Screen name="InterviewTwo" component={InterviewTwo}/>
          <Stack.Screen name="InterviewThree" component={InterviewThree}/>
        </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: '#4F6F18',
    marginTop: 40,
    width: '90%'
  },
  basetext: { 
    fontSize: 30,
    color: 'white', 
    marginBottom: 20, 
    padding: 10, 
    fontFamily: 'Eurostile', 
    textAlign: 'center',
  }, 
  subtitle: { 
    fontSize: 20, 
    color: 'white',
    marginBottom: 20, 
    padding: 10, 
    textAlign: 'center',
    fontFamily: 'AG',
  },
  images: { 
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
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});



