import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';

const RegisterCompleted = ({ navigation }) => {
    return (
        <View style={styles.containerMain}>
            <SafeAreaView style={styles.pawIconView}>
                <Image source={require('../../assets/images/paw.png')} style={styles.pawIcon}/>
            </SafeAreaView>
            <Text style={styles.containerText}>
                Sua conta foi ativada com sucesso!
            </Text>
            <SafeAreaView style={styles.loginButtonContainer}>
                <Button
                buttonColor='#904500'
                style={{borderRadius: 4}}
                labelStyle={styles.textLoginButton}
                mode="contained"
                onPress={() => navigation.navigate('Login')}>
                    Voltar à tela de login
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
        paddingTop: 84,
    },
    pawIconView: {
        paddingHorizontal: 100,
        paddingTop: 10,
    },
    pawIcon: {
        aspectRatio: 1,
    },
    containerText: {
        paddingHorizontal: 50,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    loginButtonContainer: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textLoginButton: {
        fontFamily: 'InterRegular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bottomImageView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '30%',
    },
    bottomImage: {
        width: '100%',
        height: '100%',
        top: '100%',
    },
})

export default RegisterCompleted;