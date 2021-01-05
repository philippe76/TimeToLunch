import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MenuCard from '../components/MenuCard';
import { dessertDatas } from '../datas/dessertData';
import { forest, pumpkin } from '../styles/colors';


const Dessert = ({modal}) => {
    return (
        <View style={styles.dessertContainer}>
            <View style={styles.dessertHeader}>
                <Text style={styles.dessertTitle}>Dessert</Text>
                <MaterialIcons name='keyboard-backspace' size={30} color={pumpkin} onPress={() => modal(false)}/>
            </View>

            <FlatList 
                data={dessertDatas}
                renderItem={ itemData => <MenuCard 
                    picRef={itemData.item.picRef}
                    title={itemData.item.title}
                    recipe={itemData.item.recipe}
                    price={itemData.item.price}
                    mealType='Dessert'
                /> }                   
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    dessertContainer: {
        backgroundColor: forest,
        flex: 1     
    },
    dessertHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        margin: 20,
        marginBottom: 30
    },
    dessertTitle: {
        fontSize: 30,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: pumpkin 
    }

})

export default Dessert;