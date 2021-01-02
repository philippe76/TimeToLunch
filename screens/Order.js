import React, { useState, useEffect }from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { images } from '../datas/images';
import { forest } from '../styles/colors';
import { BreakfastStyle } from '../styles/breakfastStyle';
import AddButton from '../components/AddButton';



const Order = ({ openOrder, myBag }) => {

    const [test, setTest] = useState('')

    const storeData = () => {
        AsyncStorage.clear();
        setTest('')
    }

    const getData= async () => {
        let mealData = '';
        try {
            mealData = await AsyncStorage.getItem('@storage_Key');
            // setTest(JSON.parse(mealData))
            setTest(mealData)
           
        } catch (error) {
          console.log('PAS TROUVE');
        }
        return mealData;
    }

    useEffect(()=> {
        getData();
    }, [test] )



    return (
        <View style={styles.container}>

            <MaterialIcons name='keyboard-backspace' size={30} style={styles.getBack} color={forest} onPress={() =>  openOrder(false)}/>
            <Text style={styles.title}> My Bag </Text>

            <View style={styles.bagData}>    
            {/* FLAT LIST */}
                {/* <Image source={images.picRef[myBag.pic]} style={styles.mealPic}/> 
                <View style={styles.bagDetail}>
                    <Text style={styles.mealTitle}> {myBag.title} </Text>
                    <View style={styles.priceDetail}>
                        <Text style={styles.mealPrice}> {myBag.number}x </Text>
                        <Text style={styles.mealPrice}> {myBag.price}€ </Text>
                    </View>
                </View> */}

            {/* {test.map(item =><Text>{item.meal}</Text>)} */}
            <Text> {test} </Text>
            </View>

            <View style={styles.order}>
                <View style={styles.orderDetail}>
                    <Text style={styles.total}> Total </Text>
                    {/* <Text style={styles.amount}> {(myBag.price * myBag.number).toFixed(2)} € </Text> */}
                </View>
                <AddButton 
                    buttonStyle={{...BreakfastStyle.addToBag, ...styles.button}}
                    textStyle={{...BreakfastStyle.addToBagText, ...styles.buttonText}} 
                    text={'CONFIRM  ORDER'}
                    addTo={storeData}
                />
                <AddButton 
                    buttonStyle={{...BreakfastStyle.addToBag, ...styles.button}}
                    textStyle={{...BreakfastStyle.addToBagText, ...styles.buttonText}} 
                    text={'DISPLAY ORDER'}
                    addTo={getData}
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
        justifyContent: 'space-between'
    },
    getBack: {
        position: 'absolute',
        left: 20,
        top: 20
    },
    title: {
        color: forest,
        fontSize: 35,
        // borderWidth: 1,
        // borderColor: forest,
        marginTop: 50
    },
    bagData: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: forest,
        width: '80%'
    },
    bagDetail: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    mealTitle: {
        color: forest,
        fontFamily: 'Pacifico-Regular',
        fontSize: 25,
        lineHeight: 39,
        maxWidth: 200
    },
    priceDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    mealPrice: {
        fontSize: 16
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