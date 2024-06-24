import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import RegisterHotelStyles from "../../components/styles/RegisterHotelStyles";

const RegisterHotel3 = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={RegisterHotelStyles.containerScreen}>
      <View style={RegisterHotelStyles.containerHeader}>
        <Button
          style={RegisterHotelStyles.returnButton}
          labelStyle={RegisterHotelStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("RegisterHotel2")}
        >
          Voltar
        </Button>
      </View>
      <View style={RegisterHotelStyles.containerMain}>
        <Text style={RegisterHotelStyles.containerText}>Cadastro de Hotel</Text>
        <Text style={RegisterHotelStyles.containerTextSub}>
          Qual o valor da diária do hotel?
        </Text>
        <SafeAreaView style={RegisterHotelStyles.buttonRowContainer}>
          <Text style={RegisterHotelStyles.textMoney}>R$</Text>
          <SafeAreaView style={RegisterHotelStyles.inputHotelRateTextBox}>
            <TextInput
              style={RegisterHotelStyles.textInput}
              outlineColor="#000"
              cursorColor="#000"
              selectionColor="#000"
              underlineColor="#000"
              activeUnderlineColor="#000"
              activeOutlineColor="#000"
              placeholderTextColor={"#bbb"}
              placeholder="Ex: 50,00 "
              keyboardType="number-pad"
              onChangeText={(text) => setText(text)}
            />
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={RegisterHotelStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterHotelStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterHotel4")}
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

export default RegisterHotel3;
