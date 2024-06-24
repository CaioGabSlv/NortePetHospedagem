// Definições de estilo para as telas de cadastro completo

import { StyleSheet, StatusBar } from "react-native";

const RegisterComplStyles = StyleSheet.create({
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
    gap: 5,
    alignItems: "center",
    backgroundColor: "#d39c69",
    zIndex: 1,
  },
  containerFooter: {
    flex: 0.25,
    alignItems: "center",
    backgroundColor: "#d39c69",
  },
  pawIconView: {
    paddingHorizontal: 100,
    paddingTop: 10,
  },
  pawIcon: {
    aspectRatio: 1,
  },
  containerText: {
    width: "70%",
    textAlign: "center",
    fontFamily: "InterRegular",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  loginButtonContainer: {
    width: "80%",
    height: "10%",
  },
  textLoginButton: {
    fontFamily: "InterRegular",
    fontSize: 20,
    fontWeight: "bold",
  },
  screenBottomImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});

export default RegisterComplStyles;
