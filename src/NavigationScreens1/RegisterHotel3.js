import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterHotel3 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
                <Button
                style={styles.returnButton}
                labelStyle={styles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterHotel2')}>
                    Voltar
                </Button>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.containerText}>
                    Cadastro de Hotel
                </Text>
                <Text style={styles.containerTextSub}>
                    Qual o valor da diária do hotel?
                </Text>
                <SafeAreaView style={styles.buttonRowContainer}>
                    <Text style={styles.textMoney}>
                        R$
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
                            placeholder='Ex: 50,00 '
                            keyboardType='number-pad'
                            onChangeText={text => setText(text)}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={styles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterHotel4')}>
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
    containerTextSub: {
        paddingHorizontal: 50,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    textMoney: {
        width: '15%',
        right: '50%',
        marginTop: 17,
        fontFamily: 'InterRegular',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputTextBox: {
        paddingVertical: 5,
        width: '30%',
        right: '50%',
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
    buttonRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    screenBottomImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
})

export default RegisterHotel3;