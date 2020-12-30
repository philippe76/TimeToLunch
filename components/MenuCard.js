import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {images} from '../datas/images'



// FLAT LIST

const MenuCard = ({picRef, title, price}) => {
    return ( 
        <View style={styles.container}>
            <Image source={images.picRef[picRef]} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25     
    },
    image: {
        //change size in gimp
        width: 280,
        height: 180,
        borderWidth: 1,
        borderRadius: 15
    },
    title: {
        color: '#2b3d28',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginLeft: 60,
        paddingTop: 5
    },
    price: {
        color: '#2b3d28',
        fontSize: 15, 
        alignSelf: 'flex-start',
        marginLeft: 60,
    }
})

export default MenuCard;