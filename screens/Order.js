import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { forest } from '../styles/colors';
import { BreakfastStyle } from '../styles/breakfastStyle';
import AddButton from '../components/AddButton';

const Order = ({ openOrder }) => {

    const [order, setOrder] = useState([
        {
            pic: '',
            title: '',
            number: 0,
            price: 0
        }
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> My Bag </Text>
            <AntDesign 
                name='closecircleo' 
                size={33} 
                onPress={() => openOrder(false)}
            />
            <View style={styles.order}>
                <View style={styles.orderDetail}>
                    <Text style={styles.total}> Total </Text>
                    <Text style={styles.amount}> 12.90€ </Text>
                </View>
                <AddButton 
                    buttonStyle={{...BreakfastStyle.addToBag, ...styles.button}}
                    textStyle={{...BreakfastStyle.addToBagText, color:'#f0f0f0'}} 
                    text={'CONFIRM ORDER'}
                    addTo={()=> {}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container: {    
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        color: forest,
        fontSize: 25,
        marginVertical: 25
    },
    order: {
        width: '80%',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: forest
    },
    orderDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total: {
        fontSize: 21,
        fontWeight: '700',
        color: forest
    },
    amount: {
        color: forest,
        fontWeight: '700',
        fontSize: 25,
        fontFamily: 'CrimsonText-SemiBold',
    },
    button: {
        paddingHorizontal: 30,
        marginTop: 20,
        width: '100%',
        fontFamily: 'CrimsonText-SemiBold',
    }
})

export default Order; 