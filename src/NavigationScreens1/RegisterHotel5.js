import {View, SafeAreaView, Image, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import RegisterHotelStyles from '../../components/styles/RegisterHotelStyles';

const RegisterHotel5 = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={RegisterHotelStyles.containerMain}>
            <View style={RegisterHotelStyles.containerHeader}>
                <Button
                style={RegisterHotelStyles.returnButton}
                labelStyle={RegisterHotelStyles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterHotel4')}>
                    Voltar
                </Button>
            </View>
            <View style={RegisterHotelStyles.containerMiddle}>
                <Text style={RegisterHotelStyles.containerText}>
                    Cadastro de Hotel
                </Text>
                <Text style={RegisterHotelStyles.containerTextSub}>
                    Como descreveria o seu hotel para possíveis clientes?
                </Text>
                <SafeAreaView style={RegisterHotelStyles.inputHotelDescrTextBox}>
                    <TextInput
                        style={RegisterHotelStyles.textInputHotelDescr}
                        outlineColor='#000'
                        cursorColor='#000'
                        selectionColor='#000'
                        underlineColor='#000'
                        activeUnderlineColor='#000'
                        activeOutlineColor='#000'
                        placeholderTextColor={'#bbb'}
                        placeholder='Ex: Descrição de hotel'
                        multiline={true}
                        onChangeText={text => setText(text)}
                    />
                </SafeAreaView>
                <SafeAreaView style={RegisterHotelStyles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={RegisterHotelStyles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterHotelEmailConf')}>
                        Continuar
                    </Button>
                </SafeAreaView>
            </View>
            <View style={RegisterHotelStyles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={RegisterHotelStyles.screenBottomImage}/>
            </View>
        </View>
    );
}

export default RegisterHotel5;