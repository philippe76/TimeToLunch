import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { images } from '../datas/images';
import { forest } from '../styles/colors';
import { BreakfastStyle } from '../styles/breakfastStyle';
import AddButton from '../components/AddButton';

const Order = ({ openOrder, mealPic, mealTitle, mealPrice }) => {

    // const [order, setOrder] = useState([

    // ])

    // useEffect(()=> {
    //     setOrder(prevState => [...prevState, {
    //         pic: mealPic,
    //         title: mealTitle,
    //         price: mealPrice
    //     }])
    // }, order)

    return (
        <View style={styles.container}>
            <Text style={styles.title}> My Bag </Text>
            <AntDesign 
                name='closecircleo' 
                size={33} 
                onPress={() => openOrder(false)}
            />
            <View style={styles.bagData}>
                <Image source={images.picRef[mealPic]} style={styles.mealPic}/>
            </View>
            <View style={styles.order}>
                <View style={styles.orderDetail}>
                    <Text style={styles.total}> Total </Text>
                    <Text style={styles.amount}> {mealPrice}€ </Text>
                </View>
                <AddButton 
                    buttonStyle={{...BreakfastStyle.addToBag, ...styles.button}}
                    textStyle={{...BreakfastStyle.addToBagText, ...styles.buttonText}} 
                    text={'CONFIRM  ORDER'}
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
    mealPic: {
        width: 90,
        height: 90,
        borderRadius: 90/2
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
        paddingHorizontal: 25,
        paddingVertical: 16,
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        color:'#f0f0f0', 
        fontSize: 17
    }
})

export default Order; 