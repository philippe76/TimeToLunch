import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MenuCard from './MenuCard'


const Lunch = ({modal}) => {
    return (
        <View style={styles.lunchContainer}>
            <Text style={styles.title}>Lunch</Text>
            <MenuCard />
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
    title: {
        position: 'absolute',
        top: 30,
        left: 30,
        fontSize: 20
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