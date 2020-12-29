import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Lunch = ({modal}) => {
    return (
        <View style={styles.lunchContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() =>modal(false)}>
                <Text style={styles.closeText}>
                    CLOSE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    lunchContainer: {
        backgroundColor: '#e7af77',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    closeButton: {
        borderWidth: 3,
        borderColor: '#2b3d28',
        width: 120,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 19,
        fontFamily: 'CrimsonText-SemiBold',
        color: '#2b3d28'
    }
})

export default Lunch;