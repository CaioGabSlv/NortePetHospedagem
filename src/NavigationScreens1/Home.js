import {View, Text, StyleSheet} from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Hi, welcome João!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

export default Home;