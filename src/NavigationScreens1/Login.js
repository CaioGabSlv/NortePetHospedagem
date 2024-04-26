import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const Login = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>

            </View>
            <View style={styles.containerMiddle}>
                <View style={styles.userIconView}>
                    <Image source={require('../../assets/images/logoClient.png')} style={styles.userIcon}/>
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
            </View>
            <View style={styles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={styles.screenBottomImage}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    containerHeader: {
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: '#d39c69'
    },
    containerMiddle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    containerFooter: {
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#d39c69',
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
    userIconView: {
        paddingHorizontal: 105,
        paddingTop: 10,
    },
    userIcon: {
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
    screenBottomImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
})

export default Login;