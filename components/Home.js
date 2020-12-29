import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Lunch from './Lunch';
import Breakfast from './Breakfast'

const Home = () => {

    const [lunchVisible, setLunchVisible] = useState(false);
    const [breakfastVisible, setBreakfastVisible] = useState(false);

    return (
        <>
      <View style={styles.container}>  
        <View style={styles.logoContainer}>
            <Text style={styles.logoTitle}>Sweet Home</Text>    
        </View>  
        <Text style={styles.textTitle}>Time's To Lunch</Text>
      </View>

      <View style={styles.menu}>        
        <TouchableOpacity style={{...styles.menuContainer, ...styles.lunchContainer}} onPress={()=> setLunchVisible(true)}>
            <Modal visible={lunchVisible} animationType='slide'>
                <Lunch modal={setLunchVisible} />
            </Modal>
            <Text style={{...styles.menuText, ...styles.lunchText}}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.menuContainer, ...styles.breakfastContainer}} onPress={()=> setBreakfastVisible(true)}>
            <Modal visible={breakfastVisible} animationType='slide'>
                <Breakfast modal={setBreakfastVisible} />
            </Modal>
            <Text style={{...styles.menuText, ...styles.breakfastText}}>Breakfast</Text>
        </TouchableOpacity>
      </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 210,
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 210/2,
    borderWidth: 3,
    borderColor: '#e7af77',
    position: 'absolute',
    top: 100
  },
  logoTitle: {
    color: '#e7af77',
    fontSize: 35,
    fontFamily: 'Pacifico-Regular'
  },
  textTitle: {
    color: '#e7af77',
    fontSize: 45,
    fontFamily: 'Pacifico-Regular',
    marginTop: 150
  },
  menu: {
    backgroundColor: '#e7af77',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height:60
  },
  lunchContainer: {
    backgroundColor: '#e7af77',
  },
  breakfastContainer: {
    backgroundColor: '#2b3d28',
  },
  menuText: {
    fontFamily: 'CrimsonText-SemiBold',
    fontSize: 25
  },
  lunchText: {
    color: '#2b3d28'
  },
  breakfastText: {
    color: '#e7af77'
  }

});

export default Home;