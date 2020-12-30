import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MenuCard from './MenuCard';
// import { lunchDatas } from '../datas/lunchData'

const lunchDatas = [
    {   picRef: 'hummus',
        title: 'Hummus',
        price: '6.90€'
    },
    {
        picRef: 'kothimbir',
        title: 'Kothimbir Vadi',
        price: '12.90€'
    },    
    {
        picRef: 'pumpkinSoup',
        title: 'Pumpkin Soup With Pumpkin Seeds',
        price: '8.90€'
    },
    {
        picRef: 'quesadillas',
        title: 'Quesadillas With Pico de Gallo',
        price: '10.90€'
    },

]

const Lunch = ({modal}) => {
    return (
        <View style={styles.lunchContainer}>
            <Text style={styles.title}>Lunch</Text>
            <MaterialIcons name='close' style={styles.close}/>
                {lunchDatas.map(item => {
                    return  <MenuCard picRef={item.picRef} title={item.title} price={item.price}/>
                })}
           
            {/* <TouchableOpacity style={styles.closeButton} onPress={() =>modal(false)}>
                <Text style={styles.closeText}>
                    CLOSE
                </Text>
            </TouchableOpacity> */}
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
    close: {
        fontSize: 20,
        borderRadius: 100,
        borderWidth: 1,
        width:20,
        borderRadius: 20/2,
        borderColor: '#2b3d28'
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