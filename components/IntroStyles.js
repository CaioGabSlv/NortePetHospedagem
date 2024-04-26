import { StyleSheet } from 'react-native';

const IntroStyles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
    containerHeader: {
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#d39c69'
    },
    containerMiddle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    containerFooter: {
        flex: 0.25,
        alignItems: 'center',
        backgroundColor: '#d39c69',
    },
    buttonSkip: {
        top: '30%',
        left: '37.5%',
    },
    textButton: {
        fontSize: 18,
        fontFamily: 'LeckerliOneRegular',
    },
    topSphereContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        top: '65.5%',
        width: '60%',
        height: '30%',
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
        resizeMode: 'stretch',
        aspectRatio: 1,
        height: '50%',
        top: '5.5%',
    },
    text: {
        fontSize: 28,
        fontFamily: 'LeckerliOneRegular',
        textAlign: 'center',
        paddingHorizontal: '10%',
        top: '6.5%',
    },
    buttonNext: {
        bottom: '35%',
        left: '37.5%',
    },
    screenBottomImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
})

export default IntroStyles;