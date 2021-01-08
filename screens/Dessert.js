import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MenuCard from '../components/MenuCard';
import { dessertDatas } from '../datas/dessertData';
import { forest, pumpkin } from '../styles/colors';
import Header from '../components/Header';

const Dessert = () => {

    return (
        <View style={styles.dessertContainer}>
            <Header  title={'Dessert'}  color={pumpkin} backColor={forest} topPad={20}  justify={'space-around'} />
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
        fontSize: 35,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: pumpkin 
    }

})

export default Dessert;