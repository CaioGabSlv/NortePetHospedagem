import {View, SafeAreaView, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import RegisterComplStyles from '../../components/styles/RegisterComplStyles';

const PasswordRecoveryCompl = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={RegisterComplStyles.containerMain}>
            <View style={RegisterComplStyles.containerHeader}>
            </View>
            <View style={RegisterComplStyles.containerMiddle}>
                <SafeAreaView style={RegisterComplStyles.pawIconView}>
                    <Image source={require('../../assets/images/paw.png')} style={RegisterComplStyles.pawIcon}/>
                </SafeAreaView>
                <Text style={RegisterComplStyles.containerText}>
                    Sua senha foi alterada com sucesso!
                </Text>
                <SafeAreaView style={RegisterComplStyles.loginButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={RegisterComplStyles.textLoginButton}
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}>
                        Voltar à tela de login
                    </Button>
                </SafeAreaView>
            </View>
            <View style={RegisterComplStyles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={RegisterComplStyles.screenBottomImage}/>
            </View>
        </View>
    );
}

export default PasswordRecoveryCompl;