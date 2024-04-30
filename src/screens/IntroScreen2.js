import {View, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import IntroStyles from '../../components/styles/IntroStyles';

const IntroScreen = ({ navigation }) => {
    return (
        <View style={IntroStyles.containerMain}>
            <View style={IntroStyles.containerHeader}>
                <Button
                mode='text'
                buttonColor='#904500'
                textColor='#fff'
                style={IntroStyles.buttonSkip}
                labelStyle={IntroStyles.textButton}
                onPress={() => navigation.navigate('Login')}>
                    Pular
                </Button>
                <View style={IntroStyles.topSphereContainer}>
                    <View style={IntroStyles.sphereOff}/>
                    <View style={IntroStyles.sphereOn}/>
                    <View style={IntroStyles.sphereOff}/>
                </View>
            </View>
            <View style={IntroStyles.containerMiddle}>
                <Image source={require('../../assets/images/paw.png')} style={IntroStyles.pawImage}/>
                <Text style={IntroStyles.text}>
                    Com o nosso aplicativo, você pode escolher o cuidador mais adequado para a sua preferência
                </Text>
            </View>
            <View style={IntroStyles.containerFooter}>
                <Image source={require('../../assets/images/screenBottomIntro.png')} style={IntroStyles.screenBottomImage}/>
                <Button
                    mode='text'
                    buttonColor='#4e2500'
                    textColor='#fff'
                    style={IntroStyles.buttonNext}
                    labelStyle={IntroStyles.textButton}
                    onPress={() => navigation.navigate('IntroScreen3')}>
                        Próximo
                </Button>
            </View>
        </View>
    );
}

export default IntroScreen;