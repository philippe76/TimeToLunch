import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



const AddButton = ({ buttonStyle, textStyle, text, addTo }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={buttonStyle} onPress={addTo}>
            <Text style={{...textStyle, ...text}}> {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'CrimsonText-SemiBold',
        letterSpacing: 40
    }
})

export default AddButton;

