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
            <Button
            style={styles.returnButton}
            labelStyle={styles.textReturnButton}
            icon='keyboard-backspace'
            mode='text'
            onPress={() => navigation.navigate('RegisterHotel3')}>
                Voltar
            </Button>
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
                    width={280}
                    height={280}
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
            <SafeAreaView pointerEvents='none' style={styles.bottomImageView}>
                <Image source={require('../../assets/images/screenBttmIntro.png')} style={styles.bottomImage}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#d39C69',
    },
    returnButton: {
        marginRight: 285,
        marginTop: 45,
        left: 10,
    },
    textReturnButton: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'InterRegular',
        textDecorationLine: 'underline',
    },
    containerText: {
        paddingHorizontal: 50,
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
    inputTextBox: {
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInput: {
        backgroundColor: '#fff',
        fontFamily: 'InterRegular',
        fontSize: 20,
    },
    imageContainer: {
        aspectRatio: 1,
        borderRadius: 10,
        width: '40%',
        height: '40%',
        marginHorizontal: '6%',
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
        marginTop: 15,
        paddingVertical: 5,
        paddingLeft: 50,
        paddingRight: 50,
    },
    continueButtonContainer: {
        paddingVertical: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textContinueButton: {
        fontFamily: 'InterRegular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bottomImageView: {
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '25%',
    },
    bottomImage: {
        width: '100%',
        height: '100%',
        top: '2.5%',
    },
})

export default RegisterHotel4;