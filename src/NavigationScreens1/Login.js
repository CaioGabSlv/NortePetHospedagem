import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const Login = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.hotelIconView}>
                <Image source={require('../../assets/images/logoClient.png')} style={styles.hotelIcon}/>
            </View>
            <Text style={styles.containerText}>
                Login
            </Text>
            <Text style={styles.containerTextAlt}>
                Email
            </Text>
            <SafeAreaView style={styles.inputTextBox}>
                <TextInput
                    style={styles.textInput}
                    outlineColor='#000'
                    cursorColor='#000'
                    selectionColor='#000'
                    underlineColor='#000'
                    activeUnderlineColor='#000'
                    activeOutlineColor='#000'
                    placeholder='Ex: usuario@gmail.com'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                Senha
            </Text>
            <SafeAreaView style={styles.inputTextBox}>
                <TextInput
                    style={styles.textInput}
                    outlineColor='#000'
                    cursorColor='#000'
                    selectionColor='#000'
                    underlineColor='#000'
                    activeUnderlineColor='#000'
                    activeOutlineColor='#000'
                    placeholder='********'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.continueButtonContainer}>
                <Button
                buttonColor='#904500'
                style={{borderRadius: 4}}
                labelStyle={styles.textContinueButton}
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate('Home')}>
                    Entrar
                </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonRowContainer}>
                <Button
                labelStyle={styles.textButtonRow}
                textColor='#000'
                mode="text"
                onPress={() => navigation.navigate('PasswordRecovery')}>
                    Esqueçeu a senha?
                </Button>
                <Button
                labelStyle={styles.textButtonRow}
                textColor='#000'
                mode="text"
                onPress={() => navigation.navigate('RegisterUser')}>
                    Criar uma conta
                </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.loginHotelButton}>
                <Button
                labelStyle={styles.textButtonRow}
                textColor='#000'
                mode="text"
                onPress={() => navigation.navigate('LoginHotel')}>
                    Login para hoteis e cuidadores
                </Button>
            </SafeAreaView>
            <SafeAreaView pointerEvents='none' style={styles.bottomImageView}>
                <Image source={require('../../assets/images/screenBttmIntro.png')} style={styles.bottomImage}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingTop: 84,
        backgroundColor: '#d39C69',
    },
    returnButton: {
        marginRight: 285,
        marginTop: 45,
        left: 10,
    },
    textReturnButton: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    hotelIconView: {
        paddingHorizontal: 105,
        paddingTop: 25,
    },
    hotelIcon: {
        aspectRatio: 1,
    },
    containerText: {
        paddingHorizontal: 50,
        fontFamily: 'InterRegular',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    containerTextAlt: {
        paddingHorizontal: 50,
        fontFamily: 'InterRegular',
        fontWeight: '600',
        fontSize: 20,
    },
    inputTextBox: {
        paddingVertical: 5,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textInput: {
        backgroundColor: '#fff',
        fontFamily: 'InterRegular',
        fontSize: 20,
    },
    continueButtonContainer: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textContinueButton: {
        fontFamily: 'InterRegular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 35,
    },
    textButtonRow: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    loginHotelButton: {
        paddingHorizontal: 75,
    },
    bottomImageView: {
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '30%',
    },
    bottomImage: {
        width: '100%',
        height: '100%',
        top: '0%',
    },
})

export default Login;