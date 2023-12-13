import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';

import { Widget } from './src/components';
import { theme } from './src/config';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { colors } = theme;

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  async function hiddenSplash(): Promise<void> {
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    if (!fontsLoaded) hiddenSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <StatusBar
          style='light'
          backgroundColor={colors.transparent}
          translucent
        />

        <Widget />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,

    backgroundColor: colors.background,
  },
});
