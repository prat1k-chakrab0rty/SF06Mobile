import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/meteor-rain.gif')}
                style={styles.image}
            />
            <Text style={styles.brand}>SF06</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        fontWeight: 'bold',
        fontSize: 30
    },
    image: {
        width: 200,
        height: 200,
    },
})