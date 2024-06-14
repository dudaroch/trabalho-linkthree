import { Image, StyleSheet, Platform, Linking, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  
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
        <ThemedText type="title">Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Redes Sociais</ThemedText>
        <ThemedText>
        Quer se manter atualizado sobre todas as nossas novidades, eventos e conteúdos exclusivos?
        Não deixe de conferir a página ao lado, onde você encontrará os botões que te conectarão às nossas redes sociais.
        Siga-nos para não perder nada do que está por vir e fazer parte da nossa comunidade virtual. Estamos esperando por você do outro lado!
        </ThemedText>
      </ThemedView>

      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: -80,
    left: 0,
    position: 'absolute',
  },
});
