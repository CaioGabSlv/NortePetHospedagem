import {View, StyleSheet, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';

const IntroScreen = () => {
    return (
        <View style={styles.containerMain}>
            <Button
            mode="contained"
            buttonColor='#fff'
            textColor='#000'
            style={styles.button}
            labelStyle={styles.textButton}
            onPress={() => console.log('Pressed')}>
                Pular
            </Button>
            <View style={styles.rectangle}>
                <View style={styles.sphereOn}/>
                <View style={styles.sphereOff}/>
                <View style={styles.sphereOff}/>
            </View>
            <Image source={require('../../assets/paw.png')} style={styles.paw}/>
            <Text style={styles.text}>
                Aqui você encontra diversas opções de hospedagem para seu amiguinho de quatro patas
            </Text>
            <Image source={require('../../assets/screenBttmIntro.png')} style={styles.screenBottomImage}/>
        </View>
    );
}

const styles=StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39C69',
        paddingVertical: 40,
    },
    button: {
        
        left: 150,
    },
    textButton: {
        fontSize: 14,
    },
    rectangle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        width: 228,
        height: 45,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#904500',
    },
    sphereOn: {
        backgroundColor: '#904500',
        width: 20,
        height: 20,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
    },
    sphereOff: {
        backgroundColor: '#fff',
        width: 20,
        height: 20,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
    },
    paw: {
        width: 241,
        height: 217,
        top: 45,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        paddingHorizontal: 50,
        top: 40,
    },
    screenBottomImage: {
        width: 395,
        height: 215,
        top: 33,
    },
})

export default IntroScreen;