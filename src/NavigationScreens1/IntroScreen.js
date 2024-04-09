import {View, Text, StyleSheet, Button} from 'react-native';

const IntroScreen = () => {
    return (
        <View style={styles.containerMain}>
        <View style={styles.Rectangle} />
        </View>
    );
}

const styles=StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 30,
    },
    Rectangle: {
        flexDirection: 'row',
        width: 228,
        height: 45,
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: '#D39C69',
      },
})

export default IntroScreen;