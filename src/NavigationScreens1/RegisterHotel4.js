import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

import ImageViewer from '../../components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('../../assets/images/iconHotel.png');

const RegisterHotel4 = ({ navigation }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        } else {
          alert('Você não selecionou nenhuma imagem');
        };
    }

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerHeader}>
                <Button
                style={styles.returnButton}
                labelStyle={styles.textReturnButton}
                icon='keyboard-backspace'
                mode='text'
                onPress={() => navigation.navigate('RegisterHotel3')}>
                    Voltar
                </Button>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.containerText}>
                    Cadastro de Hotel
                </Text>
                <Text style={styles.containerTextSub}>
                    Escolha uma imagem para apresentar seu hotel!
                </Text>
                <SafeAreaView style={styles.imageContainer}>
                    <SafeAreaView style={styles.imageContainer2}>
                        <ImageViewer
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                        width={'90%'}
                        height={'90%'}
                        borderRadius={10}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.chooseImageButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={styles.textContinueButton}
                    mode="contained"
                    onPress={pickImageAsync}>
                        Escolher imagem
                    </Button>
                </SafeAreaView>
                <SafeAreaView style={styles.continueButtonContainer}>
                    <Button
                    buttonColor='#904500'
                    style={{borderRadius: 4}}
                    labelStyle={styles.textContinueButton}
                    mode="contained"
                    onPress={() => navigation.navigate('RegisterHotel5')}>
                        Continuar
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
        flex: 0.15,
        alignItems: 'center',
        backgroundColor: '#d39c69'
    },
    containerMiddle: {
        flex: 1,
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    containerFooter: {
        flex: 0.225,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    returnButton: {
        marginTop: 55,
        right: '35%',
    },
    textReturnButton: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    containerText: {
        width: '80%',
        textAlign: 'left',
        fontFamily: 'InterRegular',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    containerTextSub: {
        paddingHorizontal: 50,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    imageContainer: {
        aspectRatio: 1,
        borderRadius: 10,
        width: '40%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#500808'
    },
    imageContainer2: {
        borderRadius: 10,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b27339'
    },
    chooseImageButtonContainer: {
        top: '2.5%',
        width: '80%',
        height: '10%',
    },
    continueButtonContainer: {
        width: '80%',
        height: '10%',
    },
    textContinueButton: {
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

export default RegisterHotel4;