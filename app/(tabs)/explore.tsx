import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, Linking } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import { JosefinSans_300Light, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import {Marcellus_400Regular } from '@expo-google-fonts/marcellus';
import {Jost_400Regular } from '@expo-google-fonts/jost';
import {Urbanist_400Regular } from '@expo-google-fonts/urbanist';




export default function TabTwoScreen() {

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

  const LinkedInlink = async () => {
    // Exemplo de uso
    const profileId = ""; // Substitua pelo ID do perfil desejado
    try {
      const linkedInUrl = `linkedin://profile/maria-eduarda-rocha-4b6618314/`;
      const isInstalled = await Linking.canOpenURL(linkedInUrl);

      if (isInstalled) {
        await Linking.openURL(linkedInUrl);
      } else {
        // Se o aplicativo não estiver instalado, redirecione para o perfil na web
        const webUrl = `https://www.linkedin.com/in/maria-eduarda-rocha-4b6618314/`;
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

  const AbrirEmailApp = async () => {
    const email = "dudarochapedro@gmail.com";
    const subject = "Assunto importante! Me dá MB Grazi.";
    const body = "Olá, tudo bem?";
  
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    try {
      await Linking.openURL(mailtoUrl);
    } catch (error) {
      console.error("Erro ao abrir o cliente de e-mail:", error);
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F2E7FF', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/minhafoto.png')}
        style={styles.reactLogo}
      />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{fontFamily: 'Jost_400Regular', color: '#4E3072', padding: 3, marginLeft: 80,}}>
          Redes Sociais!
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={{marginLeft: 25, fontFamily: 'Jost_400Regular', fontSize: 18, color: '#4E3072'}}>Maria Eduarda S. Rocha, 3° Informática </ThemedText>
      </ThemedView>


      <TouchableOpacity  onPress={LinkedInlink} >
          <ThemedView style={styles.botao} >
          <Image
                source={require("@/assets/images/linkedin.png")}
                style={styles.imagembotao}
          />
          <ThemedView style={{marginLeft: 50,}}>
            <ThemedText style={styles.texto}>LinkedIn</ThemedText>
          </ThemedView>
          </ThemedView>
      </TouchableOpacity>

        <TouchableOpacity  onPress={GitHubLink}>
          <ThemedView style={styles.botao} >
          <Image
                source={require("@/assets/images/github.png")}
                style={styles.imagembotao}
          />
            <ThemedView style={{marginLeft: 52,}} >
            <ThemedText style={styles.texto}>Github</ThemedText>
            </ThemedView>
          </ThemedView>
          
        </TouchableOpacity>

        <TouchableOpacity  onPress={WhatsAppLink}> 
          <ThemedView style={styles.botao}>
          <Image
                source={require("@/assets/images/whats.png")}
                style={styles.imagembotao}
          />
            <ThemedView style={{marginLeft: 39,}}>
            <ThemedText style={styles.texto}>WhatsApp</ThemedText>
            </ThemedView>
            
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity  onPress={fazerChamada}>
          <ThemedView style={styles.botao} >
          <Image
                source={require("@/assets/images/telefone.png")}
                style={styles.imagembotao}
          />
          <ThemedView style={{marginLeft: 45,}} >
            <ThemedText style={styles.texto}>Telefone</ThemedText>
          </ThemedView>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity onPress={AbrirEmailApp} >
          <ThemedView style={styles.botao} >
          <Image
                source={require("@/assets/images/gmail.png")}
                style={styles.imagembotao}
          />
          <ThemedView style={{marginLeft: 55,}} >
            <ThemedText style={styles.texto}>E-mail</ThemedText>
          </ThemedView>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity onPress={InstagramLink}>
          <ThemedView style={styles.botao}>
          <Image
                source={require("@/assets/images/instagram.png")}
                style={styles.imagembotao}
          />
          <ThemedView style={{marginLeft: 45,}}>
            <ThemedText style={styles.texto}>Instagram</ThemedText>
          </ThemedView>
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
    width: 300,
    height: 50,
    alignItems: 'center',
   
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#6B3F9F',
    flexDirection: 'row',
  },
  imagembotao: {
    height: 42,
    width: 42,
    marginRight: 10,
    backgroundColor: '#F2E7FF',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  texto: {
    backgroundColor: '#F2E7FF',
    fontFamily: 'Jost_400Regular',
    fontSize: 19,
    color: '#6B3F9F'
  },
  reactLogo: {
    height: 200,
    width: 200,
    bottom: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
});
