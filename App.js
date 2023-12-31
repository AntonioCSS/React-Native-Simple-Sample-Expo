import React from 'react';
import { SafeAreaView, StatusBar, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
      return <View />
  }
 
  return (
    <SafeAreaView style={ {flex: 1,}}>
      <StatusBar /> 
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

