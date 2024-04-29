import {View, SafeAreaView, StyleSheet, Image, Text, StatusBar} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';

import ImageViewer from '../../components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('../../assets/images/iconClient.png');

const RegisterHotel3 = ({ navigation }) => {

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
                onPress={() => navigation.navigate('RegisterUser2')}>
                    Voltar
                </Button>
            </View>
            <View style={styles.containerMiddle}>
                <Text style={styles.containerText}>
                    Cadastro de Usuário
                </Text>
                <Text style={styles.containerTextSub}>
                    Escolha uma imagem ou foto para a sua foto de perfil!
                </Text>
                <SafeAreaView style={styles.imageContainer}>
                    <SafeAreaView style={styles.imageContainer2}>
                        <ImageViewer 
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                        width={'90%'}
                        height={'90%'}
                        borderRadius={180}
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
                    onPress={() => navigation.navigate('RegisterUserEmailConf')}>
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
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: '#d39c69',
        paddingTop: StatusBar.currentHeight,
    },
    containerMiddle: {
        flex: 0.8,
        gap: 2,
        alignItems: 'center',
        backgroundColor: '#d39c69',
        zIndex: 1,
    },
    containerFooter: {
        flex: 0.15,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    returnButton: {
        marginTop: '4%',
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
    },
    containerTextSub: {
        paddingHorizontal: 35,
        textAlign: 'center',
        fontFamily: 'InterRegular',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: '3.5%',
    },
    imageContainer: {
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: '45%',
        marginHorizontal: '16%',
        borderRadius: 180,
        backgroundColor: '#500808'
    },
    imageContainer2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '87.5%',
        height: '87.5%',
        borderRadius: 180,
        backgroundColor: '#b27339'
    },
    chooseImageButtonContainer: {
        top: '2.5%',
        width: '80%',
        height: '10%',
    },
    continueButtonContainer: {
        top: '1%',
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

export default RegisterHotel3;