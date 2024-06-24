import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import RegisterHotelStyles from "../../components/styles/RegisterHotelStyles";

const RegisterHotel = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={RegisterHotelStyles.containerScreen}>
      <View style={RegisterHotelStyles.containerHeader}>
        <Button
          style={RegisterHotelStyles.returnButton}
          labelStyle={RegisterHotelStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("LoginHotel")}
        >
          Voltar
        </Button>
      </View>
      <View style={RegisterHotelStyles.containerMain}>
        <Text style={RegisterHotelStyles.containerText}>Cadastro de Hotel</Text>
        <Text style={RegisterHotelStyles.containerTextAlt}>Nome do Hotel</Text>
        <SafeAreaView style={RegisterHotelStyles.inputTextBox}>
          <TextInput
            style={RegisterHotelStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: Hotel Pets"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>Endereço</Text>
        <SafeAreaView style={RegisterHotelStyles.inputTextBox}>
          <TextInput
            style={RegisterHotelStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: Rua N°15, Bairro A"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>
          Número de Endereço
        </Text>
        <SafeAreaView style={RegisterHotelStyles.inputTextBox}>
          <TextInput
            style={RegisterHotelStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: 16"
            keyboardType="number-pad"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>CEP</Text>
        <SafeAreaView style={RegisterHotelStyles.inputTextBox}>
          <TextInput
            style={RegisterHotelStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: 69080-912"
            keyboardType="number-pad"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>CNPJ</Text>
        <SafeAreaView style={RegisterHotelStyles.inputTextBox}>
          <TextInput
            style={RegisterHotelStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: 12.345.678/0001-00"
            keyboardType="number-pad"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={RegisterHotelStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterHotelStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterHotel2")}
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

export default RegisterHotel;
