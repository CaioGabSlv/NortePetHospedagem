// Definições de estilo para as telas de cadastro de hotel

import { StyleSheet, StatusBar } from "react-native";

const RegisterHotelStyles = StyleSheet.create({
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
    flex: 0.15,
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
  containerText: {
    width: "80%",
    textAlign: "left",
    fontFamily: "InterRegular",
    fontSize: 30,
    fontWeight: "bold",
  },
  containerTextSub: {
    paddingHorizontal: 35,
    textAlign: "center",
    fontFamily: "InterRegular",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: "3.5%",
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
  textMoney: {
    width: "15%",
    right: "50%",
    marginTop: "3%",
    fontFamily: "InterRegular",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputHotelRateTextBox: {
    width: "30%",
    right: "50%",
  },
  buttonRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: 10,
    width: "40%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#500808",
  },
  imageContainer2: {
    borderRadius: 10,
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b27339",
  },
  inputHotelDescrTextBox: {
    aspectRatio: 1,
    width: "55%",
    height: "55%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textInputHotelDescr: {
    width: "95%",
    textAlign: "left",
    fontFamily: "InterRegular",
    fontSize: 20,
    backgroundColor: "#efefef",
  },
  chooseImageButtonContainer: {
    top: "2.5%",
    width: "80%",
    height: "10%",
  },
  continueButtonContainer: {
    top: "1%",
    width: "80%",
    height: "10%",
  },
  textContinueButton: {
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

export default RegisterHotelStyles;
