import {View, SafeAreaView, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import RegisterUserStyles from '../../components/styles/RegisterUserStyles';

const RegisterUser2 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={RegisterUserStyles.containerMain}>
            <View style={RegisterUserStyles.containerHeader}>
                <Button
                style={RegisterUserStyles.returnButton}
                labelStyle={RegisterUserStyles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterUser')}>
                    Voltar
                </Button>
            </View>
            <View style={RegisterUserStyles.containerMiddle}>
                <Text style={RegisterUserStyles.containerText}>
                    Cadastro de Usuário
                </Text>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Email
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
                        placeholder='Ex: usuario@gmail.com'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Senha
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
                        placeholder='********'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Confirmar senha
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
                        placeholder='********'
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <SafeAreaView style={RegisterUserStyles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={RegisterUserStyles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterUser3')}>
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

export default RegisterUser2;