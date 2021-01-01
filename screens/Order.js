import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { pumpkin, forest } from '../styles/colors'

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
                <View>
                    <Text style={styles.total}> Total </Text>
                    <Text style={styles.amount}> 12.90€ </Text>
                </View>
                <TouchableOpacity  onPress={() => {}}>
                    <Text > CONFIRM ORDER </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({  
    container: {    
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    title: {
        color: forest,
        fontSize: 25,
        marginVertical: 25
    }
})

export default Order; 