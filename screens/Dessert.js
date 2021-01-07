import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MenuCard from '../components/MenuCard';
import { dessertDatas } from '../datas/dessertData';
import { forest, pumpkin } from '../styles/colors';
import Header from '../components/Header';
import Order from './Order';


const Dessert = ({modal}) => {

    const [openOrder, setOpenOrder] = useState(false);

    return (
        <View style={styles.dessertContainer}>
            <Header openOrderModal={setOpenOrder}/>
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
            <Modal visible={openOrder}>
                <Order 
                    openOrder={setOpenOrder} 
                    mealType={mealType} 
                />
            </Modal>

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
        fontSize: 35,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: pumpkin 
    }

})

export default Dessert;