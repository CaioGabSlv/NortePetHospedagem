import {View, SafeAreaView, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const LoginHotel = ({ navigation }) => {

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
                onPress={() => navigation.navigate('IntroScreen')}>
                    Voltar
                </Button>
                <Image source={require('../../assets/images/logo-hotel.png')} style={styles.hotelImage}/>
                <Text style={styles.mainText}>
                    Entrar
                </Text>
                <Text style={styles.inputLabelText}>
                    Email
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='hotel@gmail.com'
                value={text}
                onChangeText={text => setText(text)}>
                </TextInput>
                <Text style={styles.inputLabelText}>
                    Senha
                </Text>
                <TextInput
                underlineColor='#000'
                activeUnderlineColor='#000'
                outlineColor='#000'
                textColor='#000'
                style={styles.textInput}
                placeholder='********'
                value={text}
                onChangeText={text => setText(text)}>
                </TextInput>
                <Button
                mode="text"
                buttonColor='#904500'
                textColor='#fff'
                style={styles.loginButton}
                labelStyle={styles.textLoginButton}
                onPress={() => navigation.navigate('HomeHotel')}>
                    Login
                </Button>
                <View style={styles.containerButtonsBottom}>
                    <Button
                    mode="text"
                    textColor='#000'
                    labelStyle={styles.textPasswordRecovery}
                    onPress={() => navigation.navigate('PasswordRecovery')}>
                        Esqueceu a senha?
                    </Button>
                    <Button
                    mode="text"
                    textColor='#000'
                    labelStyle={styles.textPasswordRecovery}
                    onPress={() => navigation.navigate('RegisterHotel')}>
                        Criar uma conta
                    </Button>
                </View>
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
    containerButtonsBottom: {
        flexDirection: 'row',
        top: '4%',
        gap: 55,
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
    hotelImage: {
        aspectRatio: 3/3,
        width: '52%',
        height: '30%',
    },
    mainText: {
        right: '27%',
        fontSize: 30,
        fontFamily: 'InterRegular',
        fontWeight: 'bold',
    },
    inputLabelText: {
        right: '31%',
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: '600',
    },
    textInput: {
        width: '75%',
        height: 50,
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: '600',
        backgroundColor: '#fff'
    },
    loginButton: {
        width: '75%',
        height: '6%',
        top: '2%',
        borderRadius: 5,
        justifyContent: 'center',
    },
    textLoginButton: {
        fontSize: 20,
        fontFamily: 'InterRegular',
        fontWeight: 'bold',
    },
    textPasswordRecovery: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
        textAlign: 'left',
    },
    screenBottomImage: {
        alignItems: 'center',
        width: '100%',
        height: '125%',
    },
})

export default LoginHotel;