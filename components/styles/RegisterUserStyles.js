// Definições de estilo para as telas de cadastro de usuário

import { StyleSheet, StatusBar } from 'react-native';

const RegisterUserStyles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    containerHeader: {
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: '#d39c69',
        paddingTop: StatusBar.currentHeight,
    },
    containerMiddle: {
        flex: 0.8,
        gap: 2,
        alignItems: 'center',
        backgroundColor: '#d39c69',
        zIndex: 1,
    },
    containerFooter: {
        flex: 0.15,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    returnButton: {
        marginTop: '4%',
        right: '35%',
    },
    textReturnButton: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    containerText: {
        width: '80%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerTextSub: {
        paddingHorizontal: 35,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: '3.5%',
    },
    containerTextAlt: {
        width: '80%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontWeight: '600',
        fontSize: 20,
    },
    inputTextBox: {
        width: '80%',
        height: '10%',
    },
    textInput: {
        backgroundColor: '#fff',
        fontFamily: 'InterRegular',
        fontSize: 20,
    },
    imageContainer: {
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: '45%',
        marginHorizontal: '16%',
        borderRadius: 180,
        backgroundColor: '#500808'
    },
    imageContainer2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '87.5%',
        height: '87.5%',
        borderRadius: 180,
        backgroundColor: '#b27339'
    },
    chooseImageButtonContainer: {
        top: '2.5%',
        width: '80%',
        height: '10%',
    },
    continueButtonContainer: {
        top: '1%',
        width: '80%',
        height: '10%',
    },
    textContinueButton: {
        fontFamily: 'InterRegular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    screenBottomImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
})

export default RegisterUserStyles;