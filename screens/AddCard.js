import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Modal } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { images } from '../datas/images';
import { LunchStyle } from '../styles/lunchStyle';
import { BreakfastStyle } from '../styles/breakfastStyle';
import Order from './Order';
import AddButton from '../components/AddButton';

const AddCard = ({ addMeal, mealPic, mealTitle, mealRecipe, mealPrice, mealType }) => {

    const [mealNumber, setMealNumber] = useState(1);
    const [price, setPrice] = useState(parseFloat(mealPrice));
    const [openOrder, setOpenOrder] = useState(false)

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
        <View style={mealType === 'Lunch'? LunchStyle.container : BreakfastStyle.container}>
            <Image source={images.picRef[mealPic]} style={styles.image}/>
            <View style={styles.mealData}>
                <AntDesign 
                    name='closecircleo' 
                    style={mealType === 'Lunch'? LunchStyle.close : BreakfastStyle.close} 
                    size={33} 
                    onPress={() => addMeal(false)}
                />
                <Text style={mealType === 'Lunch'? LunchStyle.title : BreakfastStyle.title}> { mealTitle } </Text>
                <Text style={mealType === 'Lunch'? LunchStyle.recipe : BreakfastStyle.recipe}> { mealRecipe } </Text>
                <View style={styles.command}>
                    <View style={styles.numberContainer}>
                        <MaterialIcons 
                            size={28} 
                            style={mealType === 'Lunch'? LunchStyle.iconeNumber : BreakfastStyle.iconeNumber} 
                            name='remove' 
                            onPress={RemoveOne}
                        />
                        <Text style={mealType === 'Lunch'? LunchStyle.number : BreakfastStyle.number}> { mealNumber } </Text>
                        <MaterialIcons
                            size={28}
                            style={mealType === 'Lunch'? LunchStyle.iconeNumber : BreakfastStyle.iconeNumber} 
                            name='add' 
                            onPress={AddOne}
                        />
                    </View>                    
                    <Text style={mealType === 'Lunch'? LunchStyle.price : BreakfastStyle.price}> { price.toFixed(2) } € </Text>
                </View>
                <AddButton 
                    buttonStyle={mealType === 'Lunch'? LunchStyle.addToBag : BreakfastStyle.addToBag}
                    textStyle={mealType === 'Lunch'? LunchStyle.addToBagText : BreakfastStyle.addToBagText} 
                    text={'ADD TO BAG'}
                    addTo={()=> setOpenOrder(true)}
                />
            </View>
            <Modal visible={openOrder}>
                <Order openOrder={setOpenOrder} mealPic={mealPic} mealTitle={mealTitle} mealPrice={mealPrice}/>
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