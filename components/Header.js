import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { pumpkin, forest } from '../styles/colors';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const Header = ({ scene, previous, navigation  }) => {
    
    const { options } = scene.descriptor;
    const title = 
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title 
            : scene.route.name;
    
    return (
        <Appbar.Header style={styles.headerContainer}>
            {previous ? (
                <Appbar.BackAction 
                    onPress={navigation.pop}
                    style={styles.backAction}
                />)
            : (
                <TouchableOpacity onPress={() => navigation.openDrawer() }>
                    <Entypo name="home" style={styles.homeIcon} size={30} />
                </TouchableOpacity>
            )}
            <Appbar.Content 
                title={ previous ? title : <FontAwesome5 name="shopping-bag" style={styles.bagIcon} size={28} /> }
                onPress={navigation.push('Order')}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 60,
        borderBottomWidth: 2,
        borderBottomColor: pumpkin,
        width: '100%'
    },
    backAction: {
        color: pumpkin,   
    },
    homeIcon: {
        color: pumpkin,
        padding: 70,
    },
    bagIcon: {
        color: pumpkin,
    }
})

export default Header;