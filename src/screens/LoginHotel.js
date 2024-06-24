import { View, SafeAreaView, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import LoginStyles from "../../components/styles/LoginStyles";

const LoginHotel = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={LoginStyles.containerScreen}>
      <View style={LoginStyles.containerHeader}>
        <Button
          style={LoginStyles.returnButton}
          labelStyle={LoginStyles.textReturnButton}
          icon="keyboard-backspace"
          mode="text"
          onPress={() => navigation.navigate("Login")}
        >
          Voltar
        </Button>
      </View>
      <View style={LoginStyles.containerMain}>
        <View style={LoginStyles.userIconView}>
          <Image
            source={require("../../assets/images/logoHotel.png")}
            style={LoginStyles.userIcon}
          />
        </View>
        <Text style={LoginStyles.containerText}>Login</Text>
        <Text style={LoginStyles.containerTextAlt}>Email</Text>
        <SafeAreaView style={LoginStyles.inputTextBox}>
          <TextInput
            style={LoginStyles.textInput}
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
        <Text style={LoginStyles.containerTextAlt}>Senha</Text>
        <SafeAreaView style={LoginStyles.inputTextBox}>
          <TextInput
            style={LoginStyles.textInput}
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
        <SafeAreaView style={LoginStyles.continueButtonContainer}>
          <Button
            buttonColor="#904500"
            style={{ borderRadius: 4 }}
            labelStyle={LoginStyles.textContinueButton}
            icon="login"
            mode="contained"
            onPress={() => navigation.navigate("HomeHotel")}
          >
            Entrar
          </Button>
        </SafeAreaView>
        <SafeAreaView style={LoginStyles.buttonRowContainer}>
          <Button
            labelStyle={LoginStyles.textButtonRow}
            textColor="#000"
            mode="text"
            onPress={() => navigation.navigate("PasswordRecovery")}
          >
            Esqueçeu a senha?
          </Button>
          <Button
            labelStyle={LoginStyles.textButtonRow}
            textColor="#000"
            mode="text"
            onPress={() => navigation.navigate("RegisterHotel")}
          >
            Criar uma conta
          </Button>
        </SafeAreaView>
      </View>
      <View style={LoginStyles.containerFooter}>
        <Image
          source={require("../../assets/images/screenBottom.png")}
          style={LoginStyles.screenBottomImage}
        />
      </View>
    </View>
  );
};

export default LoginHotel;
