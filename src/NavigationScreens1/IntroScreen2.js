import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import { Button } from 'react-native-paper';

const IntroScreen2 = ({ navigation }) => {
    return (
        <>
            <View style={styles.containerMain}>
                <Button
                mode="text"
                buttonColor='#904500'
                textColor='#fff'
                style={styles.buttonSkip}
                labelStyle={styles.textButton}
                onPress={() => navigation.navigate('Login')}>
                    Pular
                </Button>
                <View style={styles.topSphereContainer}>
                    <View style={styles.sphereOff}/>
                    <View style={styles.sphereOn}/>
                    <View style={styles.sphereOff}/>
                </View>
                <Image source={require('../../assets/paw.png')} style={styles.pawImage}/>
                <Text style={styles.text}>
                    Com o nosso aplicativo, você pode escolher o cuidador mais adequado para a sua preferência
                </Text>
            </View>
            <View style={styles.containerBottom}>
                <ImageBackground source={require('../../assets/screenBttmIntro.png')} style={styles.screenBottomImage}>
                    <Button
                    mode="text"
                    buttonColor='#4e2500'
                    textColor='#fff'
                    style={styles.buttonNext}
                    labelStyle={styles.textButton}
                    onPress={() => navigation.navigate('IntroScreen3')}>
                        Próximo
                    </Button>
                </ImageBackground>
            </View>
        </>
    );
}

const styles=StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39C69',
        paddingVertical: '10%',
    },
    containerBottom: {
        flex: 0.25,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#d39C69',
    },
    buttonSkip: {
        left: '37.5%',
    },
    buttonNext: {
        width: '25%',
        height: '20%',
        left: '35%',
        top: '75%',
    },
    textButton: {
        fontSize: 18,
        fontFamily: 'LeckerliOneRegular',
    },
    topSphereContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        width: '60%',
        height: '7%',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#904500',
    },
    sphereOn: {
        backgroundColor: '#904500',
        width: '10%',
        height: '60%',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
    },
    sphereOff: {
        backgroundColor: '#fff',
        width: '10%',
        height: '60%',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
    },
    pawImage: {
        width: '70%',
        height: '40%',
        top: '5.5%',
    },
    text: {
        fontSize: 28,
        fontFamily: 'LeckerliOneRegular',
        textAlign: 'center',
        paddingHorizontal: '10%',
        top: '6.5%',
    },
    screenBottomImage: {
        alignItems: 'center',
        width: '100%',
        height: '125%',
    },
})

export default IntroScreen2;