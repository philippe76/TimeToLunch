import { StyleSheet } from 'react-native';
import { pumpkin, forest } from './colors'


export const LunchStyle = StyleSheet.create({

// -------- AddCard Component ------- //  
    container: {
        flex: 1,
        backgroundColor: forest
    },
    close: {
        marginVertical: 25,
        color:pumpkin
    },
    title: {
        color: pumpkin,
        fontSize: 40,
        fontFamily: 'Pacifico-Regular',
        maxWidth: 350,
        textAlign: 'center',
        lineHeight: 55
    },
    recipe: {
        color: pumpkin,
        fontFamily: 'CrimsonText-SemiBold',
        fontSize: 19,
        width: '75%',
        textAlign: 'center',
        lineHeight: 20,
        marginVertical: 25
    },
    number: {
        color: pumpkin,
        fontSize: 25,
        fontWeight: '700',
        borderWidth: 1,
        borderColor: pumpkin,
        width: 45,
        height: 45,
        borderRadius: 45/2,
        textAlign: 'center',
        paddingTop: 5,
        marginHorizontal: 15
    },
    iconeNumber: {
        color: pumpkin, 
    },
    price: {
        color: pumpkin,
        fontSize: 28,
        fontWeight: 'bold'
    },


// -------- AddButton Component ------- //  
    addToBag: {
        backgroundColor: pumpkin,
        width: '65%',
        borderRadius: 25,
        padding: 12
    },
    addToBagText: {
        color: forest,
        textAlign: 'center',
        fontSize: 18,
    },


// -------- MenuCard Component ------- //    
    menuCardTitle: {
        color: forest,
        fontSize: 20,
        fontWeight: '700',
        maxWidth: 200
    },
    menuCardPrice: {
        color: forest,
        fontSize: 15
    },
    addIcon: {
        marginRight: 70,
        color: forest
    }

})