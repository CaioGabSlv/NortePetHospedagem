// Visualizador de imagens (para escolha de imagens de perfil)

import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage, width, height, borderRadius }) {
    const imageSource = selectedImage ? { uri :selectedImage } : placeholderImageSource;
    return (
        <Image source={imageSource} style={{width: width, height: height, borderRadius: borderRadius}} />
    );
}