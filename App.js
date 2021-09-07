import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
  </View>
{/* <StatusBar style="auto" /> */}

<View style={styles.images}>
  <TouchableOpacity onPress={() => navigation.navigate('Crocodile')}>
      <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={ crocodile }></Image>
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

const CrocodileScreen = () => (
  <View>
    <Text>Crocodile</Text>
  </View>
)

const SnakeScreen = () => (
  <View>
    <Text>Snake</Text>
  </View>
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
          <Stack.Screen name="Crocodile" component={CrocodileScreen}/>
          <Stack.Screen name="Snake" component={SnakeScreen}/>
          <Stack.Screen name="Turtle" component={TurtleScreen}/>
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
    width: '90%'
  },
});



