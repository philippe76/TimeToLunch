import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Modal } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../datas/images';
import { LunchStyle } from '../styles/lunchStyle';
import { DessertStyle } from '../styles/dessertStyle';
import Order from './Order';
import AddButton from '../components/AddButton';

const AddCard = ({ addMeal, mealPic, mealTitle, mealRecipe, mealPrice, mealType }) => {

    const [mealNumber, setMealNumber] = useState(1);
    const [price, setPrice] = useState(parseFloat(mealPrice));
    const [openOrder, setOpenOrder] = useState(false);
    
    const keyStore = mealType === 'Lunch' ? '@lunch_Key' : '@dessert_key'

    const AddOne = () => {
        setMealNumber(mealNumber + 1);
        setPrice((mealNumber+1) * mealPrice);
    }

    const RemoveOne = () => {
        if (mealNumber === 1){
            setMealNumber(1)
        }
        else {
            setMealNumber(mealNumber - 1);
            setPrice((mealNumber-1) * mealPrice);
        }    
    }

    
    const addItemToBag = async (item) => {
        let bagItems = await getBagItems();
        bagItems.push(item);
        AsyncStorage.setItem(keyStore, JSON.stringify(bagItems));
    }
        
    const getBagItems = async () => {
        let currentBag = await AsyncStorage.getItem(keyStore);
        return currentBag ? JSON.parse(currentBag) : [];
    }

    const storeData = () => {
        let myData = {
            title: mealTitle, 
            price: mealPrice,
            pic: mealPic,
            totalPrice: price,
            number: mealNumber,
            id: (Math.random()*10).toFixed(2).toString()
        }
        addItemToBag(myData);
    }

    useEffect(()=>{ 
        getBagItems()
    }, [])

    return (
        <View style={mealType === 'Lunch'? LunchStyle.container : DessertStyle.container}>
            <Image source={images.picRef[mealPic]} style={styles.image}/>
            <View style={styles.mealData}>
                <AntDesign 
                    name='closecircleo' 
                    style={mealType === 'Lunch'? LunchStyle.close : DessertStyle.close} 
                    size={33} 
                    onPress={() => addMeal(false)}
                />
                <Text style={mealType === 'Lunch'? LunchStyle.title : DessertStyle.title}> { mealTitle } </Text>
                <Text style={mealType === 'Lunch'? LunchStyle.recipe : DessertStyle.recipe}> { mealRecipe } </Text>
                <View style={styles.command}>
                    <View style={styles.numberContainer}>
                        <MaterialIcons 
                            size={28} 
                            style={mealType === 'Lunch'? LunchStyle.iconeNumber : DessertStyle.iconeNumber} 
                            name='remove' 
                            onPress={RemoveOne}
                        />
                        <Text style={mealType === 'Lunch'? LunchStyle.number : DessertStyle.number}> { mealNumber } </Text>
                        <MaterialIcons
                            size={28}
                            style={mealType === 'Lunch'? LunchStyle.iconeNumber : DessertStyle.iconeNumber} 
                            name='add' 
                            onPress={AddOne}
                        />
                    </View>                    
                    <Text style={mealType === 'Lunch'? LunchStyle.price : DessertStyle.price}> { price.toFixed(2) } € </Text>
                </View>
                <AddButton 
                    buttonStyle={mealType === 'Lunch'? LunchStyle.addToBag : DessertStyle.addToBag}
                    textStyle={mealType === 'Lunch'? LunchStyle.addToBagText : DessertStyle.addToBagText} 
                    text={'ADD TO BAG'}
                    addTo={()=> {
                        setOpenOrder(true)
                        storeData()                        
                    }}
                />
            </View>
            <Modal visible={openOrder}>
                <Order 
                    openOrder={setOpenOrder} 
                    mealType={mealType} 
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '30%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    mealData: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    command: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 30,
        marginBottom: 30
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default AddCard;