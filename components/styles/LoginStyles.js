// Definições de estilo para as telas de login

import { StyleSheet, StatusBar } from "react-native";

const LoginStyles = StyleSheet.create({
  containerScreen: {
    flex: 1,
  },
  containerHeader: {
    flex: 0.1,
    alignItems: "center",
    backgroundColor: "#d39c69",
    paddingTop: StatusBar.currentHeight,
  },
  containerMain: {
    flex: 0.8,
    gap: 2,
    alignItems: "center",
    backgroundColor: "#d39c69",
    zIndex: 1,
  },
  containerFooter: {
    flex: 0.25,
    alignItems: "center",
    backgroundColor: "#d39c69",
  },
  returnButton: {
    marginTop: "4%",
    right: "35%",
  },
  textReturnButton: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "InterRegular",
    textDecorationLine: "underline",
  },
  userIconView: {
    paddingHorizontal: "50%",
  },
  userIcon: {
    aspectRatio: 1,
  },
  containerText: {
    width: "80%",
    textAlign: "left",
    fontFamily: "InterRegular",
    fontSize: 30,
    fontWeight: "bold",
  },
  containerTextAlt: {
    width: "80%",
    textAlign: "left",
    fontFamily: "InterRegular",
    fontWeight: "600",
    fontSize: 20,
  },
  inputTextBox: {
    width: "80%",
    height: "10%",
  },
  textInput: {
    backgroundColor: "#fff",
    fontFamily: "InterRegular",
    fontSize: 20,
  },
  continueButtonContainer: {
    top: "2.5%",
    width: "80%",
    height: "10%",
  },
  textContinueButton: {
    fontFamily: "InterRegular",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRowContainer: {
    marginVertical: "1%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
  },
  textButtonRow: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "InterRegular",
    textDecorationLine: "underline",
  },
  screenBottomImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});

export default LoginStyles;
