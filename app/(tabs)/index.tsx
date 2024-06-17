import { Image, StyleSheet, Platform, Linking, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts, JosefinSans_300Light, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import {Marcellus_400Regular } from '@expo-google-fonts/marcellus';
import {Jost_400Regular } from '@expo-google-fonts/jost';
import {Urbanist_400Regular } from '@expo-google-fonts/urbanist';







export default function HomeScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Marcellus_400Regular,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    Jost_400Regular,
    Urbanist_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F2E7FF', dark: '#6B3F9F' }}
      headerImage={
        <Image
          source={require('@/assets/images/redes.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      <ThemedText type='title' style={{fontFamily: 'Jost_400Regular', color: '#4E3072', padding: 3,}}>Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{fontFamily: 'Jost_400Regular', color: '#4E3072', fontSize: 18,}}>
        Quer se manter atualizado sobre todas as nossas novidades, eventos e conteúdos exclusivos?
        Não deixe de conferir a página ao lado, onde você encontrará os botões que te conectarão às nossas redes sociais.
        Siga-nos para não perder nada do que está por vir e fazer parte da nossa comunidade virtual.
        </ThemedText>
      </ThemedView>
      <ThemedView style={{alignItems: 'center'}}>
      <Image
          source={require('@/assets/images/icon-redes.png')}
          style={styles.icon}
        />
      </ThemedView>

      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#F2E7FF',
    padding: 30,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#6B3F9F'
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: -80,
    left: 0,
    position: 'absolute',
  },
  icon: {
    height: 60,
    width: 60,
    marginTop: 30,
  }
});
