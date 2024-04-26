import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterUser = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <Button
            style={styles.returnButton}
            labelStyle={styles.textReturnButton}
            icon='keyboard-backspace'
            mode='text'
            onPress={() => navigation.navigate('Login')}>
                Voltar
            </Button>
            <Text style={styles.containerText}>
                Cadastro de Usuário
            </Text>
            <Text style={styles.containerTextAlt}>
                Nome
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
                    placeholder='Ex: Felipe'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                Sobrenome
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
                    placeholder='Ex: Silva'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                CPF
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
                    placeholder='Ex: 111.222.333-44'
                    keyboardType='number-pad'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                Endereço
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
                    placeholder='Ex: Rua N°15, Bairro A'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <Text style={styles.containerTextAlt}>
                Número de celular
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
                    placeholder='Ex: (92)99 772-3344'
                    keyboardType='number-pad'
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.continueButtonContainer}>
                <Button
                buttonColor='#904500'
                style={{borderRadius: 4}}
                labelStyle={styles.textContinueButton}
                mode="contained"
                onPress={() => navigation.navigate('RegisterUser2')}>
                    Continuar
                </Button>
            </SafeAreaView>
            <SafeAreaView pointerEvents='none' style={styles.bottomImageView}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={styles.bottomImage}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
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
    bottomImageView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '25%',
    },
    bottomImage: {
        width: '100%',
        height: '100%',
        top: '20%',
    },
})

export default RegisterUser;