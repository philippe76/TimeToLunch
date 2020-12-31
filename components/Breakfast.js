import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { forest, pumpkin } from '../styles/colors'


const Breakfast = ({modal}) => {
    return (
        <View style={styles.breakfastContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => modal(false)}>
                <Text style={styles.closeText}> CLOSE </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    breakfastContainer: {
        backgroundColor: forest,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    closeButton: {
        borderWidth: 3,
        borderColor: pumpkin,
        width: 120,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 19,
        fontFamily: 'CrimsonText-SemiBold',
        color: pumpkin
    }
})

export default Breakfast;