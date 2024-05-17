import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import PasswordRecStyles from "../../components/styles/PasswordRecStyles";

const PasswordRecovery3 = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={PasswordRecStyles.containerMain}>
      <View style={PasswordRecStyles.containerHeader}></View>
      <View style={PasswordRecStyles.containerMiddle}>
        <Text style={PasswordRecStyles.containerText}>
          Recuperação de senha
        </Text>
        <Text style={PasswordRecStyles.containerTextSub}>
          Crie uma nova senha
        </Text>
        <Text style={PasswordRecStyles.containerTextAlt}>Senha</Text>
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
            placeholder="********"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <Text style={PasswordRecStyles.containerTextAlt}>Confirmar senha</Text>
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
            placeholder="********"
            onChangeText={(text) => setText(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={PasswordRecStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={PasswordRecStyles.textContinueButton}
            mode="contained"
            onPress={() => navigation.navigate("PasswordRecoveryCompl")}
          >
            Confirmar
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

export default PasswordRecovery3;
