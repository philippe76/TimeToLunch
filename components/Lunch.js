import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MenuCard from './MenuCard';
import { lunchDatas } from '../datas/lunchData'


const Lunch = ({modal}) => {
    return (
        <View style={styles.lunchContainer}>
            <View style={styles.lunchHeader}>
                <Text style={styles.lunchTitle}>Lunch</Text>
                <MaterialCommunityIcons name='close-circle-outline' size={30} color={'#2b3d28'} onPress={() => modal(false)}/>
            </View>

            <FlatList 
                data={lunchDatas}
                renderItem={ itemData => <MenuCard picRef={itemData.item.picRef} title={itemData.item.title} price={itemData.item.price}/> }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lunchContainer: {
        backgroundColor: '#e7af77',
        flex: 1 
    },
    lunchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        margin: 20,
        marginBottom: 30
    },
    lunchTitle: {
        fontSize: 30,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: '#2b3d28'  
    }
})

export default Lunch;