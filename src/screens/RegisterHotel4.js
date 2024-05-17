import { View, SafeAreaView, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";
import RegisterHotelStyles from "../../components/styles/RegisterHotelStyles";

import ImageViewer from "../../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("../../assets/images/iconHotel.png");

const RegisterHotel4 = ({ navigation }) => {
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
    <View style={RegisterHotelStyles.containerMain}>
      <View style={RegisterHotelStyles.containerHeader}>
        <Button
          style={RegisterHotelStyles.returnButton}
          labelStyle={RegisterHotelStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("RegisterHotel3")}
        >
          Voltar
        </Button>
      </View>
      <View style={RegisterHotelStyles.containerMiddle}>
        <Text style={RegisterHotelStyles.containerText}>Cadastro de Hotel</Text>
        <Text style={RegisterHotelStyles.containerTextSub}>
          Escolha uma imagem para apresentar seu hotel!
        </Text>
        <SafeAreaView style={RegisterHotelStyles.imageContainer}>
          <SafeAreaView style={RegisterHotelStyles.imageContainer2}>
            <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
              width={"90%"}
              height={"90%"}
              borderRadius={10}
            />
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={RegisterHotelStyles.chooseImageButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterHotelStyles.textContinueButton}
            mode="contained"
            onPress={pickImageAsync}
          >
            Escolher imagem
          </Button>
        </SafeAreaView>
        <SafeAreaView style={RegisterHotelStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterHotelStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterHotel5")}
          >
            Continuar
          </Button>
        </SafeAreaView>
      </View>
      <View style={RegisterHotelStyles.containerFooter}>
        <Image
          source={require("../../assets/images/screenBottom.png")}
          style={RegisterHotelStyles.screenBottomImage}
        />
      </View>
    </View>
  );
};

export default RegisterHotel4;
