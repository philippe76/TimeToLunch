import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Order from '../screens/Order';
import Home from '../screens/Home';

const Header = ({ justify, topPad, title, backColor, color }) => {
   
    const [openOrder, setOpenOrder] = useState(false);
    const [openHome, setOpenHome] = useState(false);

    return (
        <View style={{
            ...styles.headerContainer, 
            backgroundColor:backColor, 
            borderBottomColor:color, 
            paddingTop: topPad, 
            justifyContent: justify
        }}>
            <Text style={{...styles.headerTitle, color:color}}> {title} </Text>
            <Entypo name="home" color={color}  size={33} onPress={()=>setOpenHome(true)}/>   
            <FontAwesome5 name="shopping-bag" color={color} size={30} onPress={()=>setOpenOrder(true)}/>  
            <Modal visible={openOrder}>
                <Order openOrder={setOpenOrder}  />
            </Modal> 
            <Modal visible={openHome}>
                <Home openOrder={setOpenHome}  />
            </Modal> 
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        marginBottom: 40
    },
    headerTitle: {
        fontSize: 35,
        fontFamily: 'CrimsonText-SemiBold'
    }
})

export default Header;