import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';

const crocodile = require('./images/crocodile.jpg')
const snake = require('./images/snake.jpg')
const turtle = require('./images/turtle.jpg')

// async function changeScreenOrientation() {  
// await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
// }

export default props => {
  let [fontsLoaded] = useFonts({
    'Eurostile': require('./assets/fonts/EurostileLTStd-Bold.otf'),
    'AG': require('./assets/fonts/AGaramondPro-Regular.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
      <WebView
      style={{height: 100, width: 100}}
      originWhitelist={['*']}
      source={{ html: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSodfDfxO2V3g8c7I2w6rjPp7bwrHPA1XT9DPH8D0d9fTOdQjjbGDK27qYf6nMfPw/embed?start=true&loop=true&delayms=10000" frameborder="0" width="864" height="1181" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>' }}
    />
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.basetext}>Welcome to the interactive nature lab! </Text>
        <Text style={styles.subtitle}>Click below to learn more about each animal</Text>
      </View>
    {/* <StatusBar style="auto" /> */}
  
    <View style={styles.images}>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={ crocodile }></Image>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={ snake }></Image>
        <Image style={{width:150, height: 150, margin: 5, borderRadius: 10}} source={turtle}></Image>
    </View>  
  </View>
  </>
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
