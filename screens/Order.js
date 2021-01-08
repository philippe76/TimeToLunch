import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { images } from '../datas/images';
import { pumpkin, forest } from '../styles/colors';
import { DessertStyle } from '../styles/dessertStyle';
import AddButton from '../components/AddButton';
import Header from '../components/Header';


const Order = ({ openOrder }) => {

    // const [myLunchBag, setMyLunchBag] = useState([]);
    // const [myDessertBag, setMyDessertBag] = useState([]);
    const [myBag, setMyBag] = useState();

    // const keyStore = mealType === 'Lunch' ? '@lunch_Key' : '@dessert_key';

    const deleteData = () => {
        AsyncStorage.clear();
        setMyBag([]);
    }

    const getData = async () => {
        AsyncStorage.getItem('@meal_key')
            .then((data) => {
            const parsedData = JSON.parse(data);
            setMyBag(parsedData);
            // mealType === 'Lunch' ? setMyLunchBag(parsedData) : setMyDessertBag(parsedData);
            return parsedData;
        });
    }  
    
    const removeData = (id) => {
        AsyncStorage.getItem('@meal_key')
            .then((data => {
                const parsedData = JSON.parse(data);
                const newData = parsedData.filter(item => item.id !== id);
                AsyncStorage.setItem('@meal_key', JSON.stringify(newData));
                setMyBag(newData);
                // mealType === 'Lunch' ? setMyLunchBag(newData) : setMyDessertBag(newData);
            }))
    }

    useEffect(()=> {
        getData();   
    },[myBag])

    return (
        <>

        <View style={styles.container}>
            <Header title={'My Bag'} color={forest} backColor={'#f0f0f0'} topPad={20} />
            {/* <View style={styles.bagHeader}>
                <MaterialIcons name='keyboard-backspace' size={30} style={styles.getBack} color={forest} onPress={() =>  openOrder(false)}/>
                <Text style={styles.title}> My Bag </Text>
            </View> */}
            
            <FlatList 
                data={myBag}
                renderItem={ itemData => 
                    <View style={styles.bagData}>    
                        <Image source={images.picRef[itemData.item.pic]} style={styles.mealPic}/>
                        <View style={styles.bagDetail}>
                            <Text style={styles.mealName}> {itemData.item.title} </Text>
                            <View style={styles.priceDetail}>
                                <Text style={styles.mealPrice}> {itemData.item.number}x </Text>
                                <Text style={styles.mealPrice}> {itemData.item.price}€ </Text>
                            </View>
                        </View> 
                        <AntDesign name="minuscircleo" size={28} color={'firebrick'} style={styles.deleteItem} onPress={()=> removeData(itemData.item.id)} />
                    </View>
                }
                keyExtractor={item => item.id}
            />
        
            <View style={styles.order}>
                <View style={styles.orderDetail}>
                    <Text style={styles.total}> Total </Text>
                    {(myBag !== undefined && myBag !== null) && <Text style={styles.amount}>{(myBag.map(item => item.totalPrice).reduce((acc, curr)=> acc + curr, 0)).toFixed(2)}€ </Text>}                 
                </View>
                <AddButton 
                    buttonStyle={{...DessertStyle.addToBag, ...styles.button}}
                    textStyle={{...DessertStyle.addToBagText, ...styles.buttonText}} 
                    text={'DELETE ORDER'}
                    addTo={deleteData}
                />
            </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({  
    container: {    
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bagHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        marginVertical: 40
    },
    getBack: {
        marginLeft: -65
    },
    title: {
        color: forest,
        fontSize: 35
    },
    bagData: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: '85%',
        marginVertical: 15,
        // borderWidth: 1,
        // borderColor: forest
    },
    bagDetail: {
        marginLeft: 10,
        justifyContent: 'center',
        width: '55%',
        // borderWidth: 1,
        // borderColor: forest
    },
    deleteItem: {
        marginLeft: 25
    },
    mealName: {
        color: forest,
        fontFamily: 'Pacifico-Regular',
        fontSize: 23,
        lineHeight: 32,
        maxWidth: 200
    },
    priceDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        fontFamily: 'CrimsonText-SemiBold'
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        marginTop: 20,
        width: '100%'
    },
    buttonText: {
        color:'#f0f0f0', 
        fontSize: 17
    }
})

export default Order; 