import {View, SafeAreaView, StyleSheet, Image, Text, StatusBar} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

const PasswordRecoveryCompl = ({ navigation }) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
            </View>
            <View style={styles.containerMiddle}>
                <SafeAreaView style={styles.pawIconView}>
                    <Image source={require('../../assets/images/paw.png')} style={styles.pawIcon}/>
                </SafeAreaView>
                <Text style={styles.containerText}>
                    Sua senha foi alterada com sucesso!
                </Text>
                <SafeAreaView style={styles.loginButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={styles.textLoginButton}
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}>
                        Voltar à tela de login
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
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39c69',
        zIndex: 1,
    },
    containerFooter: {
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    pawIconView: {
        paddingHorizontal: 100,
        paddingTop: 10,
    },
    pawIcon: {
        aspectRatio: 1,
    },
    containerText: {
        width: '70%',
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    loginButtonContainer: {
        width: '80%',
        height: '10%',
    },
    textLoginButton: {
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

export default PasswordRecoveryCompl;