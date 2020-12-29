import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Breakfast = ({modal}) => {
    return (
        <View style={styles.breakfastContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => modal(false)}>
                <Text style={styles.closeText}>
                    CLOSE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    breakfastContainer: {
        backgroundColor: '#2b3d28',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    closeButton: {
        borderWidth: 3,
        borderColor: '#e7af77',
        width: 120,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 19,
        fontFamily: 'CrimsonText-SemiBold',
        color: '#e7af77'
    }
})

export default Breakfast;