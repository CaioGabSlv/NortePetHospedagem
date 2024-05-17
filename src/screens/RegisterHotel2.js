import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import RegisterHotelStyles from "../../components/styles/RegisterHotelStyles";

const RegisterHotel2 = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={RegisterHotelStyles.containerMain}>
      <View style={RegisterHotelStyles.containerHeader}>
        <Button
          style={RegisterHotelStyles.returnButton}
          labelStyle={RegisterHotelStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("RegisterHotel")}
        >
          Voltar
        </Button>
      </View>
      <View style={RegisterHotelStyles.containerMiddle}>
        <Text style={RegisterHotelStyles.containerText}>Cadastro de Hotel</Text>
        <Text style={RegisterHotelStyles.containerTextAlt}>
          Número de telefone
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
            placeholder="Ex: (92) 99 881-1010"
            keyboardType="number-pad"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>Email</Text>
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
            placeholder="Ex: hotel@gmail.com"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>Senha</Text>
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
            placeholder="********"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={RegisterHotelStyles.containerTextAlt}>
          Confirmar senha
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
            placeholder="********"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={RegisterHotelStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={RegisterHotelStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterHotel3")}
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

export default RegisterHotel2;
