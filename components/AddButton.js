import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddButton = ({ buttonStyle, textStyle, text, addTo }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={buttonStyle} onPress={addTo}>
            <Text style={textStyle}> {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default AddButton;



        // <TouchableOpacity style={mealType === 'Lunch'? LunchStyle.addToBag : BreakfastStyle.addToBag} onPress={() => setOpenOrder(true)}>
        //     <Text style={mealType === 'Lunch'? LunchStyle.addToBagText : BreakfastStyle.addToBagText}> ADD TO BAG </Text>
        // </TouchableOpacity>