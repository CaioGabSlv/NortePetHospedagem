import { View, Text, StyleSheet, Button } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Olá, usuário!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#D39C69',
    },
});

export default Home;