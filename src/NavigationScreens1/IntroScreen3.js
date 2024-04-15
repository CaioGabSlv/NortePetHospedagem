import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import { Button } from 'react-native-paper';

const IntroScreen3 = ({ navigation }) => {
    return (
        <>
            <View style={styles.containerMain}>
                <Button
                mode='text'
                onPress={() => {}}>
                </Button>
                <View style={styles.topSphereContainer}>
                    <View style={styles.sphereOff}/>
                    <View style={styles.sphereOff}/>
                    <View style={styles.sphereOn}/>
                </View>
                <Image source={require('../../assets/images/paw.png')} style={styles.pawImage}/>
                <Text style={styles.text}>
                    Se necessário, entre em contato com o cuidador para negociar a hospedagem e serviços extras
                </Text>
            </View>
            <View style={styles.containerBottom}>
                <ImageBackground source={require('../../assets/images/screenBttmIntro.png')} style={styles.screenBottomImage}>
                    <Button
                    mode="text"
                    buttonColor='#4e2500'
                    textColor='#fff'
                    style={styles.buttonNext}
                    labelStyle={styles.textButton}
                    onPress={() => navigation.navigate('LoginHotel')}>
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
        aspectRatio: 1,
        backgroundColor: '#904500',
        width: '10%',
        height: '60%',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
    },
    sphereOff: {
        aspectRatio: 1,
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
        paddingHorizontal: '7.5%',
        top: '6.5%',
    },
    screenBottomImage: {
        alignItems: 'center',
        width: '100%',
        height: '125%',
    },
})

export default IntroScreen3;