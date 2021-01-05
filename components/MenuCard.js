import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { images } from '../datas/images';
import { forest } from '../styles/colors';
import { LunchStyle } from '../styles/lunchStyle';
import { DessertStyle } from '../styles/dessertStyle';
import AddCard from '../screens/AddCard';


const MenuCard = ({ picRef, title, recipe, price, mealType }) => {

    const [addCardVisible, setAddCardVisible] = useState(false);

    return ( 
        <View style={styles.container}>
            <Image source={images.picRef[picRef]} style={styles.image}/>
            <View style={styles.cardInfos}>
                <View>
                    <Text style={mealType === 'Lunch'? LunchStyle.menuCardTitle : DessertStyle.menuCardTitle}>{title}</Text>
                    <Text style={mealType === 'Lunch'? LunchStyle.menuCardPrice : DessertStyle.menuCardPrice}>{price}€</Text>
                </View>
                <MaterialIcons 
                    name='add-circle-outline' 
                    size={33} 
                    style={mealType === 'Lunch'? LunchStyle.addIcon : DessertStyle.addIcon} 
                    onPress={() => setAddCardVisible(true)}
                />
            </View>
            <Modal visible={addCardVisible} animationType='slide'>
               <AddCard 
                    addMeal={setAddCardVisible} 
                    mealPic={picRef}
                    mealTitle={title}
                    mealRecipe={recipe}
                    mealPrice={price}
                    mealType={mealType}
               /> 
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 50,
        marginBottom: 25     
    },
    image: {
        width: 280,
        height: 180,
        borderWidth: 1,
        borderRadius: 15
    },
    cardInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    title: {
        color: forest,
        fontSize: 20,
        fontWeight: '700',
        maxWidth: 200
    },
    price: {
        color: forest,
        fontSize: 15
    },
    addIcon: {
        marginRight: 70,
        color: forest
    }
})

export default MenuCard;