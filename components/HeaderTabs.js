import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import Home from '../screens/Home';
import Order from '../screens/Order';

const Tab = createMaterialTopTabNavigator();

const HeaderTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            style={styles.header}
            screenOptions={() => ({
                tabBarIcon: () => {
                        return  <Entypo name="home" style={styles.homeIcon} size={30} />
                    }
            })}
        >
            <Tab.Screen 
                name="Home"
                component={Home}                    
            />
            <Tab.Screen 
                name="Order"
                component={Order}
                options={{
                    tabBarIcon: 'bell-outline'
                }}                          
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50
    }
})

export default HeaderTabs;