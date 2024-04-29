import {View, SafeAreaView, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import RegisterUserStyles from '../../components/styles/RegisterUserStyles';

const RegisterUserEmailConf = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={RegisterUserStyles.containerMain}>
            <View style={RegisterUserStyles.containerHeader}>
            </View>
            <View style={RegisterUserStyles.containerMiddle}>
                <Text style={RegisterUserStyles.containerText}>
                    Cadastro de Usuário
                </Text>
                <Text style={RegisterUserStyles.containerTextSub}>
                    Digite o código enviado ao seu email para ativar sua conta
                </Text>
                <Text style={RegisterUserStyles.containerTextAlt}>
                    Código
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
                        placeholder='Ex: 123456'
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
                    onPress={() => navigation.navigate('RegisterCompleted')}>
                        Confirmar Código
                    </Button>
                </SafeAreaView>
            </View>
            <View style={RegisterUserStyles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={RegisterUserStyles.screenBottomImage}/>
            </View>
        </View>
    );
}

export default RegisterUserEmailConf;