import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterHotel2 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
                <Button
                style={styles.returnButton}
                labelStyle={styles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterHotel')}>
                    Voltar
                </Button>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.containerText}>
                    Cadastro de Hotel
                </Text>
                <Text style={styles.containerTextAlt}>
                    Número de telefone
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
                        placeholder='Ex: (92)99 881-1010'
                        keyboardType='number-pad'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
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
                        placeholder='Ex: hotel@gmail.com'
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
                <Text style={styles.containerTextAlt}>
                    Confirmar senha
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
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterHotel3')}>
                        Continuar
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
        flex: 0.15,
        alignItems: 'center',
        backgroundColor: '#d39c69'
    },
    containerMiddle: {
        flex: 1,
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    containerFooter: {
        flex: 0.225,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    returnButton: {
        marginTop: 55,
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
        marginVertical: 5,
    },
    containerTextAlt: {
        width: '80%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontWeight: '600',
        fontSize: 20,
    },
    inputTextBox: {
        paddingVertical: 5,
        width: '80%',
        height: '10%',
    },
    textInput: {
        backgroundColor: '#fff',
        fontFamily: 'InterRegular',
        fontSize: 20,
    },
    continueButtonContainer: {
        top: '2.5%',
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

export default RegisterHotel2;