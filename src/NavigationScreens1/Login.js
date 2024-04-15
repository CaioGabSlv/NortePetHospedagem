import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';

const Login = ({ navigation }) => {

    const [text, setText] = React.useState("");

    return (
        <View style={styles.containerMain}>
            <View style={styles.imageLogo}>
                <Image source={require('../../assets/images/logoClient.png')}
                />
            </View>
            <Text style={styles.containerText}>
                Entrar
            </Text>
            <SafeAreaView style={styles.inputText}>
                <TextInput
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />

            </SafeAreaView>
            <SafeAreaView style={styles.inputText2}>
                <TextInput
                    label="Senha"
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer}>
                <Button
                    buttonColor='#904500'
                    mode="contained"
                    onPress={() => console.log('Pressed')}>
                    Continuar
                </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonRecoveryPassword}>
                <Button
                    textColor='black'
                    mode="text"
                    onPress={() => console.log('Pressed')}>
                    Esqueceu a senha?
                </Button>
                <Button
                    textColor='black'
                    mode="text"
                    onPress={() => console.log('Pressed')}>
                    Criar uma conta
                </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonCreateAccountHotel}>
                <Button
                    textColor='black'
                    mode="text"
                    onPress={() => navigation.navigate('RegisterHotel')}>
                    Login para hotéis e cuidadores
                </Button>
            </SafeAreaView>
            <Image source={require('../../assets/images/screenBttmIntro.png')} style={styles.pawImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#d39C69',
    },
    imageLogo: {
        paddingHorizontal: 100,
        paddingTop: 100,
    },
    containerText: {
        paddingHorizontal: 50,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    inputText: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
        marginVertical: 5,
    },
    inputText2: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 30,
    },
    buttonRecoveryPassword: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonCreateAccountHotel: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pawImage: {
        aspectRatio: 1,
        width: '100%',
        height: '55%',
        bottom: 130,
    },
})



export default Login;