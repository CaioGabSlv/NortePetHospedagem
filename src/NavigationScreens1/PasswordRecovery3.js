import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const PasswordRecovery3 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <Text style={styles.containerText}>
                Recuperação de senha
            </Text>
            <Text style={styles.containerTextSub}>
                Crie uma nova senha
            </Text>
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
                icon="login"
                mode="contained"
                onPress={() => navigation.navigate('PasswordRecoveryCompl')}>
                    Confirmar
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
    containerText: {
        paddingHorizontal: 50,
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
    textButtonRow: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
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
        top: '90%',
    },
})

export default PasswordRecovery3;