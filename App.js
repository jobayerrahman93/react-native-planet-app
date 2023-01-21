import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import PlanetDetails from './src/screens/PlanetDetails';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {


  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
          'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        });
      
        await new Promise(resolve => setTimeout(resolve,2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  
  return (

    
   <>

    <NavigationContainer onReady={onLayoutRootView} >
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="planetDetails" component={PlanetDetails} />
    </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>


    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
