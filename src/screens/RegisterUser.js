import {View, SafeAreaView, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import RegisterUserStyles from '../../components/styles/RegisterUserStyles';

const RegisterUser = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={RegisterUserStyles.containerMain}>
            <View style={RegisterUserStyles.containerHeader}>
                <Button
                style={RegisterUserStyles.returnButton}
                labelStyle={RegisterUserStyles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('Login')}>
                    Voltar
                </Button>
            </View>
            <View style={RegisterUserStyles.containerMiddle}>
                <Text style={RegisterUserStyles.containerText}>
                    Cadastro de Usuário
                </Text>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Nome
                </Text>
                <SafeAreaView style={RegisterUserStyles.inputTextBox}>
                    <TextInput
                        style={RegisterUserStyles.textInput}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: Felipe'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Sobrenome
                </Text>
                <SafeAreaView style={RegisterUserStyles.inputTextBox}>
                    <TextInput
                        style={RegisterUserStyles.textInput}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: Silva'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    CPF
                </Text>
                <SafeAreaView style={RegisterUserStyles.inputTextBox}>
                    <TextInput
                        style={RegisterUserStyles.textInput}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: 111.222.333-44'
                        keyboardType='number-pad'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Endereço
                </Text>
                <SafeAreaView style={RegisterUserStyles.inputTextBox}>
                    <TextInput
                        style={RegisterUserStyles.textInput}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: Rua N°15, Bairro A'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Número de celular
                </Text>
                <SafeAreaView style={RegisterUserStyles.inputTextBox}>
                    <TextInput
                        style={RegisterUserStyles.textInput}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: (92) 99 772-3344'
                        keyboardType='number-pad'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <SafeAreaView style={RegisterUserStyles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={RegisterUserStyles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterUser2')}>
                        Continuar
                    </Button>
                </SafeAreaView>
            </View>
            <View style={RegisterUserStyles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={RegisterUserStyles.screenBottomImage}/>
            </View>
        </View>
    );
}

export default RegisterUser;