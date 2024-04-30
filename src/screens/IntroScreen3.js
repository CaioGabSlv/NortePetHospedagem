import {View, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import IntroStyles from '../../components/styles/IntroStyles';

const IntroScreen = ({ navigation }) => {
    return (
        <View style={IntroStyles.containerMain}>
            <View style={IntroStyles.containerHeader}>
                <Button/>
                <View style={IntroStyles.topSphereContainer}>
                    <View style={IntroStyles.sphereOff}/>
                    <View style={IntroStyles.sphereOn}/>
                    <View style={IntroStyles.sphereOff}/>
                </View>
            </View>
            <View style={IntroStyles.containerMiddle}>
                <Image source={require('../../assets/images/paw.png')} style={IntroStyles.pawImage}/>
                <Text style={IntroStyles.text}>
                    Se necessário, entre em contato com o cuidador para negociar a hospedagem e serviços extras
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
                    onPress={() => navigation.navigate('Login')}>
                        Próximo
                </Button>
            </View>
        </View>
    );
}

export default IntroScreen;