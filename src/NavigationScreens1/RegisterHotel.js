import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RegisterHotel = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Button
                mode="text"
                icon={'keyboard-backspace'}
                textColor='#000'
                style={styles.buttonReturn}
                labelStyle={styles.returnText}
                onPress={() => navigation.navigate('LoginHotel')}>
                    Voltar
                </Button>
                <Text style={styles.mainText}>
                    Cadastramento de Hotel
                </Text>
                <Text style={styles.inputLabelText}>
                    Nome do hotel
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='Hotel'
                onChangeText={() => {}}>
                </TextInput>
                <Text style={styles.inputLabelText}>
                    Endereço
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='Rua ABC, Bairro 123'
                onChangeText={() => {}}>
                </TextInput>
                <Text style={styles.inputLabelText}>
                    Número
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='16'
                onChangeText={() => {}}>
                </TextInput>
                <Text style={styles.inputLabelText}>
                    CEP
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='69080-912'
                onChangeText={() => {}}>
                </TextInput>
                <Text style={styles.inputLabelText}>
                    CNPJ
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='12.345.678/0001-00'
                onChangeText={() => {}}>
                </TextInput>
                <Button
                mode="text"
                buttonColor='#904500'
                textColor='#fff'
                style={styles.continueButton}
                labelStyle={styles.textContinueButton}
                onPress={() => navigation.navigate('RegisterHotel2')}>
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
        gap: 4,
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
        right: '18%',
        width: '40%',
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

export default RegisterHotel;