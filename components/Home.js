import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
      <View style={styles.container}>  
        <Text style={styles.textTitle}>Time's To Lunch</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: '#e7af77',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Pacifico-Regular'
  }
});

export default Home;