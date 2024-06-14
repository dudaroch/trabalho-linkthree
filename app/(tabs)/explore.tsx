import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, Linking } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';




export default function TabTwoScreen() {
  const LinkedInlink = async () => {
    // Exemplo de uso
    const profileId = ""; // Substitua pelo ID do perfil desejado
    try {
      const linkedInUrl = `linkedin://profile/${profileId}`;
      const isInstalled = await Linking.canOpenURL(linkedInUrl);

      if (isInstalled) {
        await Linking.openURL(linkedInUrl);
      } else {
        // Se o aplicativo não estiver instalado, redirecione para o perfil na web
        const webUrl = `https://www.linkedin.com/in/${profileId}`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error("Erro ao abrir o perfil do LinkedIn:", error);
    }
  };
  const GitHubLink = async () => {
    const githubUrl = "https://github.com/dudaroch"; // Substitua com o URL do seu repositório
    const supported = await Linking.canOpenURL(githubUrl);
    if (supported) {
      await Linking.openURL(githubUrl);
    } else {
      console.error(`Não é possível abrir o URL: ${githubUrl}`);
    }
  };

  const WhatsAppLink = async () => {
    const phoneNumber = "5518997846421"; // Substitua pelo número de telefone no formato internacional
    const message = "Olá, Maria Eduarda!"; // Substitua pela mensagem que deseja enviar
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported) {
      await Linking.openURL(whatsappUrl);
    } else {
      console.error(`Não é possível abrir o URL do WhatsApp: ${whatsappUrl}`);
    }
  };

  const fazerChamada = async () => {
    // Exemplo de uso
    const numero = "18997846421"; // Substitua pelo número desejado
    const url = `tel:${numero}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir o cliente de telefone:", error);
    }
  };

  const InstagramLink = async () => {
    const instagramUrl = "instagram://user?username=_.dudarocha";
    try {
      await Linking.openURL(instagramUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Instagram:", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F2E7FF', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>3° Informática</ThemedText>
      </ThemedView>


      <TouchableOpacity  onPress={LinkedInlink} style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>LinkedIn</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity  onPress={GitHubLink} style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>Github</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity  onPress={WhatsAppLink} style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>WhatsApp</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity  onPress={fazerChamada} style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>Telefone</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>Gmail</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity onPress={InstagramLink} style={styles.botao}>
          <ThemedView >
          </ThemedView>
          <ThemedView >
            <ThemedText style={{ backgroundColor: '#F2E7FF'}}>Instagram</ThemedText>
          </ThemedView>
          <ThemedView >
          </ThemedView>
        </TouchableOpacity>

        

        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  botao: {
    backgroundColor: '#F2E7FF',
        width: 345,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
  }
});
