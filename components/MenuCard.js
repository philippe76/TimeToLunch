import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import {images} from '../datas/images';
import { MaterialIcons } from '@expo/vector-icons';
import AddCard from './AddCard';
import { forest } from '../styles/colors'


const MenuCard = ({ picRef, title, recipe, price, mealType }) => {

    const [addCardVisible, setAddCardVisible] = useState(false);

    return ( 
        <View style={styles.container}>
            <Image source={images.picRef[picRef]} style={styles.image}/>
            <View style={styles.cardInfos}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}€</Text>
                </View>
                <MaterialIcons 
                    name='add-circle-outline' 
                    size={33} 
                    style={styles.addIcon} 
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