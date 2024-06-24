import { View, SafeAreaView, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";
import RegisterUserStyles from "../../components/styles/RegisterUserStyles";

import ImageViewer from "../../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("../../assets/images/iconClient.png");

const RegisterHotel3 = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  };

  return (
    <View style={RegisterUserStyles.containerScreen}>
      <View style={RegisterUserStyles.containerHeader}>
        <Button
          style={RegisterUserStyles.returnButton}
          labelStyle={RegisterUserStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("RegisterUser2")}
        >
          Voltar
        </Button>
      </View>
      <View style={RegisterUserStyles.containerMain}>
        <Text style={RegisterUserStyles.containerText}>
          Cadastro de Usuário
        </Text>
        <Text style={RegisterUserStyles.containerTextSub}>
          Escolha uma imagem ou foto para a sua foto de perfil!
        </Text>
        <SafeAreaView style={RegisterUserStyles.imageContainer}>
          <SafeAreaView style={RegisterUserStyles.imageContainer2}>
            <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
              width={"90%"}
              height={"90%"}
              borderRadius={180}
            />
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={RegisterUserStyles.chooseImageButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterUserStyles.textContinueButton}
            mode="contained"
            onPress={pickImageAsync}
          >
            Escolher imagem
          </Button>
        </SafeAreaView>
        <SafeAreaView style={RegisterUserStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterUserStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterUserEmailConf")}
          >
            Continuar
          </Button>
        </SafeAreaView>
      </View>
      <View style={RegisterUserStyles.containerFooter}>
        <Image
          source={require("../../assets/images/screenBottom.png")}
          style={RegisterUserStyles.screenBottomImage}
        />
      </View>
    </View>
  );
};

export default RegisterHotel3;
