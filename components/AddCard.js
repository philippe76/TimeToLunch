import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import {images} from '../datas/images';

const AddCard = ({ addMeal, mealPic, mealTitle, mealRecipe, mealPrice }) => {

    const [mealNumber, setMealNumber] = useState(1);
    const [price, setPrice] = useState(parseFloat(mealPrice))

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

    return (
        <View style={styles.container}>
            <Image source={images.picRef[mealPic]} style={styles.image}/>
            <View style={styles.mealData}>
                <AntDesign name='closecircleo' style={styles.close} size={33} color={'#e7af77'} onPress={() => addMeal(false)}/>
                <Text style={styles.title}> {mealTitle} </Text>
                <Text style={styles.recipe}> {mealRecipe} </Text>
                <View style={styles.command}>
                    <View style={styles.numberContainer}>
                        <MaterialIcons size={28} color={'#e7af77'} name='remove' onPress={RemoveOne}/>
                        <Text style={styles.number}>{mealNumber}</Text>
                        <MaterialIcons size={28} color={'#e7af77'} name='add' onPress={AddOne}/>
                    </View>                    
                    <Text style={styles.price}>{price.toFixed(2)}€</Text>
                </View>
                <TouchableOpacity style={styles.addToBag}>
                    <Text style={styles.addToBagText}>ADD TO BAG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b3d28'
    },
    image: {
        width: '100%',
        height: '30%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    close: {
        marginVertical: 25
    },
    mealData: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#e7af77',
        fontSize: 37,
        fontFamily: 'Pacifico-Regular',
        maxWidth: 350,
        textAlign: 'center',
    },
    recipe: {
        color: '#e7af77',
        fontFamily: 'CrimsonText-SemiBold',
        fontSize: 19,
        width: '75%',
        textAlign: 'center',
        lineHeight: 20,
        marginVertical: 25
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
    number: {
        color: '#e7af77',
        fontSize: 25,
        fontWeight: '700',
        borderWidth: 1,
        borderColor: '#e7af77',
        width: 45,
        height: 45,
        borderRadius: 45/2,
        textAlign: 'center',
        paddingTop: 5,
        marginHorizontal: 15
    },
    price: {
        color: '#e7af77',
        fontSize: 28,
        fontWeight: 'bold'
    },
    addToBag: {
        backgroundColor: '#e7af77',
        width: '65%',
        borderRadius: 25,
        padding: 12
    },
    addToBagText: {
        color: '#2b3d28',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'CrimsonText-SemiBold',
        fontSize: 18
    }
})

export default AddCard;