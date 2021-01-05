import { StyleSheet } from 'react-native';
import { pumpkin, forest } from './colors'


export const DessertStyle = StyleSheet.create({

// -------- AddCard Component ------- //    
    container: {
        flex: 1,
        backgroundColor: pumpkin
    },
    close: {
        marginVertical: 25,
        color:forest
    },
    title: {
        color: forest,
        fontSize: 37,
        fontFamily: 'Pacifico-Regular',
        maxWidth: 350,
        textAlign: 'center',
        lineHeight: 50
    },
    recipe: {
        color: forest,
        fontFamily: 'CrimsonText-SemiBold',
        fontSize: 20,
        width: '75%',
        textAlign: 'center',
        lineHeight: 23,
        marginVertical: 25
    },
    number: {
        color: forest,
        fontSize: 25,
        fontWeight: '700',
        borderWidth: 1,
        borderColor: forest,
        width: 45,
        height: 45,
        borderRadius: 45/2,
        textAlign: 'center',
        paddingTop: 5,
        marginHorizontal: 15
    },
    iconeNumber: {
        color: forest, 
    },
    price: {
        color: forest,
        fontSize: 28,
        fontWeight: 'bold'
    },


// -------- AddButton Component ------- //    
    addToBag: {
        backgroundColor: forest,
        width: '65%',
        borderRadius: 25,
        padding: 12
    },
    addToBagText: {
        color: pumpkin,
        textAlign: 'center',
        fontSize: 18
    },


// -------- MenuCard Component ------- //    
    menuCardTitle: {
        color: pumpkin,
        fontSize: 20,
        fontWeight: '700',
        maxWidth: 200
    },
    menuCardPrice: {
        color: pumpkin,
        fontSize: 15
    },
    addIcon: {
        marginRight: 70,
        color: pumpkin
    }

})


