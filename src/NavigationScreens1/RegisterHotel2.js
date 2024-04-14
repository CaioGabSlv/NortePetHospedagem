import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterHotel2 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <>
            <View style={styles.container}>
                <Button
                mode="text"
                icon={'keyboard-backspace'}
                textColor='#000'
                style={styles.buttonReturn}
                labelStyle={styles.returnText}
                onPress={() => navigation.navigate('RegisterHotel')}>
                    Voltar
                </Button>
                <Text style={styles.mainText}>
                    Cadastramento de Hotel
                </Text>
                <Text style={styles.inputLabelText}>
                    Número de telefone
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='(92)99 881-1010'
                value={text}
                onChangeText={text => setText(text)}>
                </TextInput>
                <Text style={styles.textHotelRate}>
                    Qual vai ser o valor da diária do hotel?
                </Text>
                <Text style={styles.inputLabelText}>
                    Valor diária
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='R$ 50,00'
                value={text}
                onChangeText={text => setText(text)}>
                </TextInput>
                <Button
                mode="text"
                buttonColor='#904500'
                textColor='#fff'
                style={styles.continueButton}
                labelStyle={styles.textContinueButton}
                onPress={() => navigation.navigate('RegisterHotel3')}>
                    Continuar
                </Button>
            </View>
            <View pointerEvents='none' style={styles.containerBottom}>
                <ImageBackground source={require('../../assets/images/screenBttmIntro.png')} style={styles.screenBottomImage}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39C69',
        paddingVertical: '10%',
    },
    containerBottom: {
        zIndex: 1,
        position: 'absolute',
        top: 540,
        bottom: 0,
        left: 0,
        right: 0,
    },
    buttonReturn: {
        right: '35.5%',
    },
    returnText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    mainText: {
        right: '6%',
        fontSize: 28,
        fontFamily: 'InterRegular',
        fontWeight: 'bold',
    },
    inputLabelText: {
        right: '13%',
        width: '50%',
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: '600',
        textAlign: 'left',
    },
    textInput: {
        width: '75%',
        height: 50,
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: '600',
        backgroundColor: '#fff'
    },
    textHotelRate: {
        width: '70%',
        fontSize: 25,
        fontFamily: 'InterRegular',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    continueButton: {
        width: '75%',
        height: '6%',
        top: '2%',
        borderRadius: 5,
        justifyContent: 'center',
    },
    textContinueButton: {
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: 'bold',
    },
    screenBottomImage: {
        alignItems: 'center',
        width: '100%',
        height: '125%',
    },
})

export default RegisterHotel2;