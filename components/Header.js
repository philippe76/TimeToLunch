import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Order from '../screens/Order';

const Header = ({ backColor, color }) => {
   
    const [openOrder, setOpenOrder] = useState(false);

    return (
        <View style={{...styles.headerContainer, backgroundColor:{backColor}, borderBottomColor:{color}}}>
            <Entypo name="home" color={color}  size={30} />   
            <FontAwesome5 name="shopping-bag" color={color} size={28} onPress={()=>setOpenOrder(true)}/>  
            <Modal visible={openOrder}>
                <Order openOrder={setOpenOrder}  />
            </Modal> 
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
        paddingBottom: 20
    }
})

export default Header;