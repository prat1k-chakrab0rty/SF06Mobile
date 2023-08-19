import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ route }) => {
  const receivedData = route.params?.data || {};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome {receivedData.firstName}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30
  },
})