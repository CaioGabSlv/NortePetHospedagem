import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const RegisterHotel5 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <Button
            style={styles.returnButton}
            labelStyle={styles.textReturnButton}
            icon='keyboard-backspace'
            mode='text'
            onPress={() => navigation.navigate('RegisterHotel4')}>
                Voltar
            </Button>
            <Text style={styles.containerText}>
                Cadastro de Hotel
            </Text>
            <Text style={styles.containerTextSub}>
                Como descreveria o seu hotel para possíveis clientes?
            </Text>
            <SafeAreaView style={styles.imageContainer}>
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
    containerTextSub: {
        paddingHorizontal: 50,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    inputTextBox: {
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInput: {
        width: '100%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontSize: 20,
        backgroundColor: '#efefef',
    },
    imageContainer: {
        aspectRatio: 1,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
    bottomImageView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '25%',
    },
    bottomImage: {
        width: '100%',
        height: '100%',
        top: '2.5%',
    },
})

export default RegisterHotel5;