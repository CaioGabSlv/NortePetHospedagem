import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import PasswordRecStyles from "../../components/styles/PasswordRecStyles";

const PasswordRecovery = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={PasswordRecStyles.containerMain}>
      <View style={PasswordRecStyles.containerHeader}>
        <Button
          style={PasswordRecStyles.returnButton}
          labelStyle={PasswordRecStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("Login")}
        >
          Voltar
        </Button>
      </View>
      <View style={PasswordRecStyles.containerMiddle}>
        <Text style={PasswordRecStyles.containerText}>
          Recuperação de senha
        </Text>
        <Text style={PasswordRecStyles.containerTextSub}>
          Digite o seu endereço de email abaixo e lhe enviaremos as instruções
          para a recuperação de sua senha
        </Text>
        <Text style={PasswordRecStyles.containerTextAlt}>Email</Text>
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
            placeholder="Ex: usuario@gmail.com"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={PasswordRecStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={PasswordRecStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("PasswordRecovery2")}
          >
            Enviar
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

export default PasswordRecovery;
