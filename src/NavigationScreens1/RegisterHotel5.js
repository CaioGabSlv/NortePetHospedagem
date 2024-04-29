import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterHotel5 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
                <Button
                style={styles.returnButton}
                labelStyle={styles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterHotel4')}>
                    Voltar
                </Button>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.containerText}>
                    Cadastro de Hotel
                </Text>
                <Text style={styles.containerTextSub}>
                    Como descreveria o seu hotel para possíveis clientes?
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
                        placeholder='Ex: Descrição de hotel'
                        multiline={true}
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <SafeAreaView style={styles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={styles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterHotelEmailConf')}>
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
        paddingHorizontal: 25,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    inputTextBox: {
        aspectRatio: 1,
        width: '51%',
        height: '51%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textInput: {
        width: '95%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontSize: 20,
        backgroundColor: '#efefef',
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

export default RegisterHotel5;