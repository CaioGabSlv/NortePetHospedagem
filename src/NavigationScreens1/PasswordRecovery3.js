import {View, SafeAreaView, StyleSheet, Image, Text, StatusBar} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const PasswordRecovery3 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
            </View>
            <View style={styles.containerMiddle}>
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
                        placeholderTextColor={'#bbb'}
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
                        placeholderTextColor={'#bbb'}
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
                    onPress={() => navigation.navigate('PasswordRecoveryCompl')}>
                        Confirmar
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
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    containerText: {
        width: '80%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerTextSub: {
        paddingHorizontal: '10%',
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: '5%',
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

export default PasswordRecovery3;