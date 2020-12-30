import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {images} from '../datas/images'



const MenuCard = ({picRef, title, price}) => {
    return ( 
        <View style={styles.container}>
            <Image source={images.picRef[picRef]} style={styles.image}/>
            <Text>{title}</Text>
            <Text>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        //change size in gimp
        width: 200,
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#2b3d28'
        // borderColor: use variable for lunch or breakfast
    }
})

export default MenuCard;