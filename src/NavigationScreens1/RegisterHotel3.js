import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RegisterHotel3 = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                
            </View>
            <View pointerEvents='none' style={styles.containerBottom}>
                <ImageBackground source={require('../../assets/images/screenBttmIntro.png')} style={styles.screenBottomImage}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39C69',
        paddingVertical: '10%',
    },
    containerBottom: {
        zIndex: 1,
        position: 'absolute',
        top: 540,
        bottom: 0,
        left: 0,
        right: 0,
    },
    buttonReturn: {
        right: '35.5%',
    },
    screenBottomImage: {
        alignItems: 'center',
        width: '100%',
        height: '125%',
    },
})

export default RegisterHotel3;