import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// import object (images, titles...) from lunch OR breakfast file


const MenuCard = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/hummus.jpg')} style={styles.image}/>
            <MaterialIcons name='close' style={styles.close}/>
        </View>
    )
}

const styles = StyleSheet.create({
    close: {
        fontSize: 20,
        borderRadius: 100,
        borderWidth: 1,
        width:20,
        borderRadius: 20/2,
        borderColor: '#2b3d28'
    },
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