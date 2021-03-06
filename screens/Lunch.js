import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import MenuCard from '../components/MenuCard';
import { lunchDatas } from '../datas/lunchData';
import { pumpkin, forest } from '../styles/colors';
import Header from '../components/Header';

const Lunch = ({modal}) => {

    const [homeVisible, setHomeVisible] = useState(false)

    return (
        <View style={styles.lunchContainer}>
            <Header title={'Lunch'} color={forest} backColor={pumpkin} topPad={20} justify={'space-around'} />
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
    lunchTitle: {
        fontSize: 35,
        fontFamily: 'CrimsonText-SemiBold',
        paddingHorizontal: 20,
        color: forest 
    }
})

export default Lunch;