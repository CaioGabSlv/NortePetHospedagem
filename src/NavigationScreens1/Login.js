import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons';

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
            icon="login"
            mode="contained"
            onPress={() => console.log('Pressed')}>
                Continuar
            </Button>
            </SafeAreaView>
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
})



export default Login;