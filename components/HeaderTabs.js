import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { pumpkin, forest } from '../styles/colors';

import Home from '../screens/Home';
import Order from '../screens/Order';

const Tab = createMaterialTopTabNavigator();

const HeaderTabs = () => {

    const tabBarOptions = {
        indicatorStyle: { 
            backgroundColor: pumpkin,

        },
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            style={styles.header}
            tabBarOptions={tabBarOptions}

        >
            <Tab.Screen 
                name="Home"
                component={Home}  
                options={{  
                    tabBarLabel: () => <Entypo name="home" style={styles.homeIcon} size={30} />                   
                }}
                              
            />
            <Tab.Screen 
                name="Order"
                component={Order}
                options={{
                    tabBarLabel: () => <FontAwesome5 name="shopping-bag" style={styles.bagIcon} size={28} />
                }}                          
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        backgroundColor: '#f0f0f0',
    },
    homeIcon: {
        color: pumpkin,
        padding: 10,
    },
    bagIcon: {
        color: pumpkin,
        padding: 10
    }
})

export default HeaderTabs;