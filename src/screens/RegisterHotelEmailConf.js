import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import PasswordRecStyles from "../../components/styles/PasswordRecStyles";

const RegisterHotelEmailConf = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={PasswordRecStyles.containerScreen}>
      <View style={PasswordRecStyles.containerHeader}></View>
      <View style={PasswordRecStyles.containerMain}>
        <Text style={PasswordRecStyles.containerText}>Cadastro de Hotel</Text>
        <Text style={PasswordRecStyles.containerTextSub}>
          Digite o código enviado ao seu email para ativar sua conta
        </Text>
        <Text style={PasswordRecStyles.containerTextAlt}>Código</Text>
        <SafeAreaView style={PasswordRecStyles.inputTextBox}>
          <TextInput
            style={PasswordRecStyles.textInput}
            outlineColor="#000"
            cursorColor="#000"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#000"
            activeOutlineColor="#000"
            placeholderTextColor={"#bbb"}
            placeholder="Ex: 123456"
            keyboardType="number-pad"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={PasswordRecStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={PasswordRecStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("RegisterCompleted")}
          >
            Confirmar Código
          </Button>
        </SafeAreaView>
      </View>
      <View style={PasswordRecStyles.containerFooter}>
        <Image
          source={require("../../assets/images/screenBottom.png")}
          style={PasswordRecStyles.screenBottomImage}
        />
      </View>
    </View>
  );
};

export default RegisterHotelEmailConf;
