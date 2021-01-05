import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MenuCard from '../components/MenuCard';
import { lunchDatas } from '../datas/lunchData';
import { pumpkin, forest } from '../styles/colors';


const Lunch = ({modal}) => {

    return (
        <View style={styles.lunchContainer}>
            <View style={styles.lunchHeader}>
                <Text style={styles.lunchTitle}>Lunch</Text>
                <MaterialIcons name='keyboard-backspace' size={30} color={forest} onPress={() => modal(false)}/>
            </View>

            <FlatList 
                data={lunchDatas}
                renderItem={ itemData => <MenuCard 
                    picRef={itemData.item.picRef} 
                    title={itemData.item.title}
                    recipe={itemData.item.recipe} 
                    price={itemData.item.price} 
                    mealType='Lunch'  
                /> }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lunchContainer: {
        backgroundColor: pumpkin,
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
        fontSize: 35,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: forest 
    }
})

export default Lunch;