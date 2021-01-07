import React from 'react';
import { View, StyleSheet } from 'react-native';
import { pumpkin, forest } from '../styles/colors';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const Header = ({ openOrderModal }) => {
   
    return (
        <View style={styles.headerContainer}>
            <Entypo name="home" style={styles.homeIcon} size={30} />   
            <FontAwesome5 name="shopping-bag" style={styles.bagIcon} size={28} onPress={()=>openOrderModal(true)}/>          
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 2,
        borderBottomColor: pumpkin,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 70,
        paddingBottom: 20
    },

    homeIcon: {
        color: pumpkin,
    },
    bagIcon: {
        color: pumpkin,
    }
})

export default Header;